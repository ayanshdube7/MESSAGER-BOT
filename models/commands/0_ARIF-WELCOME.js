const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
                name: "welcome",
                version: "1.0.1",
                hasPermssion: 0,
                credits: "SHAAN",
                description: "no prefix",
        usePrefix: false,
                commandCategory: "No command marks needed",
                usages: "Yo Yo",
                cooldowns: 5,
};

const gifs = [
                "https://i.imgur.com/7iDiDmx.gif",
                "https://i.imgur.com/J3oUOBu.gif",
                "https://i.imgur.com/1JHNURO.gif",
                "https://i.imgur.com/tHEXvmB.gif",
                "https://i.imgur.com/MLO0Dsu.gif"
];

const messages = [
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟💐 \n──────────────────\n\n🙋  🅆🄴🄻🄲🄾🄼🄴  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟💐 \n──────────────────\n\n🙋  🅆🄴🄻🄲🄾🄼🄴  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟💐 \n──────────────────\n\n🙋  🅆🄴🄻🄲🄾🄼🄴  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟💐 \n──────────────────\n\n🙋  🅆🄴🄻🄲🄾🄼🄴  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐 𝐀𝐲𝐚𝐧𝐬𝐡፝֟፝֟💐 \n──────────────────\n\n🙋  🅆🄴🄻🄲🄾🄼🄴  🙋\n"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
                var { threadID, messageID } = event;
                var name = await Users.getNameUser(event.senderID);

                if (event.body.toLowerCase().startsWith("Wlm") || 
                                event.body.toLowerCase().startsWith("thanks") || 
                                event.body.toLowerCase().startsWith("thankyou") || 
                                event.body.toLowerCase().startsWith("Thankyou") || 
                                event.body.toLowerCase().startsWith("THANKYOU")) { 

                                // Select random GIF and message
                                const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
                                const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
                                const downloadPath = path.join(__dirname, 'welcome-Gif-Images.gif');

                                // Download image from Imgur
                                request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                                                var msg = {
                                                                body: randomMessage,
                                                                attachment: fs.createReadStream(downloadPath)
                                                };
                                                api.sendMessage(msg, threadID, messageID);
                                                api.setMessageReaction("🥺", event.messageID, (err) => {}, true);
                                });
                }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
