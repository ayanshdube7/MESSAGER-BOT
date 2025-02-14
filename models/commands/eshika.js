const fs = require("fs");
module.exports.config = {
  name: "eshika",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Eshika",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("eshika")==0 || event.body.indexOf("eshika")==0 || event.body.indexOf("@eshika")==0 || event.body.indexOf("@eshika")==0) {
    var msg = {
        body: "😌ishikaa here😌",
        attachment: fs.createReadStream(__dirname + `/FAIZ/Sanam .gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
