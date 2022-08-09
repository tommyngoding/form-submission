import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";
import user from "@testing-library/user-event";

describe("App", () => {
  it("renders form submission when add data button is clicked", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    user.click(screen.getByRole("button", { name: "+ Add data" }));
    expect(
      screen.getByRole("heading", { name: "Form submission" })
    ).toBeInTheDocument();
  });
});
