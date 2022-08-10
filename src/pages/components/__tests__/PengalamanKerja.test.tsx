import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { PengalamanKerja } from "../PengalamanKerja";

describe("PengalamanKerja", () => {
  it("renders add pengalaman kerja and forms", () => {
    render(<PengalamanKerja />);
    expect(screen.getByText(/add pengalaman kerja/i)).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /nama perusahaan/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /continue to keahlian/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /back to riwayat pendidikan/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("add-pengalaman-kerja")).toBeInTheDocument();
  });

  it("renders new field when add pengalaman kerja btn is clicked", () => {
    render(<PengalamanKerja />);
    expect(
      screen.getAllByRole("textbox", { name: /nama perusahaan/i })
    ).toHaveLength(1);
    user.click(screen.getByTestId("add-pengalaman-kerja"));
    expect(
      screen.getAllByRole("textbox", { name: /nama perusahaan/i })
    ).toHaveLength(2);
    expect(
      screen.queryByTestId("add-pengalaman-kerja")
    ).not.toBeInTheDocument();
  });
});
