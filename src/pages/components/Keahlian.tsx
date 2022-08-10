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
};

export const Keahlian = ({
  handleSubmit,
  fields,
  errorMessage,
  handleChange,
}: KeahlianProps) => {
  const [totalInput, setTotalInput] = useState(1);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTotalInput(totalInput + 1);
  };
  return (
    <>
      <form>
        {Array.from(Array(totalInput).keys()).map((number) => (
          <div key={number}>
            <input
              placeholder="Input skill"
              value={fields.daftarKeahlian[number].nama}
              onChange={handleChange}
            />{" "}
            <br />
            {errorMessage.daftarError[number].nama.length > 0 && (
              <span>{errorMessage.daftarError[number].nama}</span>
            )}
          </div>
        ))}

        <button onClick={handleAdd}>+ Add another skill</button>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

Keahlian.defaultProps = defaultProps;
