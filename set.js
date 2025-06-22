
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU23KjRhD9la15lWrFXUJVrgpIgNBdAhnJqTwMMMBY3DQzgOQt5w/yJXlw5RucD0sh2+utbLJxeBp6pvuc7j7dX0BeYIpm6AKGX0BJcA0Zao/sUiIwBHoVRYiALgghg2AIOFs/p6tJNY/3mTI/33cEzzMKc9uZpMRz62a1smPYz/jYs2/AYxeUlZ/i4EcBpVpYbYg8mnd8KZK23kMY9KSO2skNpu+T5o42xvmiHv1EugGPbUSICc5jo0xQhghMZ+iyhph8jP5sWViQ69yebIl/sG8lI5fCwt7O5fHJroJlY9qhOq/DMDAWH6N/cPFR6OvSXWGH/KXC1tQvGnfmeiX1G1v0il2iPUT2aZTvXuhTHOcotEOUM8wuH667p80Saa/MBI9bUKTPD0rf71QZ3UlKZRqYmusygmhajtLgY8RpWR+yzVwrTg+EOzQyx9+KGzaujK03qfOBRZSZFSvnGXGLb4mvyZtWjv+n7oa5lw25CTewVy9jx5oeKmhacjR1K3FlTbjBvCfY1fpSCYOP0fcCR5A0VpxkDzuRt8+lPORLqZHFNTVhB65Gm5w0h+nhXnunD1lFfsRyl0XbVbI8zxWvGuzcMN43Uc6bHXMNl/bRIdxJ6s2z9eDg84vofF+vttGKRvEeBlYeLtw0rJYzTtxDObnsJmvsarO5qsc314yO6GKHYMg/dgFBMaaMQIaLvLXJahfAsHZQQBC7VhdkMl8cJprbM7TjnXo2RQfNlYnVwYLXQ6IUOPi4iPb9qarQG9AFJSkCRCkKJ5iyglwWiFIYIwqGP18b1eZMUFYwNMUhGAJB7Ct9dSDJiir9RD83CWQUluXnHDHQBREpsgUCQ0Yq1AVXB13S++PR2DQl3jT0kWgqsqxJsimPFY0bi6M2w+wF1MUZogxmJRjyfZmTZHUgco+/dEGOzuxFPm3SitoFESaU7fKqTAsYvmnr7RIGQVHlzLnkwag9IAKG/LsZMYbzmLaZVTkkQYJrNGrzAMMIphR9rTMiKHy1ffVuvULEIE4pGILRbGwnp41lTMmcH9iWpduxNoo18I72Jp6X7kyc+1El3y/rOqoejsKyp5/lpRi5nSaxjequo/TM0Jq5i8lRuvmHIGAItNAhtp8eLhf3bjHucTH1LrHv2wjizWDkMX1Hk7M1W7lSKUwju9mmTYM4TTpvp2Jm5OjEAn+wldhOv5WsxUHYLbTeuLlp0UJU4wB9C7YdBIqwTJFklmOSTgqcq9Tpm5q/cgqmeGvxaK1PdZ0XE2cj8/mAbPTUn9nJ9nZanZ2BuN4QlU36qnQujGUsn099d3UFuza9reV3ohoK8ve6ymH7Giyen/787fj89Px7mn769dPs+Y/npzhhFHRBeg2k8JyocKrKCSKnXEO19rcZTl93J36VN77+RhhdV9Erxn9yealSqzXusftNjNfl9i8LQt9yRUOqw4PfF/tUXt5HTYDcUOR61Hb0eRZV9Xm/xccHXV6Bx1b0ZQpZVJCs3biZD0EXkKJqlWvnUfEDpJG2s7XX1ZFCyrT3afj7gCkcx/dfXq1JUU4gTcAQ5Jmo+6ALsotWlg6D7G22gNZ+q3wLHv8CARcnMv0HAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by m", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237679845694", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "KNIGHTS", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "KNIGHTS", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
