// src/__tests__/App.test.js

import { render, screen, waitFor, within } from "@testing-library/react";
import App from "../App";

describe("<App /> component", () => {
  test("List of events", () => {
    render(<App />);
    const component = screen.getByRole("event-list");
    expect(component).toBeDefined();
  });
});
