
### Browser support

The app should run fine on latest versions of Chrome (where it was tested on), Firefox and Microsoft Edge. It uses certain browsers features which may not work on Internet Explorer.


## Running locally

Install the latest version of Node.js and NPM. You can download and install Node.js from here: https://nodejs.org/en/download/ Installing Node.js will install NPM as well.

Then run the following commands:

`npm install` - to install the dependencies of the front end app

`npm start` - to compile and start running the front end app

### Running locally with mocked APIs

Instead of `npm start`, use `npm run dev`

This will start a mock API server on localhost:3000.

Then open the URL `http://localhost:3001` in your browser to access the UI.

## Specifying the API server

Edit the `env.js` file to point the `API_SERVER` to the IP/host name of the actual API server and set `MOCK_API` to `false`.

## Generating production build

In order to generate a production build, run the following command:

`npm run build`

This will generate the static files under the `dist` directory that can be deployed to any web server.