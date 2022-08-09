import { render, screen } from "@testing-library/react";
import { AddForm } from "../AddForm";

describe("AddForm", () => {
  it("renders text and button", () => {
    render(<AddForm onClick={() => {}} testId="test-id" text="add new form" />);
    expect(screen.getByTestId("test-id")).toBeInTheDocument();
    expect(screen.getByText("add new form")).toBeInTheDocument();
  });
});
