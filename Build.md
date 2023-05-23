# Build Instructions

## Prerequisites
- Install [Node.js](https://nodejs.org/) version 12 or higher.
- Ensure [Git](https://git-scm.com/) is installed on your system.

## Installation
1. Clone the repository: `git clone https://github.com/Azeemkhan07/KPMG-Legal-Tech-Test.git`
2. Change to the project directory: `cd repository`
3. Install project dependencies: `npm install`

## Building the Project
1. Run the build command: `npm run build`
2. Wait for the build process to complete.

## Running the Project
1. Start the application: `npm start`
2. Access the application at [http://localhost:3000](http://localhost:3000).

## Additional Scripts
- To run tests: `npm run test`
- To eject from Create React App: `npm run eject`

## Dependencies
- [leaflet](https://www.npmjs.com/package/leaflet): Version ^1.9.3
- [react](https://www.npmjs.com/package/react): Version ^18.2.0
- [react-dom](https://www.npmjs.com/package/react-dom): Version ^18.2.0
- [react-leaflet](https://www.npmjs.com/package/react-leaflet): Version ^4.2.1
- [react-leaflet-markercluster](https://www.npmjs.com/package/react-leaflet-markercluster): Version ^3.0.0-rc1
- [react-scripts](https://www.npmjs.com/package/react-scripts): Version 5.0.1
- [web-vitals](https://www.npmjs.com/package/web-vitals): Version ^2.1.4

## Development Dependencies
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env): Version ^7.21.5
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react): Version ^7.18.6
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom): Version ^5.16.5
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react): Version ^14.0.0
- [babel-jest](https://www.npmjs.com/package/babel-jest): Version ^29.5.0
- [jest](https://www.npmjs.com/package/jest): Version ^27.5.1

## Available Commands

In the project directory, you can run:

### `npm start" : "react-scripts start"`,

The app is built using `create-react-app` so this command Runs the app in Development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. You also need to run the server file as well to completely run the app. The page will reload if you make edits.
You will also see any lint errors in the console.

### `"npm run build": "react-scripts build"`,

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app will be ready to deploy!

### `"npm run test": "react-scripts test"`,

Launches the test runner in the interactive watch mode.

### `"npm run dev": "concurrently "nodemon server" "npm run start"`,

For running the server and app together I am using concurrently this helps a lot in the MERN application as it runs both the server (client and server) concurrently. So you can work on them both together.

### `"serve": "node server"`

For running the server file on you can use this command.

### `npm run serve`

## Author

**Abdul Azeem Khan**
