import { render, screen } from "@testing-library/react";
import { RiwayatPendidikan } from "../RiwayatPendidikan";
import user from "@testing-library/user-event";

describe("RiwayatPendidikan", () => {
  it("renders add riwayat pendikan and forms", () => {
    render(<RiwayatPendidikan />);
    expect(screen.getByText(/add riwayat pendidikan/i)).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /nama sekolah/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
    expect(screen.getByTestId("add-riwayat-pendidikan")).toBeInTheDocument();
  });

  it("renders new field when add riwayat pendidikan btn is clicked", () => {
    render(<RiwayatPendidikan />);
    expect(
      screen.getAllByRole("textbox", { name: /nama sekolah/i })
    ).toHaveLength(1);
    user.click(screen.getByTestId("add-riwayat-pendidikan"));
    expect(
      screen.getAllByRole("textbox", { name: /nama sekolah/i })
    ).toHaveLength(2);
    expect(
      screen.queryByTestId("add-riwayat-pendidikan")
    ).not.toBeInTheDocument();
  });
});
