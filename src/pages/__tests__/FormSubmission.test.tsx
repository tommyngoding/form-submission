import { render, screen } from "@testing-library/react";
import { FormSubmission } from "../FormSubmission";
import user from "@testing-library/user-event";

describe("FormSubmission", () => {
  const fillDataPersonalAndSubmit = () => {
    user.type(screen.getByRole("textbox", { name: /nama lengkap/i }), "tiara");
    user.click(screen.getByRole("button", { name: /next/i }));
  };

  it("renders error message when next button is clicked", () => {
    render(<FormSubmission />);
    user.click(screen.getByRole("button", { name: /next/i }));
    expect(
      screen.getByText(/nama lengkap tidak boleh kosong/i)
    ).toBeInTheDocument();
  });

  it("hides error message when field is filled and next button is clicked", () => {
    render(<FormSubmission />);
    user.click(screen.getByRole("button", { name: /next/i }));
    expect(
      screen.getByText(/nama lengkap tidak boleh kosong/i)
    ).toBeInTheDocument();
    user.type(screen.getByRole("textbox", { name: /nama lengkap/i }), "tiara");
    user.click(screen.getByRole("button", { name: /next/i }));
    expect(
      screen.queryByText(/nama lengkap tidak boleh kosong/i)
    ).not.toBeInTheDocument();
  });

  it("shows next step when fields are filled and next button is clicked", () => {
    render(<FormSubmission />);

    fillDataPersonalAndSubmit();
    expect(screen.getByText(/add riwayat pendidikan/i)).toBeInTheDocument();
  });

  it("renders error message when next button on riwayat pendidikan is clicked", () => {
    render(<FormSubmission />);
    fillDataPersonalAndSubmit();
    user.click(screen.getByRole("button", { name: /next/i }));
    user.click(screen.getByRole("button", { name: /next/i }));
    expect(
      screen.getByText(/nama sekolah tidak boleh kosong/i)
    ).toBeInTheDocument();
  });

  it("hides error message when riwayat field is filled and next button is clicked", () => {
    render(<FormSubmission />);
    fillDataPersonalAndSubmit();
    user.click(screen.getByRole("button", { name: /next/i }));
    user.click(screen.getByRole("button", { name: /next/i }));
    expect(
      screen.getByText(/nama sekolah tidak boleh kosong/i)
    ).toBeInTheDocument();
    user.type(
      screen.getByRole("textbox", { name: /nama sekolah/i }),
      "sekolah 1"
    );
    user.click(screen.getByRole("button", { name: /next/i }));
    expect(
      screen.queryByText(/nama sekolah tidak boleh kosong/i)
    ).not.toBeInTheDocument();
  });
});
