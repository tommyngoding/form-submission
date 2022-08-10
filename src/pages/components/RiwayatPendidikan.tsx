import { Paper } from "@mui/material";
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
}

const defaultProps: RiwayPendidikanProps = {
  handleSubmit: () => {},
  fields: {
    daftarSekolah: [
      {
        namaSekolah: "",
      },
      {
        namaSekolah: "",
      },
    ],
  },
  errorMessage: {
    daftarError: [
      {
        namaSekolah: "",
      },
      {
        namaSekolah: "",
      },
    ],
  },
  handleChange: () => {},
};

export const RiwayatPendidikan = ({
  handleSubmit,
  fields,
  errorMessage,
  handleChange,
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
            <Paper className="paper-form">
              <RiwayatPendidikanFields
                prefix="first"
                pendidikan={fields.daftarSekolah[0]}
                errorMessage={errorMessage.daftarError[0]}
                handleChange={handleChange}
              />
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

RiwayatPendidikan.defaultProps = defaultProps;
