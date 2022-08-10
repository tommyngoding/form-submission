import { render, screen } from "@testing-library/react";
import { FormSubmission } from "../FormSubmission";
import user from "@testing-library/user-event";

describe("FormSubmission", () => {
  const fillDataPersonalAndSubmit = () => {
    user.type(screen.getByRole("textbox", { name: /nama lengkap/i }), "tiara");
    user.click(screen.getByRole("button", { name: /next/i }));
  };

  const fillRiwayatPendidikanAndSubmit = () => {
    user.type(
      screen.getByRole("textbox", { name: /nama sekolah/i }),
      "sekolah 1"
    );
    user.click(screen.getByRole("button", { name: /next/i }));
  };

  const fillPengalamanKerjaAndSubmit = () => {
    user.type(
      screen.getByRole("textbox", { name: /nama perusahaan/i }),
      "perusahaan 1"
    );
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
    fillRiwayatPendidikanAndSubmit();
    expect(
      screen.queryByText(/nama sekolah tidak boleh kosong/i)
    ).not.toBeInTheDocument();
  });

  it("shows next step when fields are filled and next button on riwayat pendidikan is clicked", () => {
    render(<FormSubmission />);

    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    expect(screen.getByText(/add pengalaman kerja/i)).toBeInTheDocument();
  });

  it("renders error message when next button on pengalaman kerja is clicked", () => {
    render(<FormSubmission />);
    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    user.click(screen.getByRole("button", { name: /next/i }));
    expect(
      screen.getByText(/nama perusahaan tidak boleh kosong/i)
    ).toBeInTheDocument();
  });

  it("hides error message when pengalaman field is filled and next button is clicked", () => {
    render(<FormSubmission />);
    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    user.click(screen.getByRole("button", { name: /next/i }));
    expect(
      screen.getByText(/nama perusahaan tidak boleh kosong/i)
    ).toBeInTheDocument();
    fillPengalamanKerjaAndSubmit();
    expect(
      screen.queryByText(/nama perusahaan tidak boleh kosong/i)
    ).not.toBeInTheDocument();
  });

  it("shows next step when fields are filled and next button on pengalaman kerja is clicked", () => {
    render(<FormSubmission />);

    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    fillPengalamanKerjaAndSubmit();
    expect(
      screen.getByRole("button", { name: "+ Add another skill" })
    ).toBeInTheDocument();
  });

  it("renders error message when next button on keahlian is clicked", () => {
    render(<FormSubmission />);
    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    fillPengalamanKerjaAndSubmit();
    user.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/skill tidak boleh kosong/i)).toBeInTheDocument();
  });

  it("hides error message when keahlian field is filled and next button is clicked", () => {
    render(<FormSubmission />);
    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    fillPengalamanKerjaAndSubmit();
    user.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/skill tidak boleh kosong/i)).toBeInTheDocument();
    user.type(screen.getByPlaceholderText("Input skill"), "javascript");
    user.click(screen.getByRole("button", { name: /submit/i }));
    expect(
      screen.queryByText(/skill tidak boleh kosong/i)
    ).not.toBeInTheDocument();
  });
});
