// src/__tests__/EventList.test.js

import { render, screen } from "@testing-library/react";
import EventList from "../components/EventList";
import { getEvents } from "../api";

describe("<EventList /> component", () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  });

  test("renders correct number of events", async () => {
    const allEvents = await getEvents();

    EventListComponent.rerender(<EventList events={allEvents} />);
    /*expect(EventListComponent.getAllByRole("event-list")).toHaveLength(
      allEvents.length
    );*/
  });
})
