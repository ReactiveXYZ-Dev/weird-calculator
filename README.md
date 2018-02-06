## A Simple Guide Through

### Brief
The sample website solution takes a **Front-end Focus** approach in which all the algorithms are written in Javascript. 

The site is written with ES6 and SASS and transpiled using Webpack (with the laravel-mix wrapper), it also includes a basic ExpressJS server that serves the HTML page for client to interact with.

The webpage has a textfield for you to enter the String that contains the digits, and it will show you the sum after you click the **Calculate Now** button. If no numbers are extracted, it will show you a simple error message, indicating empty value output ('') in the parenthesis.

### Usages
The project requires **NodeJS** and **NPM** to be installed. 
First, ``cd PROJECT_ROOT & npm install;`` and perform one or more of the below operations:

#### Running the app
The app comes with a precompiled set of CSS/JS configured with ExpressJS server, so after you clone the repository, run:
`npm run serve` and go to `localhost:3000`

#### Build the app (retranspile all css/js)
`npm run dev` or `npm run wathc` for auto assets reloading.

#### Run tests
`npm run test`
This command will run the tests written in **test/test.js** which includes the spec test and some of my own tests.
