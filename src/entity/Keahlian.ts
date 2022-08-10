export interface Keahlian {
  nama: string;
}

export interface DaftarKeahlian {
  daftarKeahlian: Keahlian[];
}

export interface KeahlianErrorMessage {
  nama: string;
}

export interface DaftarKeahlianErrorMessage {
  daftarError: KeahlianErrorMessage[];
}
