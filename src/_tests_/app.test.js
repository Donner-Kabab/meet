// src/__tests__/App.test.js

import { render, screen } from "@testing-library/react";
import App from "../App";

describe("<App /> component", () => {
  test("Should have foo and bar", () => {
    render(<App />);
    const component = screen.getByRole("event-list");
    expect(component).toBeDefined();
  });

  test("Should have foo and bar", () => {
    render(<App />);
    const component = screen.getByRole("city-search");
    expect(component).toBeDefined();
  });
});
////////////////////This is the basic structure used to test React components//////////////////////////////////
