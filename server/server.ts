/*****************************************************************************
 ***  Import some modules from node.js (see: expressjs.com/en/4x/api.html)   *
 *****************************************************************************/
/* express server */
import * as express from "express";
import * as session from "express-session";
import { Request, Response } from 'express';

/* socket connection */
import * as socket from "socket.io";

/* body parser to retreive posted data */
import * as bodyParser from "body-parser";

import * as firebase from "firebase";

/* https functionality */
import * as fs from "fs";
import * as http from 'http';
import * as https from 'https';

/*const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

let db = admin.firestore();*/

let config = {
    apiKey: 'AIzaSyC98zadrb1VmdtNOPkCDxECJ9b2PODCSRY',
    authDomain: 'chat-app-67395.firebaseapp.com',
    databaseURL: 'https://chat-app-67395.firebaseio.com',
    projectId: 'chat-app-67395',
    storageBucket: 'chat-app-67395.appspot.com',
    messagingSenderId: '572008863146'
};
firebase.initializeApp(config);
let database = firebase.database();

/*****************************************************************************
 ***  Class Client                                                           *
 *****************************************************************************/
class Client {
    socketID: string;
    userID: string;
    username: string;

    constructor(socketID: string, userID: string, username: string) {
        this.socketID = socketID;
        this.userID = userID;
        this.username = username;
    }
}


let router = express();
// router.listen(8080);
//let server = https.createServer(credentials, router).listen(4200);
//http.createServer(router).listen(8080);
let server = router.listen(8080, function(){});
let io = socket(server);
console.log(`
	-------------------------------------------------------------
	Aufruf: https://localhost:4200
	-------------------------------------------------------------
`);


/*****************************************************************************
 ***  set up webSocket                                                       *
 *****************************************************************************/
let clientList: Client[] = [];
io.on('connection', (socket) => {
    socket.emit('connected', function () {
        console.log('connected');
    });
    socket.on('socket_info', function (data) {
        clientList.push(new Client(socket.id, data.userID, data.username));
        console.log(data.username + ' connected');
        io.sockets.emit('getClientList', clientList);
    });

    socket.on('disconnect', function () {

        for (let i = 0; i < clientList.length; ++i) {

            if (clientList[i].socketID == socket.id) {
                console.log(clientList[i].username + ' disconnected');
                clientList.splice(i, 1);
                io.sockets.emit('getClientList', clientList);
                break;
            }
        }


    });
    //listens on "chat"-emit to then emit the received data back to the client
    socket.on('chat', function (data) {
        clientList.forEach((client) => {
            if (data.from == client.username) {
                io.sockets.connected[client.socketID].emit('chat', data);
            }
            if (data.to == client.username) {
                io.sockets.connected[client.socketID].emit('chat', data);
            }
        });

        //storeChatToFirebase(data);

    });

    socket.on('storeChat', function(chat){
        storeChatToFirebase(chat);
    });

    socket.on('getChat', function (item) {
        console.log("getChat ausgelöst");
        firebase.database().ref('/chats/'+item).once('value', function(snapshot) {
            let returnArr = [];

            snapshot.forEach(function(childSnapshot) {
                let item = childSnapshot.val();

                returnArr.push(item);
            });

            socket.emit('takeChat', returnArr);
        });


    })
});

function storeChatToFirebase(data) {

    firebase.database().ref("/chats/"+data.from).push({
        to: data.to,
        message: data.message
    });

    /*let docRef = db.collection(data.from).doc(data.to);

    let setChat = docRef.set({
        message: data.message,
    });*/
    //return Promise.all([setChat]);
}

function getChatFromFirebase(item) {
    console.log("getChatFromFirebase ausgelöst");
    firebase.database().ref('/chats/'+item).on('value', function(snapshot) {
        let returnArr = [];

        snapshot.forEach(function(childSnapshot) {
            let item = childSnapshot.val();

            returnArr.push(item);
        });

        console.log(returnArr);
        return returnArr;

    });
}



/*//--- static routes -----------------------------------------------------------
router.use("/client", express.static(clientPath));
router.use("/jquery", express.static(clientPath + "/node_modules/jquery/dist"));*/


/*****************************************************************************
 ***  activate routes for angular application                                *
 *****************************************************************************/
router.use("/", express.static(__dirname + "/client"));

// Routen innerhalb der Angular-Anwendung zurückleiten
router.use("/*", express.static(__dirname + "/client"));