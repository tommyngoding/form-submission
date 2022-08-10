import { render, screen } from "@testing-library/react";
import { Kerja, KerjaErrorMessage } from "../../../entity/PengalamanKerja";
import { PengalamanKerjaFields } from "../../components/PengalamanKerjaFields";

describe("PengalamanKerjaFields", () => {
  it("renders label, input and error message", () => {
    const kerja: Kerja = {
      namaPerusahaan: "PT. Jaya",
      jabatan: "",
      tahunMasuk: "",
      tahunKeluar: "",
      deskripsiPekerjaan: "",
    };
    const errMsg: KerjaErrorMessage = {
      namaPerusahaan: "Error sample",
      jabatan: "",
      tahunMasuk: "",
      tahunKeluar: "",
      deskripsiPekerjaan: "",
    };
    render(
      <PengalamanKerjaFields
        kerja={kerja}
        errorMessage={errMsg}
        prefix="first_"
        handleChange={() => {}}
      />
    );
    expect(screen.getByDisplayValue(kerja.namaPerusahaan)).toBeInTheDocument();
    expect(screen.getByText(errMsg.namaPerusahaan)).toBeInTheDocument();
  });
});
