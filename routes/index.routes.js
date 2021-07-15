/* app imports */
const __base = global.approot;
const appMiddleware = require(__base + "/middleware/app.middleware.js");
const controller = require(__base + "/controllers/handlers/index.handlers.js");
const shrinkController = require(__base + "/controllers/handlers/shrink-url.handlers.js");
const statsController = require(__base + "/controllers/handlers/get-stats.handlers.js");

/* list and invoke all routes from this point */
module.exports = (app) => {
  app.get("/", appMiddleware.middlewares, controller);
  app.post("/api/shrink-url", appMiddleware.middlewares, shrinkController);
  app.post("/api/get-stats", appMiddleware.middlewares, statsController);
};

