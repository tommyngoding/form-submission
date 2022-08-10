import { CloseOutlined } from "@ant-design/icons";
import { Button, IconButton, Paper, TextField } from "@mui/material";
import {
  Pendidikan,
  PendidikanErrorMessage,
} from "../../entity/RiwayatPendidikan";

interface RiwayatPendidikanBFProps {
  prefix: string;
  pendidikan: Pendidikan;
  errorMessage: PendidikanErrorMessage;
  handleChange: React.FormEventHandler;
}

export const RiwayatPendidikanFields = ({
  prefix,
  pendidikan,
  errorMessage,
  handleChange,
}: RiwayatPendidikanBFProps) => {
  return (
    <Paper className="paper-form-single" style={{ padding: "20px" }}>
      <TextField
        error={errorMessage.namaSekolah.length > 0 ? true : false}
        id={`${prefix}_namasekolah`}
        label="Nama Sekolah *"
        variant="outlined"
        name={`${prefix}namaSekolah`}
        value={pendidikan.namaSekolah}
        onChange={handleChange}
        fullWidth
        helperText={errorMessage.namaSekolah}
      />

      <TextField
        error={errorMessage.jenjang.length > 0 ? true : false}
        id={`${prefix}_jenjang`}
        label="Jenjang *"
        variant="outlined"
        name={`${prefix}jenjang`}
        value={pendidikan.jenjang}
        onChange={handleChange}
        fullWidth
        helperText={errorMessage.jenjang}
      />

      <TextField
        error={errorMessage.jurusan.length > 0 ? true : false}
        id={`${prefix}_jurusan`}
        label="Jurusan *"
        variant="outlined"
        name={`${prefix}jurusan`}
        value={pendidikan.jurusan}
        onChange={handleChange}
        fullWidth
        helperText={errorMessage.jurusan}
      />
      <TextField
        error={errorMessage.ipk.length > 0 ? true : false}
        id={`${prefix}_ipk`}
        label="IPK *"
        variant="outlined"
        name={`${prefix}ipk`}
        value={pendidikan.ipk}
        onChange={handleChange}
        fullWidth
        helperText={errorMessage.ipk}
      />

      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <TextField
          error={errorMessage.tahunMasuk.length > 0 ? true : false}
          id={`${prefix}_tahunMasuk`}
          label="Tahun masuk *"
          variant="outlined"
          name={`${prefix}tahunMasuk`}
          value={pendidikan.tahunMasuk}
          onChange={handleChange}
          fullWidth
          helperText={errorMessage.tahunMasuk}
        />

        <TextField
          error={errorMessage.tahunLulus.length > 0 ? true : false}
          id={`${prefix}_tahunLulus`}
          label="Tahun lulus *"
          variant="outlined"
          name={`${prefix}tahunLulus`}
          value={pendidikan.tahunLulus}
          onChange={handleChange}
          fullWidth
          helperText={errorMessage.tahunLulus}
        />
      </div>
    </Paper>
  );
};
