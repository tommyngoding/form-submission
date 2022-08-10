import { Paper } from "@mui/material";
import {
  DataPersonal as DataPersonalType,
  DataPersonalErrorMessage,
} from "../../entity/DataPersonal";

interface DataPersonalProps {
  handleSubmit: React.FormEventHandler;
  fields: DataPersonalType;
  errorMessage: DataPersonalErrorMessage;
  handleChange: React.FormEventHandler;
}

const defaultProps: DataPersonalProps = {
  handleSubmit: () => {},
  fields: {
    namaLengkap: "",
  },
  errorMessage: {
    namaLengkap: "",
  },
  handleChange: () => {},
};

export const DataPersonal = ({
  handleSubmit,
  fields,
  errorMessage,
  handleChange,
}: DataPersonalProps) => {
  return (
    <form role="form" onSubmit={handleSubmit}>
      <Paper className="paper-form">
        <label htmlFor="namalengkap">Nama Lengkap</label>
        <input
          type="text"
          id="namalengkap"
          name="nama_lengkap"
          value={fields.namaLengkap}
          onChange={handleChange}
        />
        <br />
        {errorMessage.namaLengkap.length > 0 && (
          <span>{errorMessage.namaLengkap}</span>
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
  );
};

DataPersonal.defaultProps = defaultProps;
