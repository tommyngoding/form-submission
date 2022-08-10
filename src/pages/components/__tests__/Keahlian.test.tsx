import { render, screen } from "@testing-library/react";
import { Keahlian } from "../Keahlian";
import user from "@testing-library/user-event";

describe("Keahlian", () => {
  it("renders input and buttons", () => {
    render(<Keahlian />);
    expect(
      screen.getByRole("button", { name: "+ Add another skill" })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Input skill")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("renders new field when add another skill btn is clicked", () => {
    render(<Keahlian />);
    expect(screen.getAllByPlaceholderText("Input skill")).toHaveLength(1);
    user.click(screen.getByRole("button", { name: "+ Add another skill" }));
    expect(screen.getAllByPlaceholderText("Input skill")).toHaveLength(2);
  });
});
