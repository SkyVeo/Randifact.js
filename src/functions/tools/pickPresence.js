const { ActivityType } = require("discord.js");

module.exports = (client) => {
    client.pickPresence = async () => {
        const fact = await client.getRandomFact();
        if (fact) {
            console.log(`Presence: ${fact}\nDate: ${new Date()}`);

            client.fact = fact;
            client.user.setPresence({
                activities: [
                    {
                        name: fact,
                        type: ActivityType.Playing
                    }
                ],
                status: "online"
            });
        } else {
            console.error("Error no fact found");
        }

        const now = new Date();
        const nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0, 0);
        setTimeout(client.pickPresence, nextHour - now);
    }
}