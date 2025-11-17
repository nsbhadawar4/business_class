"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  Stack,
  IconButton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import IMAGES from "@/app/assets/images";
import CostumeButton from "../button";
import SpecificationSection from "./specification";
import ClickableBox from "../router";
import Calendar from "./calendar";

const CarHaulerPage: React.FC = () => {
  const images = [
    IMAGES.Card1,
    IMAGES.Card2,
    IMAGES.Card3,
    IMAGES.Card1,
    IMAGES.Card2,
    IMAGES.Card3,
    IMAGES.Card1,
    IMAGES.Card2,
    IMAGES.Card3,
    IMAGES.Card1,
  ];

  const [selectedImage, setSelectedImage] = useState<string>(images[0].src);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const visibleCount = 5;
  const maxIndex = images.length - visibleCount;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);

  return (
    <Box>
      {/* Header */}
      <Box>
        <Typography variant="h1" fontSize={"26px"}>
          Car Hauler
        </Typography>

        <Stack direction="row" alignItems="center" spacing={0.5} mt={0.5}>
          <StarIcon sx={{ color: "#fbc02d", fontSize: 18 }} />
          <Typography variant="h6">4.9 (127 reviews)</Typography>
        </Stack>
      </Box>

      <Grid container spacing={3} mt={2}>
        {/* Left side images */}
        <Grid size={{ xs: 12, md: 8.5 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 400,
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <Image
              src={selectedImage}
              alt="Main"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          {/* Thumbnail images with navigation */}
          <Stack direction="row" alignItems="center" spacing={1.5} mt={2}>
            {/* <IconButton
              onClick={handlePrev}
              disabled={currentIndex === 0}
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                "&:hover": { backgroundColor: "#eee" },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton> */}
            <Stack direction="row" spacing={1.5} sx={{ overflow: "hidden" }}>
              {visibleImages.map((img, index) => (
                <Box
                  key={index + currentIndex}
                  sx={{
                    width: 166,
                    height: 100,
                    borderRadius: 2,
                    overflow: "hidden",
                    cursor: "pointer",
                    border:
                      selectedImage === img.src
                        ? "2px solid black"
                        : "1px solid #ccc",
                    transition: "0.3s",
                    "&:hover": { border: "2px solid black" },
                  }}
                  onClick={() => setSelectedImage(img.src)}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index}`}
                    width={166}
                    height={100}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Stack>
            {/* <IconButton
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                "&:hover": { backgroundColor: "#eee" },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton> */}
          </Stack>

          {/* ABOUT */}
          <Box mt={3}>
            <Typography variant="h5">About</Typography>
            <Typography variant="h6" sx={{ mt: 1, fontWeight: 400 }}>
              This car hauler is perfect for transporting vehicles safely and
              securely. With its sturdy construction and ample space, you can
              trust that your vehicle will arrive at its destination in
              excellent condition. Whether you're moving cars for personal or
              commercial purposes, this hauler is designed to meet your needs.
            </Typography>
          </Box>

          {/* FEATURES */}
          <Box mt={3}>
            <Typography variant="h5">Features</Typography>
            <Stack direction={"row"} spacing={1} mt={1}>
              <CostumeButton
                className="lavenderBtn"
                stylesRest={{
                  borderRadius: "100px !important",
                  height: "39px !important",
                  background: "#9B59B626 !important",
                  border: "1px solid #9B59B626 !important",
                }}
              >
                Hydraulic Lift
              </CostumeButton>
              <CostumeButton
                className="lavenderBtn"
                stylesRest={{
                  borderRadius: "100px !important",
                  height: "39px !important",
                  background: "#9B59B626 !important",
                  border: "1px solid #9B59B626 !important",
                }}
              >
                Anti-Slip Surface
              </CostumeButton>
              <CostumeButton
                className="lavenderBtn"
                stylesRest={{
                  borderRadius: "100px !important",
                  height: "39px !important",
                  background: "#9B59B626 !important",
                  border: "1px solid #9B59B626 !important",
                }}
              >
                LED Lights
              </CostumeButton>
              <CostumeButton
                className="lavenderBtn"
                stylesRest={{
                  borderRadius: "100px !important",
                  height: "39px !important",
                  background: "#9B59B626 !important",
                  border: "1px solid #9B59B626 !important",
                }}
              >
                Dual Axle
              </CostumeButton>
            </Stack>
          </Box>
          {/* Specification */}
          <SpecificationSection />
          <Calendar/>
        </Grid>

        {/* Right side booking card */}
        <Grid size={{ xs: 12, md: 3.5 }}>
          <Box className="customCardShadow">
            <Typography variant="h2">
              $50
              <Typography
                component="span"
                variant="h6"
                color="text.secondary"
                sx={{ ml: 0.5 }}
              >
                per day
              </Typography>
            </Typography>

            <Box my={2}>
              <ClickableBox nextPageUrl="/booking-confirmed">
                <CostumeButton
                  className="customstepperBtn"
                  stylesRest={{ minWidth: "100% !important" }}
                >
                  Book Now
                </CostumeButton>
              </ClickableBox>
            </Box>

            <Typography variant="h6" sx={{ mt: 2, textAlign: "center" }}>
              Terms and conditions apply to all bookings.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarHaulerPage;
