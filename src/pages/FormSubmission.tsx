import React, { useState } from "react";
import { STEPS } from "../constants";
import {
  DataPersonal as DataPersonalType,
  DataPersonalErrorMessage,
} from "../entity/DataPersonal";
import {
  RiwayataPendidikanErrorMessage,
  RiwayatPendidikan as RiwayatPendidikanType,
} from "../entity/RiwayatPendidikan";
import {
  PengalamanKerjaErrorMessage,
  PengalamanKerja as PengalamanKerjaType,
} from "../entity/PengalamanKerja";
import {
  DaftarKeahlianErrorMessage,
  DaftarKeahlian as DaftarKeahlianType,
} from "../entity/Keahlian";
import { DataPersonal } from "./components/DataPersonal";
import { PengalamanKerja } from "./components/PengalamanKerja";
import { RiwayatPendidikan } from "./components/RiwayatPendidikan";
import { Keahlian } from "./components/Keahlian";

export const FormSubmission = () => {
  const { DATA_PERSONAL, RIWAYAT_PENDIDIKAN, PENGALAMAN_KERJA, KEAHLIAN } =
    STEPS;
  const [currentStep, setCurrentStep] = useState(DATA_PERSONAL);

  const [dataPersonalFields, setDataPersonalFields] =
    useState<DataPersonalType>({
      namaLengkap: "",
    });
  const [dataPersonalErMsg, setDataPersonalErMsg] =
    useState<DataPersonalErrorMessage>({
      namaLengkap: "",
    });

  const [riwayatPendidikanFields, setRiwayatPendidikanFields] =
    useState<RiwayatPendidikanType>({
      daftarSekolah: [
        {
          namaSekolah: "",
        },
        {
          namaSekolah: "",
        },
      ],
    });

  const [riwayatPendidikanErMsg, setRiwayatPendidikanErMsg] =
    useState<RiwayataPendidikanErrorMessage>({
      daftarError: [
        {
          namaSekolah: "",
        },
        {
          namaSekolah: "",
        },
      ],
    });

  const [pengalamanKerjaFields, setPengalamanKerjaFields] =
    useState<PengalamanKerjaType>({
      daftarKerja: [
        {
          namaPerusahaan: "",
        },
        {
          namaPerusahaan: "",
        },
      ],
    });

  const [pengalamanKerjaErMsg, setPengalamanKerjaErMsg] =
    useState<PengalamanKerjaErrorMessage>({
      daftarError: [
        {
          namaPerusahaan: "",
        },
        {
          namaPerusahaan: "",
        },
      ],
    });

  const [daftarKeahlianFields, setDaftarKeahlianFields] =
    useState<DaftarKeahlianType>({
      daftarKeahlian: [
        {
          nama: "",
        },
        {
          nama: "",
        },
      ],
    });

  const [daftarKeahlianErMsg, setDaftarKeahlianErMsg] =
    useState<DaftarKeahlianErrorMessage>({
      daftarError: [
        {
          nama: "",
        },
        {
          nama: "",
        },
      ],
    });

  const dataPersonalSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (dataPersonalFields.namaLengkap.length === 0) {
      setDataPersonalErMsg({
        ...dataPersonalErMsg,
        namaLengkap: "Nama lengkap tidak boleh kosong",
      });
    } else {
      setDataPersonalErMsg({
        ...dataPersonalErMsg,
        namaLengkap: "",
      });
      setCurrentStep(RIWAYAT_PENDIDIKAN);
    }
  };

  const riwayatPendidikanSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (riwayatPendidikanFields.daftarSekolah[0].namaSekolah.length === 0) {
      setRiwayatPendidikanErMsg({
        ...riwayatPendidikanErMsg,
        daftarError: [
          {
            namaSekolah: "Nama sekolah tidak boleh kosong",
          },
          {
            namaSekolah: "",
          },
        ],
      });
    } else {
      setRiwayatPendidikanErMsg({
        ...riwayatPendidikanErMsg,
        daftarError: [
          {
            namaSekolah: "",
          },
          {
            namaSekolah: "",
          },
        ],
      });
      setCurrentStep(PENGALAMAN_KERJA);
    }
  };

  const dataPersonalHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDataPersonalFields({
      ...dataPersonalFields,
      namaLengkap: e.currentTarget.value,
    });
  };

  const riwayatPendidikanHandleChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setRiwayatPendidikanFields({
      ...riwayatPendidikanFields,
      daftarSekolah: [
        {
          namaSekolah: e.currentTarget.value,
        },
        {
          namaSekolah: "",
        },
      ],
    });
  };

  const pengalamanKerjaSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (pengalamanKerjaFields.daftarKerja[0].namaPerusahaan.length === 0) {
      setPengalamanKerjaErMsg({
        ...pengalamanKerjaErMsg,
        daftarError: [
          {
            namaPerusahaan: "Nama perusahaan tidak boleh kosong",
          },
          {
            namaPerusahaan: "",
          },
        ],
      });
    } else {
      setPengalamanKerjaErMsg({
        ...pengalamanKerjaErMsg,
        daftarError: [
          {
            namaPerusahaan: "",
          },
          {
            namaPerusahaan: "",
          },
        ],
      });
      setCurrentStep(KEAHLIAN);
    }
  };

  const pengalamanKerjaHandleChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setPengalamanKerjaFields({
      ...pengalamanKerjaFields,
      daftarKerja: [
        {
          namaPerusahaan: e.currentTarget.value,
        },
        {
          namaPerusahaan: "",
        },
      ],
    });
  };

  const daftarKeahlianSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (daftarKeahlianFields.daftarKeahlian[0].nama.length === 0) {
      setDaftarKeahlianErMsg({
        ...daftarKeahlianErMsg,
        daftarError: [
          {
            nama: "Nama skill tidak boleh kosong",
          },
          {
            nama: "",
          },
        ],
      });
    } else {
      setDaftarKeahlianErMsg({
        ...daftarKeahlianErMsg,
        daftarError: [
          {
            nama: "",
          },
          {
            nama: "",
          },
        ],
      });
      // setCurrentStep(KEAHLIAN);
    }
  };

  const daftarKeahlianHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDaftarKeahlianFields({
      ...daftarKeahlianFields,
      daftarKeahlian: [
        {
          nama: e.currentTarget.value,
        },
        {
          nama: "",
        },
      ],
    });
  };

  return (
    <>
      <h1>Form submission</h1>
      {(() => {
        switch (currentStep) {
          case RIWAYAT_PENDIDIKAN:
            return (
              <RiwayatPendidikan
                handleSubmit={riwayatPendidikanSubmit}
                fields={riwayatPendidikanFields}
                errorMessage={riwayatPendidikanErMsg}
                handleChange={riwayatPendidikanHandleChange}
              />
            );
          case PENGALAMAN_KERJA:
            return (
              <PengalamanKerja
                handleSubmit={pengalamanKerjaSubmit}
                fields={pengalamanKerjaFields}
                errorMessage={pengalamanKerjaErMsg}
                handleChange={pengalamanKerjaHandleChange}
              />
            );
          case KEAHLIAN:
            return (
              <Keahlian
                handleSubmit={daftarKeahlianSubmit}
                fields={daftarKeahlianFields}
                errorMessage={daftarKeahlianErMsg}
                handleChange={daftarKeahlianHandleChange}
              />
            );
          default:
            return (
              <DataPersonal
                handleSubmit={dataPersonalSubmit}
                fields={dataPersonalFields}
                errorMessage={dataPersonalErMsg}
                handleChange={dataPersonalHandleChange}
              />
            );
        }
      })()}
    </>
  );
};
