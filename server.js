const fs = require("fs");
const net = require("net");

const PORT = 8087;

const server = net.createServer();

server.on("connection", (client) => {
  client.setEncoding("utf8");

  client.on("data", (fileName) => {
    console.log(`File Name: ${fileName}`);

    fs.readFile(fileName.trim(), { encoding: "utf8" }, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(data);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port=${PORT}`);
});
