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
let database = firebase.database();
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
        let socketID;
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
    let dataRef = this.af.database.list('/chats/' + this.currentUser.company);
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
//# sourceMappingURL=server.js.map