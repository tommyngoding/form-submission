import { Button, Container, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LOCALSTORAGE_KEYNAME } from "../constants";
import { DataPersonal } from "../entity/DataPersonal";
import { DaftarKeahlian } from "../entity/Keahlian";
import { PengalamanKerja } from "../entity/PengalamanKerja";
import { RiwayatPendidikan } from "../entity/RiwayatPendidikan";
import { Submission } from "../entity/Submission";

interface dataType {
  detail: {
    daftarKeahlian: DaftarKeahlian;
    dataPersonal: DataPersonal;
    pengalamanKerja: PengalamanKerja;
    riwayatPendidikan: RiwayatPendidikan;
  };
  summary: Submission;
}

export const Detail = () => {
  let { submissionId } = useParams();

  const [data, setData] = useState<dataType | null>(null);

  useEffect(() => {
    const dataLocal = localStorage.getItem(LOCALSTORAGE_KEYNAME);
    if (dataLocal) {
      const dataParsed = JSON.parse(dataLocal);
      console.log(dataParsed);
      const filtered = dataParsed.filter(
        (item: any) => item.summary.id === parseInt(submissionId as string)
      );
      if (filtered.length > 0) {
        setData(filtered[0]);
      }
    }
  }, []);
  console.log(submissionId);

  return (
    <Container className="detail">
      <Paper style={{ padding: "20px" }}>
        {data && (
          <div>
            <div className="use-bottom-line rata-kiri">
              <h1>{data.detail.dataPersonal.namaLengkap}</h1>
              <h3>{data.detail.pengalamanKerja.daftarKerja[0].jabatan}</h3>
              <h3>
                {data.detail.pengalamanKerja.daftarKerja[0].namaPerusahaan}
              </h3>
              <div
                className="rata-kiri"
                style={{
                  margin: "20px 0",
                }}
              >
                <div>
                  {data.detail.dataPersonal.nomorTelepon} |{" "}
                  {data.detail.dataPersonal.email}
                </div>
                <div>{data.detail.dataPersonal.alamat}</div>
              </div>
            </div>

            <div className="use-bottom-line rata-kiri">
              <h4>Pengalaman Kerja</h4>
              {data.detail.pengalamanKerja.daftarKerja
                .filter((kerja) => kerja.namaPerusahaan.length > 0)
                .map((kerja) => (
                  <div className="rata-kiri">
                    <h3>{kerja.jabatan}</h3>
                    <p>{kerja.namaPerusahaan}</p>
                    <p>
                      {kerja.tahunMasuk} - {kerja.tahunKeluar}
                    </p>
                    <p>{kerja.deskripsiPekerjaan}</p>
                  </div>
                ))}
            </div>

            <div className="use-bottom-line rata-kiri">
              <h4>Riwayat Pendidikan</h4>
              {data.detail.riwayatPendidikan.daftarSekolah
                .filter((sekolah) => sekolah.namaSekolah.length > 0)
                .map((sekolah) => (
                  <div className="rata-kiri">
                    <h3>{sekolah.namaSekolah}</h3>
                    <p>
                      {sekolah.jenjang} - {sekolah.jurusan}
                    </p>
                    <p>
                      {sekolah.tahunMasuk} - {sekolah.tahunLulus}
                    </p>
                    <p>IPK : {sekolah.ipk}</p>
                  </div>
                ))}
            </div>

            <div className="use-bottom-line rata-kiri">
              <h4>Keahlian</h4>
              <p>
                {data.detail.daftarKeahlian.daftarKeahlian
                  .filter((skill) => skill.nama.length > 0)
                  .map((skill) => (
                    <span>{skill.nama} , </span>
                  ))}
              </p>
            </div>
          </div>
        )}
        <div className="rata-kiri" style={{ padding: "20px 0" }}>
          <Link to="/">
            <Button>{` < Back to Home`}</Button>
          </Link>
        </div>
      </Paper>
    </Container>
  );
};
