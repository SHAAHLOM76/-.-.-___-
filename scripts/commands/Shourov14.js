const fs = require("fs");
module.exports.config = {
  name: "Shourov14",
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
	if (event.body.indexOf(",")==0 || (event.body.indexOf(",")==0 || (event.body.indexOf(",")==0 || (event.body.indexOf(",")==0)))) {
		var msg = {
				body: "ওরে কেউ মেনসন দিবি না ও বস ⃝—͟͟͞͞ 𝐂.𝐄.𝐎⸙𝐒𝐇𝐀𝐀𝐇𝐋𝐎𝐌𓆪___//🩷 এর ভালোবাসা and বউ 😍🥰 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
