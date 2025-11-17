"use client";
import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import StraightenIcon from "@mui/icons-material/Straighten"; 
import CompareArrowsIcon from "@mui/icons-material/CompareArrows"; 
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CompressIcon from "@mui/icons-material/Compress"; 

const SpecificationSection: React.FC = () => {
  const specs = [
    {
      icon: <StraightenIcon sx={{ color: "#9C27B0", fontSize: 24 }} />,
      label: "Length",
      value: "20 ft",
    },
    {
      icon: <CompareArrowsIcon sx={{ color: "#9C27B0", fontSize: 24 }} />,
      label: "Width",
      value: "10 ft",
    },
    {
      icon: <FitnessCenterIcon sx={{ color: "#9C27B0", fontSize: 24 }} />,
      label: "Weight",
      value: "1,500 lbs",
    },
    {
      icon: <CompressIcon sx={{ color: "#9C27B0", fontSize: 24 }} />,
      label: "Capacity",
      value: "10,000 lbs",
    },
  ];

  return (
    <Box className="borderCard" sx={{ background: "#ffff", mt: 3 }}>
      <Typography variant="h5" mb={2}>
        Specification
      </Typography>

      <Grid container spacing={3}>
        {specs.map((item, index) => (
          <Grid size={{ xs: 12, md: 3 }} key={index}>
            <Stack direction="column" spacing={0.5}>
              <Stack direction="row" alignItems="center" spacing={1}>
                {item.icon}
                <Typography
                  variant="body1"
                  sx={{ color: "#757575", fontWeight: 500 }}
                >
                  {item.label}
                </Typography>
              </Stack>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#000", pl: 4 }}
              >
                {item.value}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SpecificationSection;
