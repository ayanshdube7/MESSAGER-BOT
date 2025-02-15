const fs = require("fs");
module.exports.config = {
  name: "Khana",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ARIF BABU", 
  description: "Just Respond",
  usePrefix: true,
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("lanch") ||
     react.includes("bukh") || react.includes("lunch") || react.includes("kana") ||
react.includes("dinner") ||
react.includes("dinnr")) {
    var msg = {
        body: `😋😋`,attachment: fs.createReadStream(__dirname + `/ARIF-BABU/KHANA.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍲", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
