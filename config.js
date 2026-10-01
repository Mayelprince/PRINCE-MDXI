import __import0 from "fs";
import * as __import1 from "dotenv";
const fs = __import0;
if (fs.existsSync('config.env')) __import1.config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

export default {
    SESSION_ID: process.env.SESSION_ID || '', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
