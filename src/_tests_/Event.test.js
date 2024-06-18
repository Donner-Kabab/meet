import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import mockData from "../mock-data";

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  })
  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]} />);
  })

  test('Creates event title', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('creates event start time', () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });

  test('creates event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('loads event details button with the title (show details)', () => {
    expect(EventComponent.container.queryByText('show details')).toBeInTheDocument();
  });

  test('by default, events details section should be hidden', () => {
    const details = EventComponent.container.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });

  test("shows event details when user clicks 'show details' button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByRole('button');
    await user.click(button, 'Show Details');
    const details = EventComponent.container.querySelector('.details')
    expect(details).toBeInTheDocument();
  });

  test("hides event details when user clicks 'hide details' button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByRole('button');
    const details = EventComponent.container.querySelector('.details')
    await user.click(button, 'Hide Details');
    expect(details).not.toBeInTheDocument();
  });

});