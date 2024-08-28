const topggToken = process.env["topggToken"];

module.exports = (client) => {
    client.hasVoted = async (user) => {
        const fetch = require("node-fetch");

        const botId = "981651003558481994"; // client.user.id;
        const url = `https://top.gg/api/bots/${botId}/check?userId=${user.id}`;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: { Authorization: topggToken }
            });
            const json = JSON.parse(await response.text());

            if ("error" in json)
                throw new Error(json.error);

            return json.voted;
        } catch (error) {
            console.error(`Error checking the website: ${error}`);
            return false;
        }
    }
}