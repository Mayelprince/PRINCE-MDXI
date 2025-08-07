
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", // PRINCE-MD~H4sIAAAAAAAAA61V246jRhD9lahfx1qDuVsaaQGD8QUbX/AtiqI2NNA2N0ODjVd+i5I8RNFEkfKUkfKav5tPiLBnsptkszuRgoQERan6nFN1incgTnCOBqgC7XcgzXAJCaofSZUi0AZK4XkoAw3gQgJBG0Bll/mIcWj3YJX22QgIs1d2o4QKO74gjM2Qxz2REKjF7D24NEBabEPsfKKguPYEg9K15UAVLYOfpWhTYmlIG4dJKcfLJoM2emDvsef79+BSV4Q4w7GvpQGKUAbDAaosiLPXwWeN0Y6Zbub43JruTtZidzSINKzMku07VVcacS479pP0LqCo18Efz86SuQ3KYkef+5TA0sJGHu2qgnSGrGt1Vvv9Ysm1lIhStRv8HPsxcnsuigkm1at1L7qCVfZFPmKschwcDn17fgqIzGfzPmPPknE1PYWmOaPs6Pg64KbBNgtrLw7KMx1ubUIp49ZqTgQnTzG3mQyc1sJshtocdf4C3MpeZmX/X3Tv6b1l0rGPWOeO43TdZBG7cqBbdAp3GVTTLj1QB4fVUJ/S2uvgB+ZmJUT+Xb5LY20QeDPRcKgdP2+yy4XIi2i0vNMZc536OvUePiRF9imUJ3PZ1AZ2NeCWbD7jVoUq+6krStM8YWaTzma123N20jrvnHy8Ng3ELoVBEY82TLNbNOfqaJJESWEeiEjngT3e24Vexbvj/ZXRHlU9F7TpSwNkyMc5ySDBSVzHWpTUANAtZ8jJELnKCwIqU+1t1r9TDtaJM80cmrqohNg7xKOti6Gj7nv6VF5FlXYPGiDNEgflOXINnJMkq0yU59BHOWh/ee1UTTpDUUJQH7ugDThKYlmOZSSWepu/OQaQ5DBN38SIgAbwsiQyEWiTrEANcM1neUaRWpKqiRJPy7wiMWxHEWSa1lmKk3S2ZhjdzpzjCOUERilo0wLHci2e5oVL43+BwQmi3qEESRdEhdVESeOVDsUqtNhRNUlh5M/AEC9fNUCMTuQ2xbX2DN0AHs5yYsdFGibQfRnxl4/QcZIiJrMqdtT6AWWg/UEYEYJjP6+JFTHMnACXSK15gLYHwxz92W6UIfeFy/MKUxO3nsLZasRQi6UBaux1ob9L0279U5zwmkSLlERRjCTyPCcJXLv1to43QAzrSuDp529/f/rlt1+fHh9+eHp8+Onrp8eH754eH358DtT390+PD998UWfV4j3TqlG4iEAc5qAN1FG8iFlT10xhdxYn3a6s+bLqy+C9DC/mug2vsmJnm5O0w0xAbfpHXzQSOZTE2da2l5RGyRk94Zt9bpOo/v1HitSawLGe5ka36e+1dLT1bJ45sCk5ImVoWVufNeYneTHIugOjx0ohwx3z/dZleEbXy2MxTMaUYHWYFbPz79ZnaQmrMDqqcu3EBnBRiR304WH5OPbmxkEeUsK8dzamTqwZttbztuVGLJrNjYac48RQ9Rgq8gKrCbWGa1fgje2+V8FWK+x0qKisypF92oTD9SiKBGYfyDfbX9dO+Lzu8bMh8fXVw+i6PZ+b9ZmG32DXU0ldGh9UeN7G/7LRlMniToscb80S1u3OnJ6l8HLf87SI1nWijOSBZI/LCi2hnIBLbY80hMRLsqj+18dullznKUuKesx7sZd84jBVtnuyf+MdwpzI763zMTfytywrS1ID5gFog1aXlaOi9kElp+mMQPLiRCDX19DVweUPbPVnNrIIAAA=
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //50944543940
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private, // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "50944543940, // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "la reine noire 🤧💖 // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true
ANTICALL: process.env.ANTICALL || "kickNTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "la reine noire 🤧💖
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "true",
GOODBYE: process.env.GOODBYE || "true,    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
