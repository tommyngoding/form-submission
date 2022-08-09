export interface Pendidikan {
  namaSekolah: string;
}

export interface RiwayatPendidikan {
  daftarSekolah: Pendidikan[];
}

export interface PendidikanErrorMessage {
  namaSekolah: string;
}

export interface RiwayataPendidikanErrorMessage {
  daftarError: PendidikanErrorMessage[];
}
