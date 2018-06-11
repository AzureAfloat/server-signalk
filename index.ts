// import * as SignalKServer from "signalk-server";
var SignalKServer = require("signalk-server");

require('dotenv').config();
let server = new SignalKServer();

server.start()
  .catch(err => {
    console.log(err)
    process.exit(-1)
  })

//make sure we're connected to the web

