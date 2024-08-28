const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("I have a help command, that's a fact"),
    async execute(interaction, client) {
        await interaction.reply({
            content: `Click on ${client.user} to learn a fact every hour`,
            ephemeral: true
        });
    }
}