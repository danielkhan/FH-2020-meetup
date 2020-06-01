# Exercise: Finalize the speakers functionality

This repository contains the meetup page as it was by the end of our last lesson.
The [provided](./provided) directory contains the original HTML template.

## Setting up the project
This repository can be used as a starting point for the exercise but you can use your own version as well.

### Setting up the project from this repo
If you want to use this repository, you can either `git clone` it (if you are familiar with git) or  download it using the green 'Clone or download' button on the top right of this page.

When storing a Node.js project in a version control system, the `node_modules` directory is usually ignored. For that, I've added an entry to [.gitignore](./.gitignore).

All dependencies that should go into `node_modules` are listed in [package.json](./package.json).
Additionally, the file [package-lock.json](./package-lock.json) contains the dependency trees of each individual package. With this information `node_modules` can be fully restored without having to commit heaps of packages to git.

To download all dependencies after downloading (and unpacking) or cloning the project please switch into the project directory that contains the package.json file and run `npm install`.
After that you should be able to run the project via `npm run dev`.

## Assignment 1: Complete the speakers overview page
The speakers overview page is the page that shows up when selecting **Speakers -> All Speakers** from the dropdown menu.
The HTML template can be found [here](./provided/speakers.html).

Your task is to make this page dynamic.
This is very similar to what we've done already for the index page:

* Create an `.ejs` file that contains just the parts of the HTML template that are not part of the main layout.
* To provide the needed data for this particular view, you'll need a new function in [SpeakerService](./services/SpeakerService.js):

```js
/**
* Todo: Implement a function that returns a list of speakers that contains
* all the information that is needed to render 'views/speakers/index.pug'
*/
async getListWithDetails() {
  // Implement the function here
}
```

You'll the have to call this function from the respective route amd provide the data to the `render()`.
Look at [the index route](./server/routes/index.js) to see how we passed in `SpeakerService` instance to use it in the route handler then.

> Hint: You have to pass on `params` and then you can use a [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to get it in the respective route submodule.

Once the data is available to the template, you will need to modify the template to use this dynamic content.

Don't forget to also provide the artwork to all speakers - as we did for the index page.

## Asignment 2: Complete the speakers detail page
The speakers detail page shows details for a given speaker. You can reach it by clicking on a speaker.
The HTML template can be found [here](./provided/Hillary_Goldwynn.html).
As for the overview page, your task is again to make this page dynamic.

You need all the details for a speaker provided by `shortname` (url param) and you also want to show only the artwork of this speaker.

To provide the needed data for this particular view, you'll need two new methods in [SpeakerService](./services/SpeakerService.js):

```js
/**
* Todo: Implement a function that returns a single speaker to render 'views/speakers/detail.pug'
*/
async getSpeaker(shortname) {
  throw new Error('Not implemented');
}

/**
* Todo: Implement a function that returns only the artwork
* for a single speaker so that it can be shown in the sidebar of the detail page
*/
async getArtworkForSpeaker(shortname) {
  throw new Error('Not implemented');
}
```

The rest is very similar to what we've done before.

## Sending in the assignment
Create a ZIP of the project and use the upload function at the assignment in moodle.
Please make sure to **NOT** include `node_modules` to keep the upload small.

## Getting Help
If you run into any problems or if anything is unclear, please use the moodle forum to ask for help.