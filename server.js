/* establish an approot */
global.approot = __dirname;

/* package imports */
let __base = global.approot;
require("dotenv").config();
let express = require("express");
let app = express();
let bodyParser = require("body-parser");

/* app imports */
let consoleLogger = require(__base + "/utils/logger.js");
let {PORT} = process.env;
let routes = require(__base + "/routes/index.routes.js");

const App = () => {
  /* we need this */
  app.disable("x-powered-by");
  app.use(bodyParser.json());

  /* call routes central handler */
  routes(app);

  /* start the server */
  app.listen(PORT, function() {
    consoleLogger("App running @ http://localhost:" + PORT + "/");
  });
};
App();
