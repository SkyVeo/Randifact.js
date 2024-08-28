module.exports = (client) => {
    client.getRandomFact = async () => {
        const facts = await client.readFactsFiles("./facts/randifact.txt", "./facts/safe.txt");

        return facts[Math.floor(Math.random() * facts.length)];
    }
}