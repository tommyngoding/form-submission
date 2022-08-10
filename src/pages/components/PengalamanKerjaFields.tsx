import { Paper, TextField } from "@mui/material";
import { Kerja, KerjaErrorMessage } from "../../entity/PengalamanKerja";

interface RiwayatPendidikanBFProps {
  prefix: string;
  kerja: Kerja;
  errorMessage: KerjaErrorMessage;
  handleChange: React.FormEventHandler;
}

export const PengalamanKerjaFields = ({
  prefix,
  kerja,
  errorMessage,
  handleChange,
}: RiwayatPendidikanBFProps) => {
  return (
    <Paper style={{ padding: "20px" }}>
      <TextField
        error={errorMessage.namaPerusahaan.length > 0 ? true : false}
        id={`${prefix}_namaperusahaan`}
        label="Nama Perusahaan *"
        variant="outlined"
        name={`${prefix}nama_perusahaan`}
        value={kerja.namaPerusahaan}
        onChange={handleChange}
        fullWidth
        helperText={errorMessage.namaPerusahaan}
      />
    </Paper>
  );
};
