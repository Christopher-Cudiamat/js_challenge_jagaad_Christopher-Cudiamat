# js_challenge_jagaad_Christopher-Cudiamat

Frontend React.JS Coding Challenge: Build a simple e-commerce application.

![]("../js_challenge_jagaad_Christopher-Cudiamat/my-app/src/assets/images/activity_image.jpeg");

## Instructions to run, build and test the app locally 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test:cypress`

Runs the app in development mode and launches the test runner in the interactive watch mode with Cypress inteterface. 

### `npm run lint`

Runs ES6 linter to check the code on any ts and tsx files for syntax errors and highlight errors to make sure we can quickly find and fix them.

### `npm run pretty`

Runs Prettier which enforces a consistent style by parsing our code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. This command will execute prettier in all of our files in the project

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
the app is ready to be deployed!


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.


## Deploying production ready Docker container of the app

1. type the "npm run build" command in the terminal to build the react project.

2. type this command "docker build -f Dockerfile.prod -t sample:prod ." to build and tag the Docker image. 

**Note <sample:prod> is any name you want for your Docker image and must be in lower case**

3. Spin up the container with this command "run -it --rm -p 1337:80 sample:prod"

4. Navigate to http://localhost:1337/ in your browser to view the app..


## Challenge objectives:

### 1. Develop a simple build system for your application.

- Using the Create-React-App boilerlate which internally uses webpack, pre-configured to include all the nice tools like a simple build system to take care of these basics and help me focus on the React part of the code.

### 2. Develop the “Add/Remove to Bag” and “Add/Remove to Wishlist” actions which --work only with the client side.

- I use Redux with hooks to manage the application state. For instance, it is easy to manage the application with a few components. On the other hand with the scalability in mind, when you are dealing with a large application, it becomes difficult to manage the state of each component of the application. Redux helps overcome this problem and allows the developer to maintain the state of each component in a very predictable way. As a result, I can easily trace when, where, why, and how a particular component has been changed.

### 3. Develop a product listing pagination with 6 products per page The bag in the header must be updated with the new quantities and the new total price.

### 4. Build a mini-bag with convenient actions, coherent with design.

### 5. Make the application responsive.

### 6. Use CSS preprocessors.

### 7. Use of linting tools.

### 8. Unit testing.
