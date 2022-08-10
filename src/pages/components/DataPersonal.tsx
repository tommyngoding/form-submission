import { Button, Paper, TextField } from "@mui/material";
import {
  DataPersonal as DataPersonalType,
  DataPersonalErrorMessage,
} from "../../entity/DataPersonal";

interface DataPersonalProps {
  handleSubmit: React.FormEventHandler;
  fields: DataPersonalType;
  errorMessage: DataPersonalErrorMessage;
  handleChange: React.FormEventHandler;
  handleBack: React.FormEventHandler;
}

const defaultProps: DataPersonalProps = {
  handleSubmit: () => {},
  fields: {
    namaLengkap: "",
    nomorTelepon: "",
    alamat: "",
    email: "",
  },
  errorMessage: {
    namaLengkap: "",
    nomorTelepon: "",
    alamat: "",
    email: "",
  },
  handleChange: () => {},
  handleBack: () => {},
};

export const DataPersonal = ({
  handleSubmit,
  fields,
  errorMessage,
  handleChange,
  handleBack,
}: DataPersonalProps) => {
  return (
    <form role="form" onSubmit={handleSubmit}>
      <Paper className="paper-form paper-form-single">
        <TextField
          error={errorMessage.namaLengkap.length > 0 ? true : false}
          id="namalengkap"
          label="Nama Lengkap *"
          variant="outlined"
          name="namaLengkap"
          value={fields.namaLengkap}
          onChange={handleChange}
          fullWidth={true}
          helperText={errorMessage.namaLengkap}
        />
        <TextField
          error={errorMessage.alamat.length > 0 ? true : false}
          id="alamat"
          label="Alamat *"
          variant="outlined"
          name="alamat"
          value={fields.alamat}
          onChange={handleChange}
          fullWidth={true}
          helperText={errorMessage.alamat}
        />
        <TextField
          error={errorMessage.nomorTelepon.length > 0 ? true : false}
          id="nomortelepon"
          label="Nomor telepon *"
          variant="outlined"
          name="nomorTelepon"
          value={fields.nomorTelepon}
          onChange={handleChange}
          fullWidth={true}
          helperText={errorMessage.nomorTelepon}
        />
        <TextField
          error={errorMessage.email.length > 0 ? true : false}
          id="email"
          label="Email *"
          variant="outlined"
          name="email"
          value={fields.email}
          onChange={handleChange}
          fullWidth={true}
          helperText={errorMessage.email}
        />
      </Paper>
      <div className="input-container">
        <Button onClick={handleBack} className="back-button">
          {"< Back to Home"}
        </Button>
        <input
          className="input-submit"
          type="submit"
          name="submit"
          value="Continue to Riwayat Pendidikan"
        />
      </div>
    </form>
  );
};

DataPersonal.defaultProps = defaultProps;
