export interface Pendidikan {
  namaSekolah: string;
  jurusan: string;
  ipk: string;
  jenjang: string;
  tahunMasuk: string;
  tahunLulus: string;
}

export interface RiwayatPendidikan {
  daftarSekolah: Pendidikan[];
}

export interface PendidikanErrorMessage {
  namaSekolah: string;
  jurusan: string;
  ipk: string;
  jenjang: string;
  tahunMasuk: string;
  tahunLulus: string;
}

export interface RiwayataPendidikanErrorMessage {
  daftarError: PendidikanErrorMessage[];
}
