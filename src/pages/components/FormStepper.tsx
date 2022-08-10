import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Data Personal",
  "Riwayat Pendidikan",
  "Pengalaman Kerja",
  "Keahlian",
];

export const FormStepper = ({ currentStep }: { currentStep: number }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
