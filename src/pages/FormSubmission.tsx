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
import { DataPersonal } from "./components/DataPersonal";
import { RiwayatPendidikan } from "./components/RiwayatPendidikan";

export const FormSubmission = () => {
  const { DATA_PERSONAL, RIWAYAT_PENDIDIKAN } = STEPS;
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
      // setCurrentStep(RIWAYAT_PENDIDIKAN);
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
    console.log("eeee...");
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
