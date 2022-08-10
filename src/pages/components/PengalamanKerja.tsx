import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import {
  PengalamanKerjaErrorMessage,
  PengalamanKerja as PengalamanKerjaType,
} from "../../entity/PengalamanKerja";
import { AddForm } from "./AddForm";
import { PengalamanKerjaFields } from "./PengalamanKerjaFields";

interface PengalamanKerjaProps {
  handleSubmit: React.FormEventHandler;
  fields: PengalamanKerjaType;
  errorMessage: PengalamanKerjaErrorMessage;
  handleChange: React.FormEventHandler;
  handleBack: React.FormEventHandler;
}

const defaultProps: PengalamanKerjaProps = {
  handleSubmit: () => {},
  fields: {
    daftarKerja: [
      {
        namaPerusahaan: "",
        jabatan: "",
        tahunMasuk: "",
        tahunKeluar: "",
        deskripsiPekerjaan: "",
      },
      {
        namaPerusahaan: "",
        jabatan: "",
        tahunMasuk: "",
        tahunKeluar: "",
        deskripsiPekerjaan: "",
      },
    ],
  },
  errorMessage: {
    daftarError: [
      {
        namaPerusahaan: "",
        jabatan: "",
        tahunMasuk: "",
        tahunKeluar: "",
        deskripsiPekerjaan: "",
      },
      {
        namaPerusahaan: "",
        jabatan: "",
        tahunMasuk: "",
        tahunKeluar: "",
        deskripsiPekerjaan: "",
      },
    ],
  },
  handleChange: () => {},
  handleBack: () => {},
};

export const PengalamanKerja = ({
  handleSubmit,
  fields,
  errorMessage,
  handleChange,
  handleBack,
}: PengalamanKerjaProps) => {
  const [showSecondBox, setShowSecondBox] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSecondBox(true);
  };

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <Paper className="paper-form two-paper">
              <div className="paper-one">
                <PengalamanKerjaFields
                  prefix="first"
                  kerja={fields.daftarKerja[0]}
                  errorMessage={errorMessage.daftarError[0]}
                  handleChange={handleChange}
                />
              </div>
              <div className="paper-two">
                {showSecondBox && (
                  <PengalamanKerjaFields
                    prefix="second"
                    kerja={fields.daftarKerja[1]}
                    errorMessage={errorMessage.daftarError[1]}
                    handleChange={handleChange}
                  />
                )}
                {!showSecondBox && (
                  <AddForm
                    onClick={handleAdd}
                    testId="add-pengalaman-kerja"
                    text=" Add pengalaman kerja"
                  />
                )}
              </div>
            </Paper>
            <div className="input-container">
              <Button onClick={handleBack} className="back-button">
                {"< Back to Riwayat Pendidikan"}
              </Button>
              <input
                className="input-submit"
                type="submit"
                name="submit"
                value="Continue to Keahlian"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

PengalamanKerja.defaultProps = defaultProps;
