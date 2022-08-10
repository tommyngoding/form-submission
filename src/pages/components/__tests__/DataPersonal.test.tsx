import { render, screen } from "@testing-library/react";
import { DataPersonal } from "../DataPersonal";

describe("DataPersonal", () => {
  it("renders fields and button", () => {
    render(<DataPersonal />);
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /continue to riwayat pendidikan/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /back to home/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /nama lengkap/i })
    ).toBeInTheDocument();
  });
});
