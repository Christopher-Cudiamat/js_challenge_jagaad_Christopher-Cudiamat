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

1. From the project directory open the terminal and Type `npm run build` command to build the react project.

2. Type the command `docker build -f Dockerfile.prod -t sample:prod .` to build and tag the Docker image. 

**Note `sample:prod` is any name you want for your Docker image and must be in lower case**

3. Spin up the container with this command `docker run -it --rm -p 1337:80 sample:prod`

4. Navigate to `http://localhost:1337/` in browser to view and check the app..


## Challenge objectives and my resolutions:

### 1. Develop a simple build system for your application.

- Using the Create-React-App boilerlate which internally uses webpack, pre-configured to include all the nice tools like a simple build system to take care of these basics and help me focus on the React part of the code.

### 2. Develop the “Add/Remove to Bag” and “Add/Remove to Wishlist” actions which --work only with the client side.

- With scalability in mind I decided to use `Redux` with `Hooks` to manage the application state. For instance, it is easy to manage the application with a few components. On the other hand when we are dealing with a large application, it becomes difficult to manage the state of each component of the application. Redux helps overcome this problem and allows us to maintain the state of each component in a very predictable way. As a result, I can easily trace when, where, why, and how a particular component behaves.

### 3. Develop a product listing pagination with 6 products per page The bag in the header must be updated with the new quantities and the new total price.

- In this task I am using a library called `React-Paginate` from NPM. this library has a pretty good growing support from the dev community and it's documentation is spot on. The library helped us to create a nice  pagination with lots of props available for us to use depending on what the project needs. The style of the component is also very easy to costumize with just some CSS we can create an eye pleasing pagination that we want. 

### 4. Build a mini-bag with convenient actions, coherent with design.

- As I am developing the app I made sure that most of my components are modular and reusable. For instance, we can have a button component display with different colors in several parts of our application. Although it is the same button component when we provide it with a some properties, it modifies itself and outputs a UI instane of the element. This pattern of creating React components is necessary for scaling. It helps me save time by ensuring less code is written, development is faster, the codebase is simpler, and maintenance is stress-free. 

### 5. Make the application responsive.

- The application is responsive from mobile, tablet and big screens devices. With SASS/SCSS I was able to create a simple media query management system via mixins where in I can include these blocks of media queries anywhere in the app.  

### 6. Use CSS preprocessors.

- In this project I am using `SASS/SCSS` which helps me modularize my stylesheets. With variables, nesting, and other key feature of Sass  it allows me to write cleaner unrepetitive CSS codes and to be able to split my huge style.css file into several smaller files that will be easier to maintain, understand, and organize.
### 7. Use of linting tools.

- Using `ESLint` and `Prettier `helps me and maybe other developers who will write code in this same project with the posibility to define a set of styling rules, this increases the readability of our code towards the effort of having our codebase look like it was written by one person. This is important, as it can happen that we move from codebase to codebase within projects meaning a lot of people become involved. A common set of rules makes it easier to really understand what the code is doing.

### 8. Unit testing.

- To test the UI flow of the app I choose to execute an E2E testing which helps me to test the application from the end user’s perspective. I use a tool called Cypress which hase some nice features like easy debugging, test runner allows me to interact with my tests, I have access to almost anything in the browser and also live reloads 



