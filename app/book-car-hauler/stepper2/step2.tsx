import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  FormGroup,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { DateInput, SelectInput } from "@/app/components/custom-input";
import Image from "next/image";
import IMAGES from "@/app/assets/images";
import CostumeButton from "@/app/components/button";
import SVG from "@/app/assets/svg";
import SVGICON from "@/app/assets/svg/icon";

const Step2: React.FC = () => {
  const gridItems = [
    {
      xs: 12,
      md: 12,
      component: (
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Select Dates
        </Typography>
      ),
    },
    {
      xs: 12,
      md: 6,
      component: (
        <FormGroup>
          <SelectInput
            label="Rent Type"
            placeholder="Select type"
            options={[
              { value: "Select", label: "Select" },
              { value: "Select 1", label: "Select 1" },
            ]}
          />
        </FormGroup>
      ),
    },
    {
      xs: 12,
      md: 6,
      component: <FormGroup></FormGroup>,
    },
    {
      xs: 12,
      md: 6,
      component: (
        <FormGroup>
          <DateInput label="start date" />
        </FormGroup>
      ),
    },
    {
      xs: 12,
      md: 6,
      component: (
        <FormGroup>
          <DateInput label="end date" />
        </FormGroup>
      ),
    },
  ];

  return (
    <Box>
      <Box sx={{ mt: 4 }}>
        {/* Section Title */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, mb: 2, color: "#000" }}
        >
          Selected Product
        </Typography>

        {/* Product Card */}
        <Box
          sx={{
            borderRadius: 2,
            border: "1px solid #E5E7EB",
            boxShadow: "none",
          }}
        >
          <Stack direction="row" spacing={2}>
            {/* Product Image */}
            <Box
              sx={{
                width: 220,
                height: 176,
                overflow: "hidden",
                flexShrink: 0,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
              }}
            >
              <Image
                src={IMAGES.Card1} // 🖼️ Replace with your image path
                alt="Flatbed Trailer"
                width={200}
                height={120}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>

            {/* Product Details */}
            <Box sx={{ flexGrow: 1, py: 1 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Flatbed Trailer
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#6B7280",
                  mt: 0.5,
                  mb: 1.5,
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Quam sed velit egestas
                tincidunt consequat. Donec duis lectus
              </Typography>

              {/* Chips Section */}
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <CostumeButton
                  className="outlineBtn"
                  startIcon={<SVGICON.Icon1 />}
                >
                  Utility Trailer
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
                  Cap: 200 kg
                </CostumeButton>
                <CostumeButton className="outlineBtn">+1 more</CostumeButton>
              </Stack>

              <Divider sx={{ my: 2 }} />

              {/* Price */}
              <Typography variant="subtitle1" fontWeight={600}>
                $45
                <Typography
                  component="span"
                  sx={{ fontSize: "0.875rem", color: "#6B7280", ml: 0.5 }}
                >
                  /day
                </Typography>
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Grid
        container
        rowSpacing={1.5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ pt: 3 }}
        alignItems={"end"}
      >
        {gridItems.map((item, index) => (
          <Grid size={{ xs: item.xs, md: item.md }} key={index}>
            {item.component}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Step2;
