
## SAP-LigaAC Lab1

Welcome to SAP-LigaAC Lab1
### Goals
- Setup the local environment
- Briefly introduction to RESTful APIs with Node.js and Express by using the provided app

### Hands on
- Setup the local environment by installing the tools required for our LABs
- Clone Lab1 github repository
- Start the provided app locally
- Use POSTMAN to test the app provided REST APIs
- Enhance the provided app with at least one of the below:
  - Create a new endpoint (i.e. for getting all the bookings)
  - Update an existing endpoint (i.e. for adding a new booking)
    - Validate that a booking for the same ID does not already exist and in case that already exists send an explicit error message with status code Conflict (HTTP 409)
    - Validate the received request parameters
        - validate that the email or the phone number have the right format


### 1. Set Up Development Tools
- [Install GIT](https://developers.sap.com/tutorials/btp-app-set-up-local-development.html#e131f039-c4d4-4e29-8d64-c774b0dff9c1 "GitHub")
- [Install Node](https://developers.sap.com/tutorials/btp-app-set-up-local-development.html#85c712a0-821e-48ba-992c-ba727985c314 "Install Node")
- [Install VS code](https://developers.sap.com/tutorials/btp-app-set-up-local-development.html#8ccbe83d-2182-45b7-a891-178f46e1a117 "Install VS code")
- [Install VS extensions](https://developers.sap.com/tutorials/btp-app-set-up-local-development.html#cc41d842-5014-4e9e-a16b-8897a1f11ffc "Install VS extensions")
- [Install CF CLI](https://developers.sap.com/tutorials/btp-app-set-up-local-development.html#2e0990e0-9c79-491c-9bc0-e6ead997225a "Install CF CLI")
- [Install CAP CDS tooling](https://developers.sap.com/tutorials/btp-app-set-up-local-development.html#7ff02f69-2fe9-4061-b19c-39f8ee9ae08d "Install CAP CDS tooling")
- [Install SAP UI5 CLI](https://developers.sap.com/tutorials/btp-app-set-up-local-development.html#a8c2a0e3-9fa7-4314-aebe-bf3c153a2835 "Install SAP UI5 CLI")
- [Install MTA build tool](https://developers.sap.com/tutorials/btp-app-cap-mta-deployment.html#88db1575-a9d1-4d5b-8379-a45e4ab8adbc "Install MTA build tool") (steps 1-3)
- [Install POSTMAN](https://developers.sap.com/tutorials/api-tools-postman-install.html "Install POSTMAN")


### 2. Introduction to RESTfull APIs with Node.js and Express


<img width="451" alt="image" src="https://user-images.githubusercontent.com/102019852/159589992-caa86ce2-9791-4141-952f-33fc370799bd.png">


#### Node.js
Node (or more formally Node.js) is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript.
Node ofers a great performance, being designed to optimize throughput and scalability in web applications and is a good solution for many common web-development problems (e.g. real-time web applications).
It has a very active third party ecosystem and developer community and the node package manager (NPM) provides access to hundreds of thousands of reusable packages.
Node is a single-threaded event-driven execution environment. "Single threaded" means that all requests to the server are run on the same thread (rather than being spawned off into separate processes). This model is extremely efficient in terms of speed and server resources, but it does mean that if any of your functions call synchronous methods that take a long time to complete, they will block not just the current request, but every other request being handled by your web application.
#### Express
Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks.
Developers have created compatible middleware packages to address almost any web development problem. There are libraries to work with cookies, sessions, user logins, URL parameters, POST data, security headers, and many more.
Express provides methods to specify what function is called for a particular HTTP verb (GET, POST, SET, etc.) and URL pattern ("Route").

#### Importing and exporting modules
A module is a JavaScript library/file that you can import into other code using Node's `require` or `import` functions.
Node.js has two module systems: CommonJS modules and ECMAScript modules.

Express itself is a module, as are the middleware and database libraries that we use in our Express applications.

#### Using asynchronous APIs
JavaScript code frequently uses asynchronous rather than synchronous APIs for operations that may take some time to complete.
A synchronous API is one in which each operation must complete before the next operation can start.
An asynchronous API is one in which the API will start an operation and immediately return (before the operation is complete). Once the operation finishes, the API will use some mechanism to perform additional operations.
- Use of callbacks to implement asynchronous functions.
  - call the asynchronous function, passing in your callback function. The function returns immediately and calls your callback when the operation is finished.
- Use a promise-based API
  - the asynchronous function starts the operation and returns a Promise object. You can then attach handlers to this promise object, and these handlers will be executed when the operation has succeeded or failed.
  - async/await keywords

### Clone Lab1 GitHub repository

```
git clone git@github.com:SAP-LigaAC/lab1.git

```
or

```
https://github.com/SAP-LigaAC/lab1.git

```

### Useful documentation

https://nodejs.org/api/modules.html#modules_modules
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way
