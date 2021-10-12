import * as Server from './server.js'; 
import http from "http";
import { parse } from "querystring";

const PORT = 3000;
const HOST = 'localhost';


const server = http.createServer(Server.jsonRequestListener);

server.listen(PORT, HOST, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`Server is listening on ${PORT}`);
});


