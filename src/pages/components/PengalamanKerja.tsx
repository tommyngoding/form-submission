import { Paper } from "@mui/material";
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
}

const defaultProps: PengalamanKerjaProps = {
  handleSubmit: () => {},
  fields: {
    daftarKerja: [
      {
        namaPerusahaan: "",
      },
      {
        namaPerusahaan: "",
      },
    ],
  },
  errorMessage: {
    daftarError: [
      {
        namaPerusahaan: "",
      },
      {
        namaPerusahaan: "",
      },
    ],
  },
  handleChange: () => {},
};

export const PengalamanKerja = ({
  handleSubmit,
  fields,
  errorMessage,
  handleChange,
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
            <Paper className="paper-form">
              <PengalamanKerjaFields
                prefix="first"
                kerja={fields.daftarKerja[0]}
                errorMessage={errorMessage.daftarError[0]}
                handleChange={handleChange}
              />
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
            </Paper>
            <div className="input-container">
              <input
                className="input-submit"
                type="submit"
                name="submit"
                value="next"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

PengalamanKerja.defaultProps = defaultProps;
