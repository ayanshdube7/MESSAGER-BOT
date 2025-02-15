const fs = require("fs");
module.exports.config = {
  name: "mochu",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "nam",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@Rohit")==0 || event.body.indexOf("@kalu😜")==0 || event.body.indexOf("@Rohit Sharma")==0 || event.body.indexOf("@Rohit")==0) {
    var msg = {
        body: " Ye Raha Kalu 👇🏻",
        attachment: fs.createReadStream(__dirname + `/cache/mochu.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌚", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
