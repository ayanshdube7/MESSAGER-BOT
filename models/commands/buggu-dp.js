const fs = require("fs");
module.exports.config = {
  name: "Buggu",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "haniya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@adhya")==0 || event.body.indexOf("@buggu")==0 || event.body.indexOf("pihu")==0 || event.body.indexOf("pihu shrma")==0) {
    var msg = {
        body: "𝐲𝐞 𝐫𝐚𝐡𝐢𝐧 𝐛𝐮𝐠𝐠𝐮 𝐣𝐢 😎 𓆩♡𓆪🙈",
        attachment: fs.createReadStream(__dirname + `/ARIF-BABU/sonam.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😎", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
