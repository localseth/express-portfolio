# Node Static Portfolio Page
This portfolio page contains a collection of my currently highlighted projects.
## Development
The website was written in Node.js and developed using the [Express](https://expressjs.com) framework. Static files are served from the public folder. Data is stored in `JSON` format in the file `data.json`. Typing `npm start` in the console will launch the app using [nodemon](https://www.npmjs.com/package/nodemon).

Errors are have been handled by creating a custom 404 error if a request route is not found, otherwise a 500 error is thrown. Depending on the error code, one of two error pages will display: `error.pug` or `page-not-found.pug`
## Design
Pug layout and basic CSS files were supplied by Treehouse. My handwritten styles are located in the file `custom-styles.css`. When clicking a link to either the live view of a project or the GitHub repository, you are directed to a new blank page so you don't lose your place on the original page. This is achieved with the `target` attribute set to `_blank` in the `<a>` tag.
### Colors
I chose a new color palette to start with for a light theme. A dark/light theme switcher is in development.
### Lists
`<li>` items are set to 70% opacity when hovered. Bulleted lists has been reformated to look more modern and condensed. See the "skills" section of the "about" page for an example.
### Logo
I designed a logo using only CSS. When hovered, the logo rotates slightly and moves away from the side of the screen a bit.

## Thanks!
Thank you for checking out my work! Feel free to message me with any questions, criticisms, or compliments. Also, check back frequently as this project will likely see updates in the future.