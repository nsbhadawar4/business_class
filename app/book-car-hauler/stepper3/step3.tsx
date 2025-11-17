import React from "react";
import {
  Box,
  Button,
  FormGroup,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CustomTabs from "@/app/components/tabs/tab";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CostumeButton from "@/app/components/button";
import { LabeledInput, SelectInput } from "@/app/components/custom-input";
import CheckboxInputComponent from "@/app/components/custom-input/checkboxInput";

const Step3: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontSize: "18px", marginBottom: 2 }}>
        Delivery Fee
      </Typography>
      <CustomTabs
        tabLabels={["Customer pick up", "Delivery to customer"]}
        tabContents={[
          <Grid
            container
            rowSpacing={1.5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ pt: 3 }}
            key="1"
          >
            <Grid size={{ xs: 12, md: 12 }}>
              <Typography variant="h5" sx={{ fontSize: "18px" }}>
                Pick up Location for Customer
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <Box
                sx={{
                  padding: 2,
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #A1A1AA4D",
                  borderRadius: 2,
                  justifyContent: "space-between",
                }}
              >
                <Stack direction="row">
                  <LocationOnIcon sx={{ color: "purple", marginRight: 2 }} />
                  <Box>
                    <Typography variant="h5">Tony Trailer Warehouse</Typography>
                    <Typography variant="h6" mt={1}>
                      1234 Elm Street, Apt 5B, Chicago, IL 60611, USA
                    </Typography>
                  </Box>
                </Stack>
                <CostumeButton
                  className="customstepperBtn"
                  stylesRest={{
                    background: "#fff !important",
                    color: "#0C1518 !important",
                  }}
                >
                  Get Directions
                </CostumeButton>
              </Box>
            </Grid>
          </Grid>,
          <Grid
            container
            rowSpacing={1.5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ pt: 3 }}
            key="2"
          >
            <Grid size={{ xs: 12, md: 12 }}>
              <Typography variant="h5" sx={{ fontSize: "18px" }}>
                Select Delivery Address
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormGroup>
                <SelectInput
                  label="Country"
                  placeholder="Select Country"
                  options={[
                    { value: "India", label: "India" },
                    { value: "USA", label: "USA" },
                  ]}
                />
              </FormGroup>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormGroup>
                <SelectInput
                  label="State"
                  placeholder="Select State"
                  options={[
                    { value: "UP", label: "UP" },
                    { value: "MP", label: "MP" },
                  ]}
                />
              </FormGroup>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormGroup>
                <SelectInput
                  label="City"
                  placeholder="Select city"
                  options={[
                    { value: "Agra", label: "Agra" },
                    { value: "Gwalior", label: "Gwalior" },
                  ]}
                />
              </FormGroup>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormGroup>
                <LabeledInput
                  label="ZIP Code"
                  placeholder="Enter Code"
                  type="number"
                />
              </FormGroup>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <FormGroup>
                <LabeledInput label="Address" placeholder="Enter Address" />
              </FormGroup>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <Typography variant="h5" sx={{ fontSize: "18px", my: 2 }}>
                Delivery Cost
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <CustomTabs
                restStyleDefault={{ width: "300px" }}
                tabLabels={["Standard: $20", "Per Mile: $2"]}
                tabContents={[
                  <Grid
                    container
                    rowSpacing={1.5}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{ pt: 3 }}
                    key="1"
                  >
                    <Grid size={{ xs: 12, md: 12 }}>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontSize: "18px",
                            marginBottom: 2,
                            textAlign: "center",
                          }}
                        >
                          coming soon...
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>,
                  <Grid
                    container
                    rowSpacing={1.5}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{ pt: 3 }}
                    key="2"
                  >
                    <Grid size={{ xs: 12, md: 6 }}>
                      <FormGroup>
                        <LabeledInput
                          label="Total Miles"
                          placeholder="Total Miles"
                          type="number"
                        />
                      </FormGroup>
                      <CheckboxInputComponent label="Include round trip" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <FormGroup>
                        <LabeledInput
                          label="Fuel Surcharge"
                          placeholder="Enter Amount"
                          type="number"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <FormGroup>
                        <LabeledInput
                          label="Total Shipping Cost"
                          placeholder="Total Amount"
                          type="number"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>,
                ]}
              />
            </Grid>
          </Grid>,
        ]}
      />
    </Box>
  );
};

export default Step3;
