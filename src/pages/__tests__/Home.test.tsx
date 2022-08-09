import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "../Home";

describe("Home", () => {
  it("renders heading, button and table", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", { name: /teravin test react.js/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "+ Add data" })
    ).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
