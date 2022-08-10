import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div>
      <h1>Detail</h1>
      {data && (
        <div>
          <p>
            <b>Data Personal</b>
            <div>
              <div>Nama Lengkap : {data.detail.dataPersonal.namaLengkap}</div>
            </div>
          </p>
          <p>
            <b>Riwayat Pendidikan</b>
            {data.detail.riwayatPendidikan.daftarSekolah.map((sekolah) => (
              <div>
                <div>Nama Sekolah : {sekolah.namaSekolah}</div>
              </div>
            ))}
          </p>
          <p>
            <b>Pengalaman Kerja</b>
            {data.detail.pengalamanKerja.daftarKerja.map((kerja) => (
              <div>
                <div>Nama Perusahaan : {kerja.namaPerusahaan}</div>
              </div>
            ))}
          </p>
          <p>
            <b>Keahlian</b>
            {data.detail.daftarKeahlian.daftarKeahlian.map((skill) => (
              <div>
                <div>Nama Skill : {skill.nama}</div>
              </div>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};
