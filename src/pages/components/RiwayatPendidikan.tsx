import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import {
  RiwayataPendidikanErrorMessage,
  RiwayatPendidikan as RiwayatPendidikanType,
} from "../../entity/RiwayatPendidikan";
import { AddForm } from "./AddForm";
import { RiwayatPendidikanFields } from "./RiwayatPendidikanFields";

interface RiwayPendidikanProps {
  handleSubmit: React.FormEventHandler;
  fields: RiwayatPendidikanType;
  errorMessage: RiwayataPendidikanErrorMessage;
  handleChange: React.FormEventHandler;
  handleBack: React.FormEventHandler;
}

const defaultProps: RiwayPendidikanProps = {
  handleSubmit: () => {},
  fields: {
    daftarSekolah: [
      {
        namaSekolah: "",
        jenjang: "",
        ipk: "",
        tahunMasuk: "",
        tahunLulus: "",
        jurusan: "",
      },
      {
        namaSekolah: "",
        jenjang: "",
        ipk: "",
        tahunMasuk: "",
        tahunLulus: "",
        jurusan: "",
      },
    ],
  },
  errorMessage: {
    daftarError: [
      {
        namaSekolah: "",
        jenjang: "",
        ipk: "",
        tahunMasuk: "",
        tahunLulus: "",
        jurusan: "",
      },
      {
        namaSekolah: "",
        jenjang: "",
        ipk: "",
        tahunMasuk: "",
        tahunLulus: "",
        jurusan: "",
      },
    ],
  },
  handleChange: () => {},
  handleBack: () => {},
};

export const RiwayatPendidikan = ({
  handleSubmit,
  fields,
  errorMessage,
  handleChange,
  handleBack,
}: RiwayPendidikanProps) => {
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
                <RiwayatPendidikanFields
                  prefix="first"
                  pendidikan={fields.daftarSekolah[0]}
                  errorMessage={errorMessage.daftarError[0]}
                  handleChange={handleChange}
                />
              </div>
              <div className="paper-two">
                {showSecondBox && (
                  <RiwayatPendidikanFields
                    prefix="second"
                    pendidikan={fields.daftarSekolah[1]}
                    errorMessage={errorMessage.daftarError[1]}
                    handleChange={handleChange}
                  />
                )}
                {!showSecondBox && (
                  <AddForm
                    onClick={handleAdd}
                    testId="add-riwayat-pendidikan"
                    text=" Add riwayat pendidikan"
                  />
                )}
              </div>
            </Paper>
            <div className="input-container">
              <Button onClick={handleBack} className="back-button">
                {"< Back to Data Personal"}
              </Button>
              <input
                className="input-submit"
                type="submit"
                name="submit"
                value="Continue to Pengalaman Kerja"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

RiwayatPendidikan.defaultProps = defaultProps;
