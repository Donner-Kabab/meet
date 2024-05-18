MEET APP PROJECT DESCRIPTION
  The Meet app is a progressive web app with a serverless backend. It offers offline access to upcoming events in specific cities and it prioritizes code quality and test coverage for optimal performance.

                        Test Scenarios

Filter Events by City:
·       Given user hasn’t searched for any city;
·       When the user opens the app;
·       Then the user should see a list of upcoming events.

Show/Hide Event Details:
·       Given the main page is open;
·       When user starts typing in the city textbox;
·       Then the user should receive a list of cities that match what they’ve typed

Specify Number of Events:
·       Given user was typing “Berlin” in the city textbox and the list of suggested cities is showing;
·       When the user selects a city from the list;
·       Then their city should be changed to that city and the user should receive a list of upcoming events in that city.

Use the App when Offline:
·       Given user opens the app while offline;
·       When the user opens the app;
·       Then the user should be able to use the map of a chosen city while offline.

Add an App Shortcut to the Home Screen:
·       Given user wants to create a shortcut to their home screen;
·       When user clicks on the button to create the shortcut;
·       Then the user  will find the icon for the shortcut on their home screen.

Display Charts Visualizing Event Details:
·       Given user selects an event to see more details;
·       When user selects an event;
·       Then the user will see the details of an event.

                        User Stories

1.	As a user I should be able to filter events in the app by city.
2.	As a user I should be able to show and hide event information.
3.	As a user I should be able to specify the number of events I can see.
4.	As a user I should have access to the event data for the city while offline.
5.	As a user I should be able to add a shortcut to my home screen for easy access.
6.	As a user I should be able to display charts to better show event data.
