const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("fact")
        .setDescription("Displays the current fun fact"),
    async execute(interaction, client) {
        await interaction.deferReply();

        const embed = new EmbedBuilder()
            .setColor(0x1f8b4c)
            .setAuthor({
                iconURL: client.user.displayAvatarURL(),
                name: client.fact
            });

        const button = new ButtonBuilder()
            .setLabel("Vote here for bonus fun facts")
            .setURL("https://top.gg/bot/981651003558481994/vote")
            .setStyle(ButtonStyle.Link);

        if (await client.hasVoted(interaction.user)) {
            embed.setFooter({
                text: `Bonus fun fact because you voted\n${await client.getRandomFact()}`
            });
        }

        await interaction.editReply({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)]
        });
    }
}