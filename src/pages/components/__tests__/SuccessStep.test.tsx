import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SuccessStep } from "../SuccessStep";

describe("SuccessStep", () => {
  it("renders success stored and buttons", () => {
    render(
      <MemoryRouter>
        <SuccessStep />
      </MemoryRouter>
    );
    expect(screen.getByText(/data tersimpan/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Back to home" })
    ).toBeInTheDocument();
  });
});
