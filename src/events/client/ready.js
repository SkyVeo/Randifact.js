module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        await client.pickPresence();
    }
}