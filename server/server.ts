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

let database = firebase.database();

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
        let socketID: string;
            for (let i = 0; i < clientList.length; i++) {
                if (data.to == clientList[i].username) {
                    socketID = clientList[i].socketID;
                }
            }
            console.log(socketID);
            //storeChatToFirebase(data);
            io.sockets.connected[socketID].emit('chat', data);
    });
});

function storeChatToFirebase(data) {
    let dataRef = this.af.database.list('/chats/' +  this.currentUser.company);
    return dataRef.push(data);
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