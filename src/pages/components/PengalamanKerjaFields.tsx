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
    <>
      <label htmlFor={`${prefix}_namaperusahaan`}>Nama Perusahaan</label>
      <input
        type="text"
        id={`${prefix}_namaperusahaan`}
        name={`${prefix}nama_perusahaan`}
        value={kerja.namaPerusahaan}
        onChange={handleChange}
      />
      {errorMessage.namaPerusahaan.length > 0 && (
        <span>{errorMessage.namaPerusahaan}</span>
      )}
    </>
  );
};
