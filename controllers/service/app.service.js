/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");
const HandlerTemplate = require(__base + "/utils/handler-template.js");

class AppService {
  constructor() {
    this.BASE_URL = "https://cutt.ly/api/api.php";
  };

  isValidString(stringArg) {
    return typeof stringArg === "string" && stringArg !== "";
  };

  validateShrinkRequest(payload) {
    let $this = this;
    if ($this.isValidString(payload.apiKey) && $this.isValidString(payload.requestUrl)) {
      return true;
    }
    else {
      return false;
    }
  };

  validateStatsRequest(payload) {
    let $this = this;
    if ($this.isValidString(payload.apiKey) && $this.isValidString(payload.url)) {
      return true;
    }
    else {
      return false;
    }
  };

  buildRequestToShrink(payload) {
    let $this = this;
    let requestUrl = "";
    requestUrl += this.BASE_URL;
    requestUrl += "?key=" + payload.apiKey;
    requestUrl += "&short=" + encodeURIComponent(payload.requestUrl);
    /* to consider if the name field is there in the payload ... then make the changes */
    requestUrl = ("name" in payload && $this.isValidString(payload.name)) ? requestUrl += "&name=" + payload.name : requestUrl;

    return requestUrl;
  };

  buildRequestForStats(payload) {
    let $this = this;
    let requestUrl = "";
    requestUrl += $this.BASE_URL;
    requestUrl += "?key=" + payload.apiKey;
    requestUrl += "&stats=" + encodeURIComponent(payload.url);

    if ("date_from" in payload && $this.isValidString(payload.date_form)) {
      requestUrl += "&date_from=" + payload.date_from;
    }
    if ("date_to" in payload && $this.isValidString(payload.date_to)) {
      requestUrl += "&date_to=" + payload.date_to;
    }

    return requestUrl;
  };
}
module.exports = AppService;
