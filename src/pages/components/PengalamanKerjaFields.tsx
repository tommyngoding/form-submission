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
    <Paper className="paper-form-single" style={{ padding: "20px" }}>
      <TextField
        error={errorMessage.namaPerusahaan.length > 0 ? true : false}
        id={`${prefix}_namaperusahaan`}
        label="Nama Perusahaan *"
        variant="outlined"
        name={`${prefix}namaPerusahaan`}
        value={kerja.namaPerusahaan}
        onChange={handleChange}
        fullWidth
        helperText={errorMessage.namaPerusahaan}
      />
      <TextField
        error={errorMessage.jabatan.length > 0 ? true : false}
        id={`${prefix}_jabatan`}
        label="Jabatan *"
        variant="outlined"
        name={`${prefix}jabatan`}
        value={kerja.jabatan}
        onChange={handleChange}
        fullWidth
        helperText={errorMessage.jabatan}
      />
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <TextField
          error={errorMessage.tahunMasuk.length > 0 ? true : false}
          id={`${prefix}_tahunMasuk`}
          label="Tahun masuk *"
          variant="outlined"
          name={`${prefix}tahunMasuk`}
          value={kerja.tahunMasuk}
          onChange={handleChange}
          fullWidth
          helperText={errorMessage.tahunMasuk}
        />
        <TextField
          error={errorMessage.tahunKeluar.length > 0 ? true : false}
          id={`${prefix}_tahunKeluar`}
          label="Tahun keluar *"
          variant="outlined"
          name={`${prefix}tahunKeluar`}
          value={kerja.tahunKeluar}
          onChange={handleChange}
          fullWidth
          helperText={errorMessage.tahunKeluar}
        />
      </div>

      <TextField
        error={errorMessage.deskripsiPekerjaan.length > 0 ? true : false}
        id={`${prefix}_deskripsiPekerjaan`}
        label="Deskripsi Pekerjaan *"
        variant="outlined"
        name={`${prefix}deskripsiPekerjaan`}
        value={kerja.deskripsiPekerjaan}
        onChange={handleChange}
        fullWidth
        helperText={errorMessage.deskripsiPekerjaan}
      />
    </Paper>
  );
};
