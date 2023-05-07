import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import App from "./App";
import "@testing-library/jest-dom";

describe("All tests", () => {
  it("render Application", () => {
    render(<App />);

    expect(screen.getByText("Add Todo")).toBeInTheDocument();
    expect(screen.findByRole("h1"));
  });
});
