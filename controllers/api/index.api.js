/* npm imports */
const axios = require("axios");

/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");
const logApiError = require(__base + "/utils/log-api-error.js");

const fileImports = {
  models: {
    ErrorResponse: require(__base + "/models/error-response.models.js"),
    SuccessResponse: require(__base + "/models/success-response.models.js")
  },
};

class ApiHandler {
  fetchGithubUser(username, callback) {
    let $this = this;
    let {ErrorResponse, SuccessResponse} = fileImports.models;
    let urlString = `https://api.github.com/users/${username}`;

    axios.get(urlString).then((response) => {
      if (response.status === 200 || response.statusText === "OK") {
        let success = new SuccessResponse();
        let {name, bio, avatar_url, html_url} = response.data;

        success.message = "Welcome to Cuttly Node API (Open Source)";
        success.description = "A free API system available for developers when using the api endpoints from https://cutt.ly/";
        success.author = {name, bio, avatar_url, html_url};
        callback(success);
      }
      else {
        let error = new ErrorResponse();

        error.message = "Could not fetch information from Github. This system could possibly be down!";
        error.payload = response.data;
        callback(error);
      }
    })
    .catch((error) => {
      logApiError(error);
      $this.sendExceptionCaughtResponseToCaller(error, callback); 
    });
  };

  makeGetRequestAndReturnJson(requestUrl, callback) {
    let $this = this;
    let {ErrorResponse, SuccessResponse} = fileImports.models;

    axios.get(requestUrl).then((response) => {
      if (response.status === 200 || response.statusText === "OK") {
        let success = new SuccessResponse();
        success.payload = response.data;
        callback(success);
      }
      else {
        let error = new ErrorResponse();
        error.payload = response.data;
        callback(error);
      }
    })
    .catch((error) => {
      logApiError(error);
      $this.sendExceptionCaughtResponseToCaller(error, callback); 
    });
  };

  sendExceptionCaughtResponseToCaller(error, callback) {
    let {ErrorResponse} = fileImports.models;
    let errorResponse = new ErrorResponse();

    if ("response" in error) {
      errorResponse.payload = error.response.data;
    }
    else if ("request" in error) {
      errorResponse.payload = error.request;
    }
    else {
      errorResponse.payload = error.message;
    }
    callback(errorResponse);
  };
}
module.exports = ApiHandler;

