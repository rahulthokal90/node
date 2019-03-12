
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port:3000});

router.get("/", async (req, res) => {
  
  console.log("hello");
  // wss.on("connection",async function(ws){
  //   try {
  //     setInterval(function() {
  //       getApiAndEmit(ws)
  //   },1000);
  //   } catch(e) {
  //     //logger.debug("Sync error: " + e);
  //     ws.close();
  //   }
  //   const getApiAndEmit = async ws => {
  //     ws.onmessage = function(payload){
  //       console.log("p "+payload.data);
  //     }
  //     ws.send("ATM", function(error) {
  //       if(error == undefined)
  //           return;
  //       // else
  //       //   logger.debug("Async error:"+error);
  //     });
      
  //   };
  
  // });
});


router.post("/", [auth], async (req, res) => {


});


module.exports = router;
