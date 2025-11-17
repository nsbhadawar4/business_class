import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { Phone, LocationOn } from "@mui/icons-material";
import RadioInputComponent from "@/app/components/custom-input/radioInput";
import IMAGES from "@/app/assets/images";
import CheckboxInputComponent from "@/app/components/custom-input/checkboxInput";

const Step4: React.FC = () => {
  const paymentOptions = [
    {
      value: "cash",
      label: "Cash",
      image: IMAGES.Cash1,
    },
    {
      value: "credit_card",
      label: "Credit / Debit card",
      image: IMAGES.Cash2,
    },
  ];
  return (
    <Box>
      <Grid
        container
        rowSpacing={1.5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ pt: 3 }}
        alignItems={"flex-end"}
      >
        <Grid size={{ xs: 12, md: 12 }}>
          <Box>
            {/* Additional Notes Section */}
            <Box mb={2}>
              <Typography variant="h6" color="#000000">
                Additional Notes
              </Typography>
              <textarea
                className="textareaNotes"
                placeholder="Any special requirement or notes"
              ></textarea>
            </Box>

            {/* Delivery Address Section */}
            <Box className="borderCard">
              <Typography
                variant="h2"
                sx={{
                  marginBottom: 2,
                  borderBottom: "1px solid #C4C4C4",
                  paddingBottom: "8px",
                }}
              >
                Delivery Address
              </Typography>
              <Stack direction="row" spacing={2}>
                <Phone sx={{ color: "purple" }} />
                <Typography variant="h5">John Smith</Typography>
              </Stack>
              <Typography variant="h6" sx={{ ml: 5 }}>
                (415) 555-0136 | johnsmith@gmail.com
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 2, pb: 1 }}>
                <LocationOn sx={{ color: "purple" }} />
                <Typography variant="h5">
                  742 Evergreen Terrace, Springfield, IL 62704
                </Typography>
              </Stack>
            </Box>

            {/* Booking Summary Section */}
            <Box className="borderCard">
              <Typography
                variant="h2"
                sx={{
                  marginBottom: 2,
                  borderBottom: "1px solid #C4C4C4",
                  paddingBottom: "8px",
                }}
              >
                Booking Summary
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ marginBottom: 1 }}
              >
                <Typography variant="h6">Trailer</Typography>
                <Typography variant="h6">Enclosed Cargo Trailer</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ marginBottom: 1 }}
              >
                <Typography variant="h6">Daily Rate</Typography>
                <Typography variant="h6">$75/day</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ marginBottom: 1 }}
              >
                <Typography variant="h6">Duration</Typography>
                <Typography variant="h6">5 days</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ mt: 2, mb: 1, borderTop: "1px solid #C4C4C4", pt: 2 }}
              >
                <Typography variant="h2">Total</Typography>
                <Typography variant="h2">$375.00</Typography>
              </Stack>
            </Box>

            {/* Delivery Fee Section */}
            <Box className="borderCard">
              <Typography
                variant="h2"
                sx={{
                  marginBottom: 2,
                  borderBottom: "1px solid #C4C4C4",
                  paddingBottom: "8px",
                }}
              >
                Delivery Fee
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ marginBottom: 1 }}
              >
                <Typography variant="h6">Delivery Cost (Per mile)</Typography>
                <Typography variant="h6">$2/mile</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ marginBottom: 1 }}
              >
                <Typography variant="h6">
                  Total Miles (Round trip included)
                </Typography>
                <Typography variant="h6">20 miles</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ marginBottom: 1 }}
              >
                <Typography variant="h6">Fuel Surcharge</Typography>
                <Typography variant="h6">$5</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ mt: 2, mb: 1, borderTop: "1px solid #C4C4C4", pt: 2 }}
              >
                <Typography variant="h2">Total</Typography>
                <Typography variant="h2">$85.00</Typography>
              </Stack>
            </Box>
            <Box mb={2}>
              <CheckboxInputComponent label="Charge security deposit" />
            </Box>

            {/* Charge security deposit Section */}
            <Box className="borderCard" sx={{ height: "48px", padding: "0" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems={"center"}
              >
                <Typography variant="h6" sx={{color:"#000000", pl:2}}>RENT123456</Typography>
                <IconButton>
                  <Button variant="outlined" color="error" size="small">
                    Remove
                  </Button>
                </IconButton>
              </Stack>
            </Box>

            {/* Coupon Section */}
            <Box className="borderCard">
              <Typography
                variant="h2"
                sx={{
                  marginBottom: 2,
                  borderBottom: "1px solid #C4C4C4",
                  paddingBottom: "8px",
                }}
              >
                Coupon Applied Successfully 🎉
              </Typography>
            </Box>

            {/* Grand Total Section */}
            <Box className="borderCard">
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ marginBottom: 1 }}
              >
                <Typography variant="h6">Booking Summary</Typography>
                <Typography variant="h6">$375.00</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ marginBottom: 1 }}
              >
                <Typography variant="h6">Delivery Fee</Typography>
                <Typography variant="h6">$85.00</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ marginBottom: 1 }}
              >
                <Typography variant="h6">
                  Applied Coupon (RENT123456)
                </Typography>
                <Typography variant="h6">-$50.00</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ mt: 2, mb: 1, borderTop: "1px solid #C4C4C4", pt: 2 }}
              >
                <Typography variant="h2">Grand Total</Typography>
                <Typography variant="h2">$410.00</Typography>
              </Stack>
            </Box>

            {/* Payment Mode Section */}
            <Box className="borderCard">
              <Typography
                variant="h2"
                sx={{
                  marginBottom: 2,
                  borderBottom: "1px solid #C4C4C4",
                  paddingBottom: "8px",
                }}
              >
                Payment Mode
              </Typography>
              <Box>
                <RadioInputComponent
                  options={paymentOptions}
                  name="paymentMode"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Step4;
