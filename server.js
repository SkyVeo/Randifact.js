const express = require("express");
const server = express();

server.get('/', (req, res) => {
    res.send("Hello. I am alive!");
});

function keepAlive() {
    server.listen(3000, () => {
        console.log("Server is now ready");
    });
}

module.exports = keepAlive;