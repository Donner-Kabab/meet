// src/__tests__/App.test.js

import { render, screen } from "@testing-library/react";
import App from "../App";

describe("<App /> component", () => {
  test("List of events", () => {
    render(<App />);
    const component = screen.getByRole("event-list");
    expect(component).toBeDefined();
  });

  test("city search", () => {
    render(<App />);
    const component = screen.getByRole("city-search");
    expect(component).toBeDefined();
  });

  test("number of events", () => {
    expect(
      component.container.firstChild.querySelector("number-of-events")
    ).toBeInTheDocument();
  });
});
