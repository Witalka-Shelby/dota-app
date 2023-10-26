const express = require("express");
var d2gsi = require("dota2-gsi");

var server = new d2gsi({
  port: 3002,
});

const app = express();
const port = 3001;
let timer = null;
let rosh = null;

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

  // client.on("map:roshan_state", function (roshan_state) {
  //   if (roshan_state) {
  //     rosh = roshan_state;
  //   }
  // });

  client.on("neutral_items:tier0", function (tier0) {
    console.log(tier0);
    if (tier0) {
      rosh = tier0;
    }
  });
});

app.get("/dotaapi", (req, res) => {
  res.json({ time: timer, rosh: rosh });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
