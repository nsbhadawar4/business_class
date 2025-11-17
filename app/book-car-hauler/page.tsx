"use client";
import { useState } from "react";
import { Box, Card, Typography, LinearProgress, Stack } from "@mui/material";
import CostumeButton from "@/app/components/button";
import ModalComponent from "@/app/components/dailog";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Step1 from "./stepper1/step1";
import Step2 from "./stepper2/step2";
import Step3 from "./stepper3/step3";
import Step4 from "./stepper4/step4";
import ClickableBox from "../components/router";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

const AddBorrowers = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [successModal, setSuccessModal] = useState(false);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setSuccessModal(true);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const handleCloseModal = () => setSuccessModal(false);

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      default:
        return null;
    }
  };

  const progress = ((activeStep + 1) / steps.length) * 100;

  return (
    <>
      <Box className="pageColor">
        <Card
          sx={{
            borderRadius: "16px",
            boxShadow: "0px 4px 12px 0px #0000001A",
            p: 3,
            border: "1px solid #A1A1AA4D",
          }}
        >
          <>
            {/* Header */}
            <ClickableBox nextPageUrl="/">
              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <ArrowBackIcon />
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "22px",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  // onClick={handlePrev}
                >
                  Book Car Hauler
                </Typography>
              </Stack>
            </ClickableBox>

            <Stack direction="row" justifyContent="space-between">
              {/* Step indicator */}
              <Typography variant="h5" sx={{ color: "#0A0A0A" }}>{`Step ${
                activeStep + 1
              } of ${steps.length}`}</Typography>

              {/* Step dots */}
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                mb={3}
              >
                {steps.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor:
                        index === activeStep
                          ? "#9B59B6"
                          : index < activeStep
                          ? "#C4C4C4"
                          : "#E5E7EB",
                      transition: "all 0.3s",
                    }}
                  />
                ))}
              </Stack>
            </Stack>

            {/* Progress bar */}
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 8,
                borderRadius: 3,
                mb: 4,
                backgroundColor: "#C4C4C4",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#0C1518",
                },
              }}
            />

            {/* Step content */}
            <Box sx={{ mb: 4 }}>{renderStepContent(activeStep)}</Box>
            {/* Buttons */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {/* Hide Back button on first step */}
              {activeStep !== 0 && (
                <CostumeButton
                  stylesRest={{
                    background: "#0C1518 !important",
                  }}
                  className="customstepperBtn"
                  onClick={handlePrev}
                >
                  Back
                </CostumeButton>
              )}

              <Box sx={{ flexGrow: 1 }} />

              <CostumeButton className="customstepperBtn" onClick={handleNext}>
                {activeStep === steps.length - 1 ? (
                  <ClickableBox nextPageUrl="/booking-confirmed">
                    Finish
                  </ClickableBox>
                ) : (
                  "Continue"
                )}
              </CostumeButton>
            </Stack>
          </>
        </Card>
      </Box>

      {/* Success Modal */}
      {/* <ModalComponent
        title={"Success!"}
        open={successModal}
        onClose={handleCloseModal}
        modalCloseIcon={true}
      >
        <Box
          className="miniModal"
          sx={{ width: "500px !important", height: "70px !important" }}
        >
          <Stack spacing={2} sx={{ textAlign: "center" }}>
            <Typography variant="h1">Book Car Hauler successfully!</Typography>
          </Stack>
        </Box>
      </ModalComponent> */}
    </>
  );
};

AddBorrowers.showHeader = true;
export default AddBorrowers;
