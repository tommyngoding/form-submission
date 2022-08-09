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
    <>
      <label htmlFor={`${prefix}_namasekolah`}>Nama sekolah</label>
      <input
        type="text"
        id={`${prefix}_namasekolah`}
        name={`${prefix}nama_sekolah`}
        value={pendidikan.namaSekolah}
        onChange={handleChange}
      />
      {errorMessage.namaSekolah.length > 0 && (
        <span>{errorMessage.namaSekolah}</span>
      )}
    </>
  );
};
