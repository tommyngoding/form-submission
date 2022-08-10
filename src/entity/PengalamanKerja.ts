export interface Kerja {
  namaPerusahaan: string;
}

export interface PengalamanKerja {
  daftarKerja: Kerja[];
}

export interface KerjaErrorMessage {
  namaPerusahaan: string;
}

export interface PengalamanKerjaErrorMessage {
  daftarError: KerjaErrorMessage[];
}
