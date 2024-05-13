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

<!-- NOTES:

Conditionally render trips by having a toggle feature.

Consider adding unique ID's to each trip

-->