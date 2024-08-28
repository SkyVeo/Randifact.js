const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");

module.exports = (client) => {
    client.handleCommands = async() => {
        const commandFolders = fs.readdirSync("./src/commands");

        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith(".js"));
            const { commands, commandsArray } = client;

            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandsArray.push(command.data.toJSON());
                
                console.log(`Command: ${command.data.name} has been passed through the handler`)
            }
        }

        const clientId = "861262926718828546";
        const guildId = "700086135384309811";
        const rest = new REST({ version: "9" }).setToken(process.env.token);
        try {
            console.log("Started refreshing application (/) commands.");

            await rest.put(
                Routes.applicationGuildCommands(clientId, guildId),
                { body: client.commandsArray }
            );

            console.log("Successfully reloaded application (/) commands.");
        } catch (error) {
            console.error(error);
        }
    };
}