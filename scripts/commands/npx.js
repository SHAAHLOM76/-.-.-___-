const fs = require("fs");
module.exports = {
  config:{
	name: "😒",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("😒")==0) {
		var msg = {
				body: "কি্ঁরে্ঁ এ্ঁভা্ঁবেৃঁ তা্ঁকা্ঁস্ঁ কে্ঁন 😚🥀⃝—͟͟͞͞ 𝐂.𝐄.𝐎⸙𝐒𝐇𝐀𝐀𝐇𝐋𝐎𝐌𓆪___//🩷",
				attachment: fs.createReadStream(__dirname + `/Nayan/Mayabi.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
