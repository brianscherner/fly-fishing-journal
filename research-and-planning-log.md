# Research and Planning Log

### Work Log (4.3.5.1 React with Redux Independent Project)

#### Thursday, 4/4/24

* 9:40am to 12:00pm: Created basic idea for application with minimum features. Researched info about fly fishing to learn about details that I could include in app.

* 12:00pm - 3:20pm: Out for lunch and a doctor's appointment.

* 3:20 to 4:00pm: Brainstormed about potential APIs or new technologies that could be used.

#### Friday, 4/5/24

* 9:00am - 11:00am: Read docs on React Native.

* 11:00am - 11:45am: Break to meet with Ethel for career service work.

* 11:45am - 12:00pm: Continued reading React Native docs.

* 1:30pm - 2:00pm: Read docs on Ionic Framework, specifically about implementing it in an existing React app.

* 2:00pm - 4:00pm: Talked to client (my dad) about the project and asked him to send me some user stories.

#### Monday, 4/8/24

* 9:00am - 10:00am: Read about Firebase and using OpenWeatherMap API with React.

* 10:00am - 11:00am: Wrote up capstone proposal.

### Work Log (4.4.5.1 React NoSQL Independent Project)

#### Monday, 4/22/24

* 1:00pm - 3:00pm: Created basic application template and drew components diagram.

* 3:00pm - 4:00pm: Began application development, starting with "Past Trips" section.

#### Tuesday, 4/23/24

* 9:10am - 10:15am: Worked on building functionality for a user to submit a form for a "Past Trip", and toggle state between the past trips list and form.

* 10:15am - 11:35am: Edited app diagram to include a "TripsControl" component, where PastTripsControl and FutureTripsControl components will live.

* 11:40am - 12:00pm: Worked on refactoring app so that PastTripsControl will live inside TripsControl component.

* 1:00pm - 2:30pm: After working on changing state, realized I was overcomplicating component structure and backtracked to my original state.

* 2:30pm - 3:00pm : Added "Read" functionality for past trip details.

* 3:00pm - 3:20pm : Added "Delete" functionality for past trips.

* 3:25pm - 3:50pm: Added "Edit" functionality for past trips.

#### Wednesday, 4/24/24

* 9:15am - 10:45am: Added 'Create' functionality for "Future Trips", and toggling state between future trips list and the form to submit a future trip.

### Work Log (4.5.5.1 React with APIs Independent Project)

#### Monday, 5/6/24

* 10:30am - 12:00pm: Worked on managing shared state between "Past Trips" and "Future Trips".

* 1:00pm - 3:00pm: Worked on trying to share state between "Past Trips" and "Future Trips". Decided to abandon approach and instead worked on adding Firebase to handle app's state vs handling it locally.

* 3:15pm - 3:45pm: Added Firebase to project.

* 3:45pm - 4:00pm: Thought about adding Firebase to CRUD functionality for Past Trips, or adding Authentication and Authorization first.

#### Tuesday, 5/7/24

* 9:00am - 10:45am: Added authentication with Firebase.

* 10:45am - 11:00am: Added functionality so that only an authorized user can access Past Trips.

* 11:00am - 12:00pm: Added functionality to view Past Trips from Firestore in application's UI.

* 1:00pm - 3:00pm: Worked on adding extra layer of error handling, and added Update and Delete functionality for Past Trips from Firestore.

* 3:00pm - 3:45pm: Redrew diagram to include new component structure, which consolidates all past/future trip components into trip components.

* 3:45pm - 4:00pm: Began renaming components and removing components related to "Future Trips".

### Final Capstone Sessions

#### Wednesday, 5/8/24

* 9:00am - 9:30am: Finished refactoring application to only have "Trips"-related components distinguished by a "type" property vs separate components.

* 9:40am - 12:00pm: Worked on conditionally rendering different form fields based on the type of trip.

* 1:00pm - 2:30pm: Worked on conditional rendering of form fields. Also worked on displaying newly created properties in list of trips and trip details.

* 2:30pm - 2:50pm: Added greyed out option to dropdown menu's in form to show user what the menu's are supposed to be for.

* 2:50pm - 3:15pm: Updated 'Update' functionality for editing a trip's details to work with the updated new/reusable forms.

* 3:15pm - 3:55pm: Worked on completing the conditional rendering for all forms. Added additional form fields for "past trips" type.

#### Thursday, 5/9/24

* 9:00am - 10:20am: Finished adding specific form fields and updating 'Create' and 'Update' functionality for "past trips".

* 10:30am - 11:00am: Worked on adding form fields that conditionally render for "future trips".

* 11:00am - 12:00pm - Met with Ethel.

* 1:00pm - 1:45pm: Finished adding form fields that conditionally render for "future trips". Updated 'Create' and 'Update' functionality to work with new fields.

* 2:00pm - 2:30pm: Retrieved info from all properties from database to display in UI (Display functionality will be updated later).

* 2:30pm - 3:20pm: Updated reusable form to only render a form after a trip type is selected.

* 3:30pm - 3:50pm: Added functionality to pre-fill form fields with trip info when a user edits a trip.

#### Friday, 5/10/24

* 9:10am - 10:30am: Worked on conditionally rendering trip details based on the trip type.

* 10:30am - 11:30am: Technical difficulties.

* 1:00pm - 3:35pm: Worked on organizing trip details into different categories in UI.

* 3:40pm - 3:55pm: Planned out how to manage state of trip details and how to show/hide different categories.

#### Monday, 5/13/24

* 9:10am - 11:00am: Worked on managing state of trip details by hiding/showing categories.

* 11:00am - 12:00pm: Met with Ethel.

* 1:00 - 1:15: Finished rendering different trip details when clicking on their respective category.

* 1:30pm - 2:00pm: Centered application text in middle of page and brainstormed how to organize trip details into tables.

* 2:00pm - 3:00pm: Organized trip details into tables for their respective categories.

* 3:15pm - 4:00pm: Brainstormed possible ways to organize trip details and tables into separate components.

#### Tuesday, 5/14/24

* 9:00am - 10:30am: Refactored trip details tables into separate components and imported into their main component.

* 10:30am - 12:00: Worked on refactoring reusable form into multiple components for their respective categories.

* 1:00pm - 4:00pm: Refactored reusable form into multiple components for their respective categories.

#### Wednesday, 5/15/24

* 9:00am - 10:30am: Worked on cleaning up code for form and form field components, added functionality to save values of dropdown menus when a user goes to edit a trip, and changed ordering of some form fields.

* 10:30am - 12:00pm: Worked on building multi-step form using NPM package.

* 1:00pm - 3:30pm: Worked on building multi-step form and abandoned NPM package for different approach.

* 3:30pm - 4:00pm: Read article about creating a multi-step form.

#### Thursday, 5/16/24

* 9:00am - 12:00pm: Read article about multi-step form creation, and worked on implementing it into my reusable form.

* 1:00pm - 4:00pm: Worked on retaining input field information in multi-step form.

#### Friday, 5/17/24

* 9:00am - 9:45am: Finished working on retaining input field information in multi-step form.

* 9:45am - 10:45am: Fixed minor bugs in multi-step form.

* 10:45 - 12:00pm: Worked on multi-step form validation.

* 1:00pm - 3:15pm: Worked on multi-step form validation. Decided to take a break and work on 'Update' functionality.

* 3:15pm - 4:00pm: Worked on refactoring 'Update' functionality to work with multi-step form.

#### Monday, 5/20/24

* 9:00am - 12:00pm: Worked on refactoring 'Update' functionality to work with multi-step form.

* 1:00pm - 3:15pm: Finished refactoring 'Update' functionality to work with multi-step form.

* 3:15pm - 3:55pm: Brainstormed what functionality to work on next.

#### Tuesday, 5/21/24

* 9:10am - 11:00am: Added functionality to highlight a nav link when its category is selected by user.

* 11:00am - 12:00pm: Met with Ethel.

* 1:00pm - 2:15pm: Worked on changing styling of trip details tables.

* 2:15pm - 3:00pm: Worked on setting a default table for trip details when page is rendered and highlighting the selected category.

* 3:00pm - 4:00pm: Worked on adding styling to application, starting with multi-step form.

#### Wednesday, 5/22/24

* 9:00am - 9:45am: Worked on adding more styling to application's multi-step form and details pages.

9:45am - 11:00am: Added basic styling to sign in page and tables on details page.

* 11:00am - 12:00pm: Whiteboarding interview.

* 1:00pm - 2:45pm: Continued working on table styling.

* 2:45pm - 4:00pm: Worked on styling for app header, trips list, and trip details page.

#### Thursday, 5/23/24

* 9:45am - 11:00am: Continued adding styling to application.

* 11:10am - 12:00pm: Worked on adding feature to toggle trips by their type.

* 1:00pm - 4:00pm: Continued working on toggling trips by their trip type.

#### Friday, 5/24/24

* 9:00am - 12:00pm: Worked on toggle trips by trip type feature.

* 1:00 - 4:00pm: Continued working on toggle trips feature.

#### Tuesday, 5/28/24

* 9:00am - 12:00pm: Worked on filtering trips by type using dropdown menu.

* 1:00pm - 2:40pm: Finished functionality to filter trips by type from trips list.

* 2:45pm - 4:00pm: Worked on debugging a console error.

#### Wednesday, 5/29/24

* 9:00am - 12:00pm: Worked on refactoring authentication/authorization to conditionally render different parts of Account component.

* 1:00pm - 4:00pm: Worked on conditionally rendering different sections of Account component.

#### Thursday, 5/30/24

* 9:00am - 10:00am: Added functionality to set message to "red" if an error occurs, and "green" if it's successful.

* 10:00am - 12:00pm: Worked on navbar menu to display links to different sections of app.

* 1:00pm - 1:45pm: Finished working on navbar menu.

* 1:45pm - 4:00pm: Worked on new color theme.

#### Friday, 5/31/24

* 9:00am - 11:30am: Added hover features to various parts of application and finished color theme.

* 11:30am - 12:00pm: Worked on fixing overflowing text in trips list.

* 1:00pm - 2:15pm: Worked on fixing overflowing table data in trip details.

* 2:15pm - 3:15pm: Fixed bug in form and edited formatting of trip details in table.

* 3:15pm - 4:00pm: Brainstormed about things to work on for next work session on Monday.

#### Monday, 6/3/24

* 9:00am - 11:00am: Worked on feature to mark a "Future" trip as "Past" after going on it.

* 11:00am - 12:00pm: Met with Ethel.

* 1:00pm - 3:00pm: Finished feature to mark a "Future" trip as "Past" after going on it.

* 3:00pm - 3:30pm: Change font colors of trip details categories.

* 3:30pm - 4:00pm: Explored adding a date feature for adding new trips.

#### Tuesday, 6/4/24

* 9:00am - 9:30am: Added date fields to trip form and trip details.

* 9:30am - 11:00am: Sorted trips in trips list by their date, from most recent to oldest.

* 11:00am - 12:00pm: Met with Ethel.

* 1:00pm - 1:30pm: Removed trip end dates from trips list.

* 1:30pm - 3:30pm: Added functionality to add 'N/A' to a table data cell if the value is empty/null/undefined.

* 3:30pm - 4:00pm: Worked on fixing alignment of table data.

#### Wednesday, 6/5/24

* 9:00am - 9:45am: Set fixed width for all tables in trip details.

* 9:45am - 11:00am: Worked on multi-step form validation.

* 11:00am - 11:30am: Met with Ethel.

* 11:30am - 12:00pm: Worked on multi-step form validation.

* 1:00pm - 4:00pm: Worked on group project.

#### Thursday, 6/6/24

* 9:00am - 11:00am: Worked on multi-step form validation.

* 11:00am - 12:00pm: Met with Ethel.

* 1:00pm - 4:00pm: Worked on group project.

#### Friday, 6/7/24

* 9:00am - 10:00am: Worked on multi-step form.

<!-- NOTES:

Finish multi-step form validation:

  Trip info that is not required:

  Past Trips:

  * Destination Type (Domestic/Int'l)
  * Water Type (Freshwater/Saltwater)

  Future Trips:

  * Destination Type (Domestic/Int'l)
  * Water Type (Freshwater/Saltwater)
  * Fish Species
  * Air Travel Costs
  * Baggage and Luggage Policies

Consider adding unique ID's to each trip

-->