module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61554958589328") {
    var aid = ["61554958589328","100094941194624", "100080287361043","100094941194624" , "100009293679350"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["oye Mere se bat Kar use mention ni😏", "Kya Hua mere owner ko q Bula Rhe Ho meri sikayt to ni kroge 😶", "Wo Shayad Busy h😐🙄", "usko mention ni kro 🤛🏻", "Kya Kam Hai mujhe batao na 😌", "ufff Kya pareshani he tmhari muje batao use ni bulao🙃", "Kya kaam hai mujhse bolo🏋🏻", "sab pata chal raha hai 🙂" , "ky hua mujhe batao mai unko bta dunga 😶"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
