import { DataPersonal, DataPersonalErrorMessage } from "./entity/DataPersonal";
import { Pendidikan, PendidikanErrorMessage } from "./entity/RiwayatPendidikan";

export const validateDataPersonal = (
  dataPersonal: DataPersonal
): DataPersonalErrorMessage => {
  let erMsg: DataPersonalErrorMessage = {
    namaLengkap: "",
    nomorTelepon: "",
    alamat: "",
    email: "",
  };

  if (dataPersonal.namaLengkap.length === 0) {
    erMsg.namaLengkap = "Nama lengkap tidak boleh kosong";
  }
  if (dataPersonal.alamat.length === 0) {
    erMsg.alamat = "Alamat tidak boleh kosong";
  }
  if (dataPersonal.nomorTelepon.length === 0) {
    erMsg.nomorTelepon = "Nomor telepon tidak boleh kosong";
  }
  if (dataPersonal.email.length === 0) {
    erMsg.email = "Email tidak boleh kosong";
  }

  return erMsg;
};

export const validatePendidikan = (
  pendidikan: Pendidikan
): PendidikanErrorMessage => {
  let erMsg: PendidikanErrorMessage = {
    namaSekolah: "",
    jenjang: "",
    ipk: "",
    tahunMasuk: "",
    tahunLulus: "",
    jurusan: "",
  };

  if (pendidikan.namaSekolah.length === 0) {
    erMsg.namaSekolah = "Nama sekolah tidak boleh kosong";
  }
  if (pendidikan.jenjang.length === 0) {
    erMsg.jenjang = "Jenjang tidak boleh kosong";
  }
  if (pendidikan.jurusan.length === 0) {
    erMsg.jurusan = "Jurusan tidak boleh kosong";
  }

  if (pendidikan.ipk.length === 0) {
    erMsg.ipk = "IPK tidak boleh kosong";
  }
  if (pendidikan.tahunMasuk.length === 0) {
    erMsg.tahunMasuk = "Tahun masuk tidak boleh kosong";
  }
  if (pendidikan.tahunLulus.length === 0) {
    erMsg.tahunLulus = "Tahun lulus tidak boleh kosong";
  }

  return erMsg;
};

export const noErrorMessage = (erMsgs: Object): boolean => {
  const found = Object.entries(erMsgs).filter((erMsg) => erMsg[1].length > 0);
  if (found.length === 0) {
    return true;
  }
  return false;
};
