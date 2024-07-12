import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
    test('When user hasn\'t specified a number, 32 events are shown by default', ({ given, when, then }) => {
        given('user opens the app', () => {

        });

        when('there is no specified number of events', () => {

        });

        then(/^(\d+) events will be shown by default$/, async (arg0) => {

        });
    });

    test('User can change the number of events displayed', ({ given, when, then }) => {
        given('the user opened the app', () => {

        });

        when('user specifies a number of events', () => {

        });

        then('the specified number of events will be shown', () => {

        });
    });
});
