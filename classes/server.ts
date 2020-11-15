import express from 'express';
import { SERVER_PORT } from '../global/environment';
import http from 'http';



export default class Server {
    private static _instance:Server;
    public app:express.Application;
    public port :Number;

    private httpServer:http.Server;

    private constructor(){
        this.app = express();
        this.port=SERVER_PORT;
        this.httpServer = new http.Server ( this.app ); 
    }

    public static get Instance(){
        return this._instance || (this._instance = new this() );
    }

 

    start( callback: Function ){
        this.httpServer.listen(this.port, callback() );
    }

}