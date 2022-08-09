import { render, screen } from "@testing-library/react";
import { DataPersonal } from "../DataPersonal";

describe("DataPersonal", () => {
  it("renders fields and button", () => {
    render(<DataPersonal />);
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /nama lengkap/i })
    ).toBeInTheDocument();
  });
});
