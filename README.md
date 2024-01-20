# Test project

## Installation
run this command to install the project `npm i`

update `.env` file with your github AUTH token
`REACT_APP_AUTH_TOKEN = your token`

here is a documentation how you can install it
[token installation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)

start the project: `npm start`

## About the project
Project implement [FSD](https://feature-sliced.design/) with code-splitting technics for redux and redux-saga.

## limitations and trade-offs

When you are using Github Rest api be aware of some limitations and trade-offs

When utilizing GitHub's REST API with an authentication token, consider the following:

1. **Rate Limits:** Authenticated requests enjoy higher rate limits, but limits still apply. Refer to GitHub's documentation for current rates.

2. **Scopes:** Token capabilities are determined by granted scopes during creation. Ensure the token has the necessary scopes for intended operations.

3. **Token Management:** Securely manage personal access tokens. Regularly review and update permissions.

4**Restrictions:** Repository and organization settings can impose restrictions on certain operations.

For the latest details, consult [GitHub's REST API documentation](https://docs.github.com/en/rest).

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
