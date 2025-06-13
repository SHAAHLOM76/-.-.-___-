const fs = require("fs");
module.exports.config = {
  name: "0099",
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
	if (event.body.indexOf("@Muskan Chowduri")==0 || (event.body.indexOf("@Muskan Chowduri")==0 || (event.body.indexOf("@Ahmed Shihib")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: "please দয়া করে কোন ছেলে মেনশন দেবেন না সে এখন ⃝—͟͟͞͞ 𝐂.𝐄.𝐎⸙𝐒𝐇𝐀𝐀𝐇𝐋𝐎𝐌𓆪___//🩷 BOSS এর সাথে বিজি আছে"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
