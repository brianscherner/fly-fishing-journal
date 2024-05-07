# Research and Planning Log

#### Thursday, 4/4/24

* 9:40am to 12:00pm: Create basic idea for application with minimum features. Research info about fly fishing to learn about details that I could include in app.

* 12:00pm - 3:20pm: Out for lunch and a doctor's appointment.

* 3:20 to 4:00pm: Brainstorm about potential APIs or new technologies that could be used.

#### Friday, 4/5/24

* 9:00am - 11:00am: Read docs on React Native.

* 11:00am - 11:45am: Break to meet with Ethel for career service work.

* 11:45am - 12:00pm: Continue reading React Native docs.

* 1:30pm - 2:00pm: Read docs on Ionic Framework, specifically about implementing it in an existing React app.

* 2:00pm - 4:00pm: Talk to client (my dad) about the project and ask him to send me some user stories.

#### Monday, 4/8/24

* 9:00am - 10:00am: Read about Firebase and using OpenWeatherMap API with React.

* 10:00am - 11:00am: Write up capstone proposal.

# Work Log (4.4.5.1 React NoSQL Independent Project)

#### Monday, 4/22/24

* 1:00pm - 3:00pm: Create basic application template and draw components diagram.

* 3:00pm - 4:00pm: Begin application development, starting with "Past Trips" section.

#### Tuesday, 4/23/24

* 9:10am - 10:15am: Work on building functionality for a user to submit a form for a "Past Trip", and toggle state between the past trips list and form.

* 10:15am - 11:35am: Edit app diagram to include a "TripsControl" component, where PastTripsControl and FutureTripsControl components will live.

* 11:40am - 12:00pm: Work on refactoring app so that PastTripsControl will live inside TripsControl component.

* 1:00pm - 2:30pm: After working on changing state, realized I was overcomplicating component structure and backtracked to my original state.

* 2:30pm - 3:00pm : Add "Read" functionality for past trip details.

* 3:00pm - 3:20pm : Add "Delete" functionality for past trips.

* 3:25pm - 3:50pm: Add "Edit" functionality for past trips.

#### Wednesday, 4/24/24

* 9:15am - 10:45am: Add 'Create' functionality for "Future Trips", and toggling state between future trips list and the form to submit a future trip.

#### Monday, 5/6/24

* 10:30am - 12:00pm: Work on managing shared state between "Past Trips" and "Future Trips".

* 1:00pm - 3:00pm: Worked on trying to share state between "Past Trips" and "Future Trips". Decided to abandon approach and instead work on adding Firebase to handle app's state vs handling it locally.

* 3:15pm - 3:45pm: Add Firebase to project.

* 3:45pm - 4:00pm: Think about adding Firebase to CRUD functionality for Past Trips, or adding Authentication and Authorization first.

#### Tuesday, 5/7/24

* 9:00am - 10:45am: Add authentication with Firebase.

* 10:45am - 11:00am: Add functionality so that only an authorized user can access Past Trips.

* 11:00am - 12:00pm: Add functionality to view Past Trips from Firestore in application's UI.

* 1:00pm - 3:00pm: Work on adding extra layer of error handling, and add Update and Delete functionality for Past Trips from Firestore.

* 3:00pm - 3:45pm: Redraw diagram to include new component structure, which consolidates all past/future trip components into trip components.

* 3:45pm - 4:00pm: Begin renaming components and removing components related to "Future Trips".

<!-- NOTES:

Refactor application to show all trips in one list.
Conditionally render trips by having a toggle feature.
Past Trips/Future Trips will display based on type.
Conditionally render different form fields based on trip type.
Conditionally render different trip details based on trip type. -->