import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import {
  DaftarKeahlianErrorMessage,
  DaftarKeahlian as DaftarKeahlianType,
} from "../../entity/Keahlian";

interface KeahlianProps {
  handleSubmit: React.FormEventHandler;
  fields: DaftarKeahlianType;
  errorMessage: DaftarKeahlianErrorMessage;
  handleChange: React.FormEventHandler;
  handleBack: React.FormEventHandler;
}

const defaultProps: KeahlianProps = {
  handleSubmit: () => {},
  fields: {
    daftarKeahlian: [
      {
        nama: "",
      },
      {
        nama: "",
      },
    ],
  },
  errorMessage: {
    daftarError: [
      {
        nama: "",
      },
      {
        nama: "",
      },
    ],
  },
  handleChange: () => {},
  handleBack: () => {},
};

export const Keahlian = ({
  handleSubmit,
  fields,
  errorMessage,
  handleChange,
  handleBack,
}: KeahlianProps) => {
  const [totalInput, setTotalInput] = useState(1);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTotalInput(totalInput + 1);
  };
  return (
    <>
      <form>
        <Paper className="paper-form">
          {Array.from(Array(totalInput).keys()).map((number) => (
            <div key={number} style={{ marginBottom: "20px" }}>
              <TextField
                error={
                  errorMessage.daftarError[number].nama.length > 0
                    ? true
                    : false
                }
                id={`${number}_id`}
                label="Skill name *"
                variant="outlined"
                name={`${number}nama`}
                value={fields.daftarKeahlian[number].nama}
                onChange={handleChange}
                fullWidth
                helperText={errorMessage.daftarError[number].nama}
              />
            </div>
          ))}

          <button onClick={handleAdd} style={{ width: "100%", height: "50px" }}>
            + Add another skill
          </button>
        </Paper>
        <div className="input-container">
          <Button onClick={handleBack} className="back-button">
            {"< Back to Pengalaman Kerja"}
          </Button>
          <Button variant="contained" color="info" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

Keahlian.defaultProps = defaultProps;
