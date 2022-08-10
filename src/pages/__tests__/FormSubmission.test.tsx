import { render, screen } from "@testing-library/react";
import { FormSubmission } from "../FormSubmission";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("FormSubmission", () => {
  const renderWithRouter = () => {
    render(
      <MemoryRouter>
        <FormSubmission />
      </MemoryRouter>
    );
  };

  const fillDataPersonalAndSubmit = () => {
    user.type(screen.getByRole("textbox", { name: /nama lengkap/i }), "tiara");
    user.type(screen.getByRole("textbox", { name: /alamat/i }), "jakarta");
    user.type(
      screen.getByRole("textbox", { name: /nomor telepon/i }),
      "081111111"
    );
    user.type(screen.getByRole("textbox", { name: /email/i }), "mail@mail.com");
    user.click(
      screen.getByRole("button", { name: /continue to riwayat pendidikan/i })
    );
  };

  const fillRiwayatPendidikanAndSubmit = () => {
    user.type(
      screen.getByRole("textbox", { name: /nama sekolah/i }),
      "sekolah 1"
    );
    user.type(screen.getByRole("textbox", { name: /jenjang/i }), "s1");
    user.type(screen.getByRole("textbox", { name: /jurusan/i }), "ipa");
    user.type(screen.getByRole("textbox", { name: /ipk/i }), "3.1");
    user.type(screen.getByRole("textbox", { name: /tahun masuk/i }), "2020");
    user.type(screen.getByRole("textbox", { name: /tahun lulus/i }), "2022");
    user.click(
      screen.getByRole("button", { name: /continue to pengalaman kerja/i })
    );
  };

  const fillPengalamanKerjaAndSubmit = () => {
    user.type(
      screen.getByRole("textbox", { name: /nama perusahaan/i }),
      "perusahaan 1"
    );
    user.type(screen.getByRole("textbox", { name: /jabatan/i }), "jabatan 1");
    user.type(screen.getByRole("textbox", { name: /tahun masuk/i }), "2000");
    user.type(screen.getByRole("textbox", { name: /tahun keluar/i }), "2021");
    user.type(
      screen.getByRole("textbox", { name: /deskripsi pekerjaan/i }),
      "deskripsi 1"
    );
    user.click(screen.getByRole("button", { name: /continue to keahlian/i }));
  };

  const fillDaftarKeahlianAndSubmit = () => {
    user.type(
      screen.getByRole("textbox", { name: /skill name/i }),
      "javascript"
    );
    user.click(screen.getByRole("button", { name: /submit/i }));
  };

  const fillAllInformationAndSubmit = () => {
    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    fillPengalamanKerjaAndSubmit();
    fillDaftarKeahlianAndSubmit();
  };

  it("renders error message when next button is clicked", () => {
    renderWithRouter();
    user.click(
      screen.getByRole("button", { name: /continue to riwayat pendidikan/i })
    );
    expect(
      screen.getByText(/nama lengkap tidak boleh kosong/i)
    ).toBeInTheDocument();
  });

  it("hides error message when field is filled and next button is clicked", () => {
    renderWithRouter();
    user.click(
      screen.getByRole("button", { name: /continue to riwayat pendidikan/i })
    );
    expect(
      screen.getByText(/nama lengkap tidak boleh kosong/i)
    ).toBeInTheDocument();
    user.type(screen.getByRole("textbox", { name: /nama lengkap/i }), "tiara");
    user.click(
      screen.getByRole("button", { name: /continue to riwayat pendidikan/i })
    );
    expect(
      screen.queryByText(/nama lengkap tidak boleh kosong/i)
    ).not.toBeInTheDocument();
  });

  it("shows next step when fields are filled and next button is clicked", () => {
    renderWithRouter();

    fillDataPersonalAndSubmit();
    expect(screen.getByText(/add riwayat pendidikan/i)).toBeInTheDocument();
  });

  it("renders error message when next button on riwayat pendidikan is clicked", () => {
    renderWithRouter();
    fillDataPersonalAndSubmit();
    user.click(
      screen.getByRole("button", { name: /continue to pengalaman kerja/i })
    );
    expect(
      screen.getByText(/nama sekolah tidak boleh kosong/i)
    ).toBeInTheDocument();
  });

  it("renders data personal page when back button on riwayat pendidikan is clicked", () => {
    renderWithRouter();
    fillDataPersonalAndSubmit();
    user.click(screen.getByRole("button", { name: /back to data personal/i }));
    expect(
      screen.getByRole("textbox", { name: /nama lengkap/i })
    ).toBeInTheDocument();
  });

  it("hides error message when riwayat field is filled and next button is clicked", () => {
    renderWithRouter();
    fillDataPersonalAndSubmit();
    user.click(
      screen.getByRole("button", { name: /continue to pengalaman kerja/i })
    );
    expect(
      screen.getByText(/nama sekolah tidak boleh kosong/i)
    ).toBeInTheDocument();
    fillRiwayatPendidikanAndSubmit();
    expect(
      screen.queryByText(/nama sekolah tidak boleh kosong/i)
    ).not.toBeInTheDocument();
  });

  it("shows next step when fields are filled and next button on riwayat pendidikan is clicked", () => {
    renderWithRouter();

    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    expect(screen.getByText(/add pengalaman kerja/i)).toBeInTheDocument();
  });

  it("renders error message when next button on pengalaman kerja is clicked", () => {
    renderWithRouter();
    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    user.click(screen.getByRole("button", { name: /continue to keahlian/i }));
    expect(
      screen.getByText(/nama perusahaan tidak boleh kosong/i)
    ).toBeInTheDocument();
  });

  it("hides error message when pengalaman field is filled and next button is clicked", () => {
    renderWithRouter();
    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    user.click(screen.getByRole("button", { name: /continue to keahlian/i }));
    expect(
      screen.getByText(/nama perusahaan tidak boleh kosong/i)
    ).toBeInTheDocument();
    fillPengalamanKerjaAndSubmit();
    expect(
      screen.queryByText(/nama perusahaan tidak boleh kosong/i)
    ).not.toBeInTheDocument();
  });

  it("shows next step when fields are filled and next button on pengalaman kerja is clicked", () => {
    renderWithRouter();

    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    fillPengalamanKerjaAndSubmit();
    expect(
      screen.getByRole("button", { name: "+ Add another skill" })
    ).toBeInTheDocument();
  });

  it("renders error message when next button on keahlian is clicked", () => {
    renderWithRouter();
    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    fillPengalamanKerjaAndSubmit();
    user.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/skill tidak boleh kosong/i)).toBeInTheDocument();
  });

  it("hides error message when keahlian field is filled and next button is clicked", () => {
    renderWithRouter();
    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    fillPengalamanKerjaAndSubmit();
    user.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/skill tidak boleh kosong/i)).toBeInTheDocument();
    fillDaftarKeahlianAndSubmit();
    expect(
      screen.queryByText(/skill tidak boleh kosong/i)
    ).not.toBeInTheDocument();
  });

  it("shows next step when fields are filled and next button on daftar keahlian is clicked", () => {
    renderWithRouter();

    fillDataPersonalAndSubmit();
    fillRiwayatPendidikanAndSubmit();
    fillPengalamanKerjaAndSubmit();
    fillDaftarKeahlianAndSubmit();
    expect(screen.getByText(/data tersimpan/i)).toBeInTheDocument();
  });
});
