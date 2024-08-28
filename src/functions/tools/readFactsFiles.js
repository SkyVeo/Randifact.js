const fs = require("fs");

module.exports = (client) => {
    client.readFactsFiles = async (...files) => {
        if (files.length === 0)
            files = fs.readdirSync("./facts").filter(file => file.endsWith(".txt"));

        const facts = [];
        for (const file of files) {
            try {
                if (!file.endsWith(".txt"))
                    throw new Error ("Invalid file type (required: .txt)");

                const content = fs
                    .readFileSync(file, "utf8")
                    .split("\n")
                    .map((line) => line.trim())
                    .filter((line) => line.length > 0 && line.length <= 128);

                facts.push(...content);
            } catch (error) {
                console.error(`Error reading file ${file}: ${error}`);
            }
        }

        console.log(`Read ${facts.length} facts from ${files.length} files`);

        return facts;
    }
}