# Cast Tracker

[Live Site](https://fly-fishing-journal.web.app/) 
#### An application that allows fly fishing enthusiasts to keep a virtual journal and photo gallery of their adventures.

#### By Brian Scherner

## Technologies Used

#### Frontend:
* React
* React Router
* JavaScript
* HTML5
* CSS3

#### Styling and UI:
* React Toastify
* Bootstrap
* Material UI
* PopperJS

#### Tooling:
* Webpack
* Node Package Manager
* ESLint

#### Backend and Database:
* Firestore
* Cloudinary

## Description

Cast Tracker is a full-stack web application that allows users to document and manage their fly fishing adventures in a streamlined, journal-style format. Each trip entry can include detailed information and up to six uploaded photos.

The trip list is fully interactive and features dynamic filtering options by type, season, water body, and more—making it easy to locate specific trips without endlessly scrolling. A search function and photo filter enhance the experience further, offering a fast, intuitive way to explore logged trips.

To use the application, users must first create an account. Once signed in, they can add new trips categorized as either Past or Future, each with its own tailored multi-step form to capture relevant details.

Users can view each trip’s details in an expandable card layout, update trip information, convert a "Future" trip to "Past" status, or delete trips as needed. All user data, including trips and authentication info, is securely stored in a Firestore database.

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

Copyright(c) 2025 Brian Scherner
