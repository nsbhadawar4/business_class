"use client";
import React from "react";
import Image from "next/image";
import SVGICON from "../assets/svg/icon";
import IMAGES from "../assets/images";
import CostumeButton from "../components/button";
import BookingFooter from "../components/booking-confirmed/footer";
import BookingHeader from "../components/booking-confirmed/header";
import { Box, Typography, Divider, Grid, Stack } from "@mui/material";
import { Download, CheckCircle, DateRange, Star } from "@mui/icons-material";

const BookingConfirmed: React.FC = () => {
  return (
    <Box sx={{ maxWidth: "1000px", margin: "30px auto" }}>
      {/* HEADER */}
      <BookingHeader />

      {/* main card  */}
      <Box className="customCardShadow" sx={{ p: 3 }}>
        {/*  Invoice Details */}
        <Stack
          // px={1}
          mb={5}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <SVGICON.Car />
            <Typography variant="h5" fontWeight={600}>
              Invoice Details
            </Typography>
          </Stack>
          <CostumeButton
            className="outlineBtn"
            startIcon={<Download />}
            stylesRest={{ fontSize: "14px !important" }}
          >
            Download Invoice
          </CostumeButton>
        </Stack>

        {/* Booking ID */}
        <Stack
          mb={3}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <SVGICON.Cube />
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              Booking ID
            </Typography>
          </Stack>
          <CostumeButton className="outlineBtn">BK-2024-001234</CostumeButton>
        </Stack>

        {/* Customer Information */}
        <Stack
          mb={3}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <SVGICON.User />
            <Typography variant="h5">Customer Information</Typography>
          </Stack>
        </Stack>

        {/* Booking ID */}
        <Grid container spacing={2} mb={3}>
          {/* Customer Info */}
          <Grid size={{ xs: 12, md: 12 }}>
            <Stack direction={"row"} justifyContent={"space-between"} mb={0.8}>
              <Typography variant="h6">Name</Typography>
              <Typography variant="h5">John Smith</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"} mb={0.8}>
              <Typography variant="h6">Email</Typography>
              <Typography variant="h5">john.smith@email.com</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="h6">Phone Number</Typography>
              <Typography variant="h5">(312) 555-0198</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />

        {/* Vehicle Details */}
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, md: 12 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="self-start"
              flexWrap="wrap"
              sx={{ gap: 2 }}
            >
              {/* Left Section: Image + Details */}
              <Stack direction="row" alignItems="center" spacing={2}>
                <Image
                  src={IMAGES.Card1}
                  alt="Car Hauler"
                  width={122}
                  height={92}
                  style={{ borderRadius: "8px" }}
                />
                <Box>
                  <Typography variant="h5" fontWeight={600}>
                    Car Hauler
                  </Typography>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Star sx={{ color: "#fbc02d", fontSize: 18, mr: 0.5 }} />
                    <Typography variant="h6">4.9 (127 reviews)</Typography>
                  </Box>

                  {/* Trailer Features */}
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <CostumeButton
                      className="outlineBtn"
                      startIcon={<SVGICON.Icon1 />}
                    >
                      Dump Trailer
                    </CostumeButton>
                    <CostumeButton
                      className="outlineBtn"
                      startIcon={<SVGICON.Icon2 />}
                    >
                      Enclosed
                    </CostumeButton>
                    <CostumeButton
                      className="outlineBtn"
                      startIcon={<SVGICON.Icon3 />}
                    >
                      Cap: 500 kg
                    </CostumeButton>
                  </Stack>
                </Box>
              </Stack>

              {/* Right button: Date */}
              <CostumeButton className="outlineBtn">
                16/01/2025 - 20/12/2025
              </CostumeButton>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />

        {/* Delivery Location */}
        <Box mb={2}>
          <Typography
            variant="h5"
            mb={1}
            sx={{ color: "#008236", display: "flex" }}
          >
            <CheckCircle sx={{ fontSize: 24, mr: 1, color: "#008236" }} />
            Delivery Location
          </Typography>
          <Box ml={4}>
            <Box display="flex" alignItems="center" mb={0.5}>
              <Typography variant="h6">
                742 Evergreen Terrace, Springfield, IL 62704, USA
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <DateRange sx={{ color: "gray", fontSize: 18, mr: 1 }} />
              <Typography variant="h6">January 16, 2025</Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Price Breakdown */}
        <Box mb={2}>
          <Typography variant="h5" fontWeight={600} mb={1}>
            Price Breakdown
          </Typography>

          <Box display="flex" justifyContent="space-between" mb={0.5}>
            <Typography variant="h6">Booking Summary</Typography>
            <Typography variant="h5">$375.00</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" mb={0.5}>
            <Typography variant="h6">Delivery Fee</Typography>
            <Typography variant="h5">$85.00</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" mb={0.5}>
            <Typography variant="h6">Applied Coupon (RENT123456)</Typography>
            <Typography variant="h5">-$50.00</Typography>
          </Box>

          <Divider sx={{ my: 1.5 }} />
          {/* total */}
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h2">Total Amount</Typography>
            <Typography variant="h2" fontWeight={700}>
              $410.00
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 3 }} />
      </Box>

      {/* Footer Buttons */}
      <BookingFooter />
    </Box>
  );
};

export default BookingConfirmed;
