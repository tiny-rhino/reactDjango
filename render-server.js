const argv = require("yargs")
  .option("p", {
    alias: "port",
    description: "Specify the server's port",
    default: 8001
  })
  .option("a", {
    alias: "address",
    description: "Specify the server's address",
    default: "127.0.0.1"
  })
  .help("h")
  .alias("h", "help")
  .strict().argv;

const ADDRESS = argv.address;
const PORT = argv.port;

/* Configure Babel and React parsing */
const bodyParser = require("body-parser");
const reactRender = require("react-render");
const babelrc = require("./babelrc");

require("babel-register")(babelrc);

/* Configure server */
const http = require("http");
const express = require("express");
const app = express();
const server = http.Server(app);

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.end("React render server");
});

app.post("/render", function(req, res) {
  reactRender(req.body, function(err, markup) {
    if (err) {
      res.json({
        error: {
          type: err.constructor.name,
          message: err.message,
          stack: err.stack
        },
        markup: null
      });
    } else {
      res.json({
        error: null,
        markup: markup
      });
    }
  });
});

server.listen(PORT, ADDRESS, function() {
  console.log(
    "React render server listening at http://" + ADDRESS + ":" + PORT
  );
});
