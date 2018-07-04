"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*****************************************************************************
 ***  Import some modules from node.js (see: expressjs.com/en/4x/api.html)   *
 *****************************************************************************/
/* express server */
const express = require("express");
/* socket connection */
const socket = require("socket.io");
const firebase = require("firebase");
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
    constructor(socketID, userID, username) {
        this.socketID = socketID;
        this.userID = userID;
        this.username = username;
    }
}
let router = express();
// router.listen(8080);
//let server = https.createServer(credentials, router).listen(4200);
//http.createServer(router).listen(8080);
let server = router.listen(8080, function () { });
let io = socket(server);
console.log(`
	-------------------------------------------------------------
	Aufruf: https://localhost:4200
	-------------------------------------------------------------
`);
/*****************************************************************************
 ***  set up webSocket                                                       *
 *****************************************************************************/
let clientList = [];
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
    socket.on('storeChat', function (chat) {
        storeChatToFirebase(chat);
    });
    socket.on('getChat', function (item) {
        console.log("getChat ausgelöst");
        firebase.database().ref('/chats/' + item).once('value', function (snapshot) {
            let returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                let item = childSnapshot.val();
                returnArr.push(item);
            });
            socket.emit('takeChat', returnArr);
        });
    });
});
function storeChatToFirebase(data) {
    firebase.database().ref("/chats/" + data.from).push({
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
    firebase.database().ref('/chats/' + item).on('value', function (snapshot) {
        let returnArr = [];
        snapshot.forEach(function (childSnapshot) {
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
//# sourceMappingURL=server.js.map