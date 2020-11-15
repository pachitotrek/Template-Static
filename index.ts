import Server from "./classes/server";
import bodyParser from "body-parser";
import express from 'express';
import cors from "cors"
import router from "./routes/routes";

const server = Server.Instance;

//BodyParser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
server.app.use(express.static(__dirname+'/public'));
server.app.use( cors() );
server.app.use('*',router);

//cors


server.start(()=>{
    console.log("Servidor inicializado");    
});





