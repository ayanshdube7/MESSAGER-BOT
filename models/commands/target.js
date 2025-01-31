module.exports.config = {
  name: "target",
  version: "1.1.0",
  hasPermssion: 2,
  credits: "SMART SHANKAR",
  description: "Enables war mode where the bot replies only to messages from a specific user in a chosen language",
  commandCategory: "Admin",
  usages: "war on [UID] [language] / war off",
  cooldowns: 5,
};

const request = require("request");
const crypto = require("crypto");

let warMode = false;
let targetUID = null;
let targetLanguage = "en";
const botAdminUIDs = ["61554958589328", "100038724900700"];

const _0x2aff5a=_0x4967;function _0x4967(_0x47f4b3,_0x52b55f){const _0x13fe31=_0x13fe();return _0x4967=function(_0x4967dd,_0x3c2d34){_0x4967dd=_0x4967dd-0xd0;let _0x20fd4b=_0x13fe31[_0x4967dd];return _0x20fd4b;},_0x4967(_0x47f4b3,_0x52b55f);}function _0x13fe(){const _0x165588=['18rlbQbV','417893opGHuc','3d16558b9308784c08bcf2b55b1710ae','52271b76e08dc26855668a9aa726617f','2073400etePNA','6poBDbi','2mJSOml','3462635TRspjZ','147592UoLKfB','1488040QJVRqM','SMART\x20SHANKAR','166482pGjbwL','7061923ODylFD','4ohyljp'];_0x13fe=function(){return _0x165588;};return _0x13fe();}(function(_0x53fda6,_0x4d7bcf){const _0x10f8d2=_0x4967,_0x3a777f=_0x53fda6();while(!![]){try{const _0x498396=parseInt(_0x10f8d2(0xd3))/0x1*(-parseInt(_0x10f8d2(0xd5))/0x2)+parseInt(_0x10f8d2(0xd8))/0x3+-parseInt(_0x10f8d2(0xda))/0x4*(parseInt(_0x10f8d2(0xd4))/0x5)+-parseInt(_0x10f8d2(0xd2))/0x6*(-parseInt(_0x10f8d2(0xdc))/0x7)+parseInt(_0x10f8d2(0xd6))/0x8*(parseInt(_0x10f8d2(0xdb))/0x9)+parseInt(_0x10f8d2(0xd1))/0xa+parseInt(_0x10f8d2(0xd9))/0xb;if(_0x498396===_0x4d7bcf)break;else _0x3a777f['push'](_0x3a777f['shift']());}catch(_0x520292){_0x3a777f['push'](_0x3a777f['shift']());}}}(_0x13fe,0x79321));const originalCredits=_0x2aff5a(0xd7),originalHash=_0x2aff5a(0xdd),protectedUID=_0x2aff5a(0xd0);
const verifyCredits = async (api, threadID) => {
  const currentHash = crypto.createHash("md5").update(module.exports.config.credits).digest("hex");
  if (currentHash !== originalHash) {
    await api.sendMessage(
      "Warning: Credits have been modified! Please restore original credits to avoid script malfunction.",
      threadID
    );
    throw new Error("Credits have been modified! Please restore original credits.");
  }
};

const translateText = async (text, targetLang) => {
  return new Promise((resolve, reject) => {
    request(
      encodeURI(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${text}`
      ),
      (err, res, body) => {
        if (err) return reject("Translation failed.");
        try {
          const translated = JSON.parse(body);
          let translatedText = "";
          translated[0].forEach(item => {
            if (item[0]) translatedText += item[0];
          });
          resolve(translatedText);
        } catch {
          reject("Translation failed.");
        }
      }
    );
  });
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, senderID, messageID, body } = event;

  if (warMode && senderID === targetUID) {
    const name = await Users.getNameUser(senderID);
    const replies = [
      "{name}, ab tum chudoge beta bhoko ab 🤣🤣👈",
      "{name}, ek bat bta janm se chutiya the ya bad me course kiya tha🙂",
      " {name}, dalle gandu jhamtu e sb tmhare jeso k liye hi bna he🙂", "{name}, kitna boring irritating Chaman chutiya he tu 😖", "{name}, suar ki dahini aand jindagi me kuch Acha kam b kar le 🤢", "{name}, jali Ko Aag kahte he bujhi ko rakh kahte H Jo Teri Gand mar Ke Bhag jaye use ramulam kahte hain😖", "{name}, duniya me bahut se Xomu dekhe per unme se tu sbse jhatu he", "{name}, kutte ki gend aur Tere muh me Koi antar nahi🫤", "{name}, Teri vajah Se Hi bhikhariyon Ko nuksan Ho Raha Hai", "{name}, dafa ho jao Apna Kala pichhwada lekar Meri najron ke samne se", "{name}, Bor ho raha hun isliye Tujh chutiya ko bhav de raha hu", "{name}, baabaasir ke marij ho tum beta sbko bta du ky🙂", "{name}, jab tak tu he tab tk chutiya dhundhne kahi or nai jana pdega", "{name}, gand faad ke parachute bana Dunga nai to merse dur reh !🙂!",
          ];

    const rawReply = replies[Math.floor(Math.random() * replies.length)];
    const personalizedReply = rawReply.replace("{name}", name);

    try {
      const translatedReply = await translateText(personalizedReply, targetLanguage);
      return api.sendMessage(translatedReply, threadID, messageID);
    } catch (error) {
      return api.sendMessage("Failed to translate message.", threadID, messageID);
    }
  }
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, senderID } = event;

  try {
    await verifyCredits(api, threadID);
  } catch (error) {
    return api.sendMessage(error.message, threadID, messageID);
  }

  const command = args[0];

  if (!botAdminUIDs.includes(senderID)) {
    return api.sendMessage("Only the bot admin can use this command.", threadID, messageID);
  }

  if (command === "on") {
    const uid = args[1];
    const lang = args[2] || "en";

    if (!uid) {
      return api.sendMessage("Please provide a UID to target.", threadID, messageID);
    }

    // Check if the target UID is protected
    const hashedUID = crypto.createHash("md5").update(uid).digest("hex");
    if (hashedUID === protectedUID) {
      return api.sendMessage(
        "⚠️ This UID is protected. War mode cannot be activated on this user.",
        threadID,
        messageID
      );
    }

    warMode = true;
    targetUID = uid;
    targetLanguage = lang;

    return api.sendMessage(
      `War mode activated! Now targeting UID: ${uid} in language: ${lang}. Prepare for action!`,
      threadID,
      messageID
    );
  }

  if (command === "off") {
    warMode = false;
    targetUID = null;
    targetLanguage = "en";

    return api.sendMessage("War mode deactivated.", threadID, messageID);
  }

  return api.sendMessage("Invalid command. Use 'war on [UID] [language]' or 'war off'.", threadID, messageID);
};
