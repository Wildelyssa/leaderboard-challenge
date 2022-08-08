# Leaderboard

## Purpose
App which fetches player and game data from an API, and displays the data in the form of a Leaderboard. Each player row in the Leaderboard displays the player name, points, rankTier and rank. Each player element from the Leaderboard clicks through to the players profile which shows more information including player bio, and deatails of last battle.
The Leaderboard is mainly to be viewed on popular desktop screensizes, and mobile phones in portrait view.
### Screenshots

![leaderboard-challenge-01](https://user-images.githubusercontent.com/60786547/183532001-55adbbaa-3675-463d-962c-028ba1452d8c.png)

![leaderboard-challenge-02](https://user-images.githubusercontent.com/60786547/183532018-815040ee-5853-4fe7-a379-50e56efee1e3.png)

## Tech used
* React
* React Hooks
* React Router
* CSS3
* JS
* Tribally API Enpoint

## Features
* Fetches data from an API enpoint to be displayed on the Leaderboard
* Passes data with useLocation hook to a routed component
* Uses <Link /> component from React Router to create a new local page
* Rank is denoted by a relevant image which is pulled in depending on props
* Profile page in keeping with the leaderboard design
* App is fully responsive on all of the main screen sizes and devices
* Content from the app is manipulated with CSS and JavaScript to remain in keeping with the design and avoid breaking content
* Error component and functionality to catch and display errors in the main API call
* Character limit for names for leaderboard to improve layout and readability
* Longer names supported in player profile in keeping with the purpose of profile page- to give more details and information
* Use of CSS variables for easy editing of colors and fonts for future proofing design and code

## Improvements
* Add a 'Back to Leaderboard' link to profile page to improve User Experience
* Season to be added dynamically
* Manage state changes and API call with Redux/Redux Saga
* Add unit tests to components with Jest
* Character limit for names and possibly bio to be agreed and managed server side, and client side on form validation
* Add more error scenarios such as checking for data with empty strings
* Display errors dynamically depending on an error code for example 404
* Refactor CSS to slim down and avoid repetition
* Convert CSS to SCSS and extablish variables based on design principals, extend classes to avoid long CSS files
* Establish global classes and variables for global SCSS file based on design pricipals
* Extract out components from the <PlayerCard /> component to reduce the length of the file and isolate the different elements to improve separation of concerns
* Design can be refined further once finalised
* Further formatting of Date and Time properties to improve content and readbility

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
