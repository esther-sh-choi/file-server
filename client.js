const net = require("net");
const PORT = 8087;

// I expect the server to be running on this same computer - localhost
const client = net.createConnection({
  host: "localhost",
  port: PORT,
});

client.setEncoding("utf8");

process.stdin.on("data", (fileName) => {
  client.write(fileName);
});

client.on("connect", () => {
  console.log("Client is connected to the server");
});

client.on("data", (message) => {
  if (message) console.log(message);
});
