# Cutt.ly Node API

![Version](https://img.shields.io/github/v/release/sricharankrishnan/cuttly-node-api?sort=semver)
![Open Issues](https://img.shields.io/github/issues-raw/sricharankrishnan/cuttly-node-api)
![Closed Issues](https://img.shields.io/github/issues-closed-raw/sricharankrishnan/cuttly-node-api)
![License](https://img.shields.io/github/license/sricharankrishnan/cuttly-node-api)
<br/>
<br/>

### About

An open source Node/Express app that helps you to perform requests to Cutt.ly API @ <https://cutt.ly/api-documentation/> Cutt.ly is a Url-Shortner service (<https://cutt.ly/>). To be able to use this system, please ensure to register with Cutt.ly and get your secret API key.

Please note that this system helps cater to most of the functionalities for all levels of pricing with Cutt.ly (that is the Free Plan).
You are free to incorporate more features into this system in case you are opting to choose other paid plans with Cutt.ly. Also, glich may
place this application on **sleep mode** if there has been no activity for a while. You may or may not experience some delay.

### Getting Started

The first and the easiest way to use this system, is through the API endpoints mentioned below. Here there is a clear indication of the type of request that needs to be used along with a payload (if applicable). Alternatively, you could download or clone this repository, perform `npm install` to fetch all the required NPM Packages and run the server locally.

### Prerequisites

The only major requirement is a current and stable version of NodeJS with ES2015 support.

### Built Using

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)

### Usage

This application is hosted on Glitch @ https://cuttly-node-api.glitch.me/. On loading the base url, you should be able to see a response
from the system. Here are the API Endpoints that are available with their requirements (if applicable):

- ![Get Request](https://img.shields.io/badge/method-get-orange) https://cuttly-nodejs-api.glitch.me<br/>
  Gives you a response containing details about the application along with author details

- ![Post Request](https://img.shields.io/badge/method-post-orange) https://cuttly-nodejs-api.glitch.me/api/shrink-url<br/>

  ```console
  foo@bar:~$ curl -H "Content-type: application/json" -XPOST -d '{"apiKey": "your-api-key", "requestUrl": "https://www.example.com", "name": "someexamplename"}' 'https://cuttly-nodejs-api.glitch.me/api/shrink-url'
  ```

  Helps to create a shortened version of that url. The **apiKey** and **requestUrl** fields are required. The api key is given to you when
  you create your account with Cutt.ly and the requestUrl is the website url that you wish to shorten. The **name** field is optional, this is the
  custom shortname what you wish to give for your URL. If the shortname is available through Cutt.ly then its applied. If omitted, then cutt.ly will
  help generate a custom shortname for you

- ![Post Request](https://img.shields.io/badge/method-post-orange) https://cuttly-nodejs-api.glitch.me/api/get-stats<br/>
  ```console
  foo@bar:~$ curl -H "Content-type: application/json" -XPOST -d '{"apiKey": "your-api-key", "url": "https://cutt.ly/exampleshortname"}' 'https://cuttly-nodejs-api.glitch.me/api/get-stats'
  ```
  Provides you the statistics of the shortend url. The **apiKey** field is required which is given to you when you create your account with
  cutt.ly and the **url** field contains the shortened url of which you wish to get the stats of. Both of these fields are required for this
  request.

### Response Formats

All of the API responses will carry an **"api-ok"** that represents a successful API request that has been made. Any other code in the response will
signify that there has been some kind of error. Each of these responses will carry a **payload** field which may contain data based on the request
that is being made. For more information about the response details from cutt.ly, [check this documenation](https://cutt.ly/api-documentation/cuttly-links-api)
The payload in the response will carry the response from cutt.ly (if applicable).

### Feature Requests and Raising Issues

If you would like to suggest a new feature for this app or perhaps you have experienced some problems, go ahead and raise a good old github issue.
I'll work on this at the earliest possible depending on my schedule and keep you posted as well.

### Support

I'd be very grateful if you could support this project with a Github star as this would go a long way in building more apps like these.
Happy Coding!
