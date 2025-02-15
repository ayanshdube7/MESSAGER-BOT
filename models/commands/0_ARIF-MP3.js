const fs = require("fs");
module.exports.config = {
  name: "Ayansh",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Ayanx BABU", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Bot kon banaya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@Ayansh")==0 || event.body.indexOf("Ayans")==0 || event.body.indexOf("ayansh")==0 || event.body.indexOf("Ayansh")==0) {
    var msg = {
        body: "Sb pta xal rha he😌",
        attachment: fs.createReadStream(__dirname + `/ARIF-BABU/dk.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
