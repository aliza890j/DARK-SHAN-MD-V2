const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'DARK-SHAN-MD=NjsnADKC#wvTAmNNh5Unyd-VbL2riI_wD6oL2QIUvrh2sjns4Jzo' : process.env.SESSION_ID,
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? '' : process.env.GITHUB_USERNAME,
GITHUB_TOKEN: process.env.GITHUB_TOKEN === undefined ? '' : process.env.GITHUB_TOKEN,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'true' : process.env.ONLY_ME,
ADDRESSES: process.env.ADDRESSES === undefined ? '' : process.env.ADDRESSES,
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? `Hello im alive now !!` : process.env.ALIVE_MSG,
ALIVE_BUTTONS: process.env.ALIVE_BUTTONS === undefined ? `` : process.env.ALIVE_BUTTONS,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? `94772108460` : process.env.OWNER_NUMBER,
MAX_SIZE: process.env.MAX_SIZE || 900,
AUTO_REACT:process.env.AUTO_REACT === undefined ? 'false' : process.env.AUTO_REACT, 
ONLINE_STATUS: process.env.ONLINE_STATUS  === undefined ? 'false' : process.env.ONLINE_STATUS, 
FOOTER: process.env.FOOTER=== undefined ? '‌ᴋᴜꜱʜᴀɴ': process.env.FOOTER,
BUTTON_MSG: process.env.BUTTON_MSG || 'nonbtn'  ,
FLATFROM: process.env.FLATFROM || 'netlify'  ,
AUTO_AI_MODE: process.env.AUTO_AI_MODE || 'on'  ,
PREFIX: process.env.PREFIX || '#'  ,
TIME_ZONE: process.env.TIME_ZONE || 'asia/colombo'  ,
ANTI_DELETE : process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,    
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === undefined ? 'online' : process.env.ALWAYS_ONLINE,    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ? 'false' : process.env.AUTO_READ_STATUS,
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS === undefined ? 'on' : process.env.AUTO_REACT_STATUS,
ANTI_CALL: process.env.ANTI_CALL || false  ,
BOT_DETECT: process.env.BOT_DETECT || 'true'  ,
AUTO_REPLY: process.env.AUTO_REPLY || 'true'  ,
AUTO_BLOCK:process.env.AUTO_BLOCK === undefined ? 'false' : process.env.WAPRESENCE,  
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94772108460' : process.env.OWNER_NUMBER,
OWNER_NAME: process.env.OWNER_NAME === undefined ? 'KUSHAN' : process.env.OWNER_NAME,
ANTI_BAD: process.env.ANTI_BAD || true  ,    
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_LINK_DETICATED: process.env.ANTI_LINK_DETICATED === undefined ? 'delete' : process.env.ANTI_LINK_DETICATED,    
READ_MESSAGE: process.env.READ_MESSAGE === undefined ? 'false' : process.env.READ_MESSAGE,    
WAPRESENCE:process.env.WAPRESENCE === undefined ? 'false' : process.env.WAPRESENCE,// 'composing' (typing) | 'recording' (recording) | 'paused'
WORK_TYPE:process.env.WORK_TYPE === undefined ? 'false' : process.env.WORK_TYPE,    
LOGO: process.env.LOGO === undefined ? `https://telegra.ph/file/98b9cdf149a52bef8f4d5.jpg` : process.env.LOGO
}
