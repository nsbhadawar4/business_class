import React from "react";
import { Box, FormGroup, Grid } from "@mui/material";
import { LabeledInput } from "@/app/components/custom-input";

const Step1: React.FC = () => {
  const gridItems = [
    {
      xs: 12,
      md: 6,
      component: (
        <FormGroup>
          <LabeledInput label="Full Name" Placeholder="Full Name" />
        </FormGroup>
      ),
    },
    {
      xs: 12,
      md: 6,
      component: (
        <FormGroup>
          <LabeledInput label="Email Address" Placeholder="Email Address" />
        </FormGroup>
      ),
    },
    {
      xs: 12,
      md: 6,
      component: (
        <FormGroup>
          <LabeledInput
            label="Phone Number"
            Placeholder="Phone Number"
            type="number"
          />
        </FormGroup>
      ),
    },
  ];

  return (
    <Box>
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

export default Step1;
