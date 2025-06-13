const fs = require("fs");
module.exports.config = {
  name: "iloveu",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I love you")==0 || (event.body.indexOf("i love you")==0 || (event.body.indexOf("I love u")==0 || (event.body.indexOf("I love you")==0 || (event.body.indexOf(" cudi")==0 {
		var msg = {
				body: "Hmm... বস  ⃝—͟͟͞͞ 𝐂.𝐄.𝐎⸙𝐒𝐇𝐀𝐀𝐇𝐋𝐎𝐌𓆪___//🩷 ও তোমাকে ভালোবাসে😇😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
