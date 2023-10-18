import express from "express";
import d2gsi from "dota2-gsi";

let options = {
  port: 3002,
};
var server = new d2gsi([options]);

const app = express();
const port = 3001;
let timer = 420;

server.events.on("newclient", function (client) {
  console.log("New client connection, IP address: " + client.ip);
  if (client.auth && client.auth.token) {
    console.log("Auth token: " + client.auth.token);
  } else {
    console.log("No Auth token");
  }

  client.on("map:clock_time", function (clock_time) {
    if (clock_time) timer = clock_time;
  });
});

app.get("/", (req, res) => {
  res.send(`${timer}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
