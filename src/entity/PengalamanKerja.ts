export interface Kerja {
  namaPerusahaan: string;
  jabatan: string;
  tahunMasuk: string;
  tahunKeluar: string;
  deskripsiPekerjaan: string;
}

export interface PengalamanKerja {
  daftarKerja: Kerja[];
}

export interface KerjaErrorMessage {
  namaPerusahaan: string;
  jabatan: string;
  tahunMasuk: string;
  tahunKeluar: string;
  deskripsiPekerjaan: string;
}

export interface PengalamanKerjaErrorMessage {
  daftarError: KerjaErrorMessage[];
}
