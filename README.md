
## SAP-LigaAC Lab1

Welcome to SAP-LigaAC Lab1
### Goals
- Setup the local environment
- Briefly introduction to RESTful APIs with Node.js and Express by using the provided app

### Hands on
- Setup the local environment by installing the tools required for our LABs
- Start the provided app locally
- Use POSTMAN to test the app provided REST APIs
- Enhance the provided app by adding new functionalities


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


### 2. Introduction to RESTful APIs with Node.js and Express

#### Clone Lab1 GitHub repository

```
git clone git@github.com:SAP-LigaAC/lab1.git
```
or
```
git clone https://github.com/SAP-LigaAC/lab1.git
```

If the `git clone` command fails, then you will have to:
  - manually download the zip file from repository home page
  - decompress the zip File

#### Node.js
Node (or more formally Node.js) is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript.
Node ofers a great performance, being designed to optimize throughput and scalability in web applications and is a good solution for many common web-development problems (e.g. real-time web applications).
It has a very active third party ecosystem and developer community and the node package manager (NPM) provides access to hundreds of thousands of reusable packages.
Node is a single-threaded event-driven execution environment. "Single threaded" means that all requests to the server are run on the same thread (rather than being spawned off into separate processes). This model is extremely efficient in terms of speed and server resources, but it does mean that if any of your functions call synchronous methods that take a long time to complete, they will block not just the current request, but every other request being handled by your web application.

#### Express JS
Express is the most popular Node.js web application framework, and is the underlying library for a number  of other popular Node web frameworks.
Express provides a wide set of features to develop web and mobile applications.
Developers have created compatible middleware packages to address almost any web development problem. There are libraries to work with cookies, sessions, user logins, URL parameters, POST data, security headers, and many more.

#### NPM (Node Package Manager)
It provides online repositories for Node.js packages/modules and also a command line utility to install Node.js packages, does version management and dependency management of Node.js packages

#### Importing and exporting modules
A module is a JavaScript library/file that you can import into other code using Node's `require` or `import` functions.
Node.js has two module systems: CommonJS modules and ECMAScript modules.
ECMAScript modules are the official standard format to package JavaScript code for reuse.
Express itself is a module, as are the middleware and database libraries that we use in our Express applications.

#### Using asynchronous APIs
JavaScript code frequently uses asynchronous rather than synchronous APIs for operations that may take some time to complete.
A synchronous API is one in which each operation must complete before the next operation can start.
An asynchronous API is one in which the API will start an operation and immediately return (before the operation is complete). Once the operation finishes, the API will use some mechanism to perform additional operations.
- Use of callbacks to implement asynchronous functions.
  - call the asynchronous function, passing in your callback function. The function returns immediately and calls your callback when the operation is finished.
- Use a promise-based API
  - the asynchronous function starts the operation and returns a Promise object. You can then attach handlers to this promise object, and these handlers will be executed when the operation has succeeded or failed.
  - async/await reduce the boilerplate around promises, code look like it's synchronous, but it's asynchronous and non-blocking behind the scenes.

### 3. App usage

LAB1 application is a basic example of an Express JS web server application that provides REST APIs to the end users.

<img width="451" alt="image" src="https://user-images.githubusercontent.com/102019852/159589992-caa86ce2-9791-4141-952f-33fc370799bd.png">

For simplicity the persistence layer of the first app is replaced here by a simple Array.
#### Start the application locally by executing:

```
npm install
npm start

```
#### Test the app

Use POSTMAN to import the lab's POSTMAN collection and environmnet variables.

#### Exercises

- Create a new endpoint
  - for getting all the bookings
- Update an existing endpoint
  - When adding a new booking
    - Validate that a booking for the same ID does not already exist and if exists send an explicit error with status code HTTP 409 Conflict
    - Validate request body fields (i.e. validate that email/phone has the right format


- Optional:
  - create a new endoint
    - for deleting a booking with a certain ID
    - for deleting all the bookings
  - update an existing endpoint
    - validate that a booking for the same person (email/phone) does not already exist


#### Npm dependecies used by the app

- https://www.npmjs.com/package/express
- https://www.npmjs.com/package/express-validator
- https://www.npmjs.com/package/body-parser
- https://www.npmjs.com/package/http-status-codes



### Documentation

- https://nodejs.org/api/documentation.html
- https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await
- https://nodejs.org/api/modules.html#modules_modules
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
- https://learning.postman.com/docs/getting-started/importing-and-exporting-data/
- https://learning.postman.com/docs/sending-requests/managing-environments/
- https://nodejs.dev/learn/how-much-javascript-do-you-need-to-know-to-use-nodejs

