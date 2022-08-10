import React, { useState } from "react";
import { LOCALSTORAGE_KEYNAME, STEPS } from "../constants";
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
import { SuccessStep } from "./components/SuccessStep";
import { FormStepper } from "./components/FormStepper";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  noErrorMessage,
  validateDataPersonal,
  validatePendidikan,
} from "../validator";

export const FormSubmission = () => {
  const {
    DATA_PERSONAL,
    RIWAYAT_PENDIDIKAN,
    PENGALAMAN_KERJA,
    KEAHLIAN,
    SUCCESSSTEP,
  } = STEPS;
  let navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(DATA_PERSONAL);
  const [currentIndexStep, setCurrentIndexStep] = useState(0);

  const [dataPersonalFields, setDataPersonalFields] =
    useState<DataPersonalType>({
      namaLengkap: "",
      nomorTelepon: "",
      alamat: "",
      email: "",
    });
  const [dataPersonalErMsg, setDataPersonalErMsg] =
    useState<DataPersonalErrorMessage>({
      namaLengkap: "",
      nomorTelepon: "",
      alamat: "",
      email: "",
    });

  const [riwayatPendidikanFields, setRiwayatPendidikanFields] =
    useState<RiwayatPendidikanType>({
      daftarSekolah: [
        {
          namaSekolah: "",
          jenjang: "",
          ipk: "",
          tahunMasuk: "",
          tahunLulus: "",
          jurusan: "",
        },
        {
          namaSekolah: "",
          jenjang: "",
          ipk: "",
          tahunMasuk: "",
          tahunLulus: "",
          jurusan: "",
        },
      ],
    });

  const [riwayatPendidikanErMsg, setRiwayatPendidikanErMsg] =
    useState<RiwayataPendidikanErrorMessage>({
      daftarError: [
        {
          namaSekolah: "",
          jenjang: "",
          ipk: "",
          tahunMasuk: "",
          tahunLulus: "",
          jurusan: "",
        },
        {
          namaSekolah: "",
          jenjang: "",
          ipk: "",
          tahunMasuk: "",
          tahunLulus: "",
          jurusan: "",
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

    const erMsg = validateDataPersonal(dataPersonalFields);

    setDataPersonalErMsg(erMsg);

    if (noErrorMessage(erMsg)) {
      updateStep(RIWAYAT_PENDIDIKAN);
    }
  };

  const riwayatPendidikanSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const erMsg = validatePendidikan(riwayatPendidikanFields.daftarSekolah[0]);

    setRiwayatPendidikanErMsg({
      daftarError: [erMsg],
    });

    if (noErrorMessage(erMsg)) {
      updateStep(PENGALAMAN_KERJA);
    }
  };

  const dataPersonalHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDataPersonalFields({
      ...dataPersonalFields,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const riwayatPendidikanHandleChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    const name = e.currentTarget.name;
    let pos = name.search("first");
    let finalName = "";
    let indexData = -1;
    if (pos >= 0) {
      finalName = name.slice(5, name.length);
      indexData = 0;
    }

    if (indexData === 0) {
      setRiwayatPendidikanFields({
        ...riwayatPendidikanFields,
        daftarSekolah: [
          {
            ...riwayatPendidikanFields.daftarSekolah[0],
            [finalName]: e.currentTarget.value,
          },
          riwayatPendidikanFields.daftarSekolah[1],
        ],
      });
    }
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
      updateStep(KEAHLIAN);
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
      storeToLocal();

      updateStep(SUCCESSSTEP);
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

  const storeToLocal = () => {
    const dataLocal = localStorage.getItem(LOCALSTORAGE_KEYNAME);

    let saveData = [];
    if (dataLocal) {
      saveData = JSON.parse(dataLocal);
    }

    const newData = [
      {
        summary: {
          id: Date.now(),
          nama: dataPersonalFields.namaLengkap,
          alamat: "[dummy]",
        },
        detail: {
          dataPersonal: dataPersonalFields,
          riwayatPendidikan: riwayatPendidikanFields,
          pengalamanKerja: pengalamanKerjaFields,
          daftarKeahlian: daftarKeahlianFields,
        },
      },
    ];

    saveData = [...saveData, ...newData];

    localStorage.setItem(LOCALSTORAGE_KEYNAME, JSON.stringify(saveData));
  };

  const updateStep = (currentStep: string) => {
    setCurrentStep(currentStep);
    let indexStep = 0;
    if (currentStep === DATA_PERSONAL) {
      indexStep = 0;
    } else if (currentStep === RIWAYAT_PENDIDIKAN) {
      indexStep = 1;
    } else if (currentStep === PENGALAMAN_KERJA) {
      indexStep = 2;
    } else {
      indexStep = 3;
    }
    setCurrentIndexStep(indexStep);
  };

  return (
    <Container>
      <h1>Form submission</h1>
      <FormStepper currentStep={currentIndexStep} />
      {(() => {
        switch (currentStep) {
          case RIWAYAT_PENDIDIKAN:
            return (
              <RiwayatPendidikan
                handleSubmit={riwayatPendidikanSubmit}
                fields={riwayatPendidikanFields}
                errorMessage={riwayatPendidikanErMsg}
                handleChange={riwayatPendidikanHandleChange}
                handleBack={() => updateStep(DATA_PERSONAL)}
              />
            );
          case PENGALAMAN_KERJA:
            return (
              <PengalamanKerja
                handleSubmit={pengalamanKerjaSubmit}
                fields={pengalamanKerjaFields}
                errorMessage={pengalamanKerjaErMsg}
                handleChange={pengalamanKerjaHandleChange}
                handleBack={() => updateStep(RIWAYAT_PENDIDIKAN)}
              />
            );
          case KEAHLIAN:
            return (
              <Keahlian
                handleSubmit={daftarKeahlianSubmit}
                fields={daftarKeahlianFields}
                errorMessage={daftarKeahlianErMsg}
                handleChange={daftarKeahlianHandleChange}
                handleBack={() => updateStep(PENGALAMAN_KERJA)}
              />
            );
          case SUCCESSSTEP:
            return <SuccessStep />;
          default:
            return (
              <DataPersonal
                handleSubmit={dataPersonalSubmit}
                fields={dataPersonalFields}
                errorMessage={dataPersonalErMsg}
                handleChange={dataPersonalHandleChange}
                handleBack={() => navigate("/")}
              />
            );
        }
      })()}
    </Container>
  );
};
