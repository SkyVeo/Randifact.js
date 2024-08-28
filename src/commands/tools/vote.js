const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("vote")
        .setDescription("A little bit of support will be appreciated"),
    async execute(interaction) {
        await interaction.reply({
            content: "[](https://top.gg/bot/981651003558481994/vote)",
            ephemeral: true
        });
    }
}