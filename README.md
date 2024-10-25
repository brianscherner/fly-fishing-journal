# Fly Fishing Journal

#### An application that allows fly fishing enthusiasts to efficiently manage their past and future trips.

#### By Brian Scherner

## Technologies Used

* React
* React Bootstrap
* React Router
* React Toastify
* JavaScript
* HTML
* CSS
* Bootstrap
* Material UI
* PopperJS
* Webpack
* Node Package Manager
* ESLint
* Firebase

## Description

The purpose of this application is to allow a user to keep a virtual journal of their past and future fly fishing trips.

In order to use the application, users must first sign up for an account. Once an account has been created and their email verified, they can sign in to their account and access the application. Users can add trips to the journal by their type, "Past" or "Future". Depending on the type of trip, a different multi-step form will be rendered, which contains different types of information that a user can enter. Users can click on a trip and view its details by toggling the different categories that are listed. Users can also edit trips from the journal, and mark a "Future" trip as "Past" if they eventually go on the trip and want to update their journal. Users can also delete trips from the journal. All users trips and account information will be stored on a Firestore database.

The live site can be visited [here](https://fly-fishing-journal.web.app/).

## Setup/Installation Requirements

#### Cloning and Using the Repository

* Select the green `Code` button, and clone this repository to your desktop.

* In your terminal (ex: Windows PowerShell or GitBash), navigate to this project's folder, and run the command `$ npm install`. This will install all of the necessary packages for this project.

* Run the command `$ npm run build` to bundle all of the project's files together.

* Run the command `$ npm run start` to start a live development server. This will open the project in your web browser at the URL `localhost:3000`.

## Known Bugs

None.

## License

MIT

Copyright(c) 2024 Brian Scherner
