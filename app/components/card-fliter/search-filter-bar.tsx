"use client";
import { Box, FormGroup, Stack, TextField } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CostumeButton from "../button";
import SVGICON from "@/app/assets/svg/icon";
import { SelectInput } from "../custom-input";
import SearchIcon from "@mui/icons-material/Search";

interface SearchFilterBarProps {
  search: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  search,
  onSearchChange,
}) => {
  return (
    <Box
      sx={{
        mb: 4,
        bgcolor: "#FFFFFF",
        borderRadius: 2,
        p: 4,
        boxShadow: "0px 2px 8px 0px #00000026",
        gap: 2,
      }}
    >
      <Stack direction={"row"} spacing={2}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search..."
          value={search}
          onChange={onSearchChange}
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              height: "46px",
              fontWeight: "400",
              fontSize: "16px",
              background: "#F3F3F5",
              color: "#000",
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: "14px",
              color: "#A1A1AA",
              fontWeight: "400",
              opacity: "1",
            },
          }}
        />
        <CostumeButton className="lavenderBtn" startIcon={<FilterListIcon />}>
          Filters
        </CostumeButton>
      </Stack>
      <Box mt={2}>
        <Stack direction="row" spacing={1} justifyContent={"space-between"}>
          <Stack direction="row" spacing={1}>
            <CostumeButton
              stylesRest={{
                height: "42px !important",
                fontSize: "14px !important",
                fontWeight: "500 !important",
              }}
              className="outlineBtn"
              startIcon={<SVGICON.Calendar />}
            >
              Availability
            </CostumeButton>
            <FormGroup>
              <SelectInput
                styleRest={{
                  width: "210px",
                  background: "#9B59B612",
                  color: "#9B59B6",
                  border: "1px solid #9B59B6",
                  height: "42px",
                  paddingLeft: "20px",
                }}
                icon={<SVGICON.Icon1 />}
                placeholder="Dump Trailers"
                options={[
                  { value: "single_axle", label: "Single Axle Dump Trailer" },
                  { value: "tandem_axle", label: "Tandem Axle Dump Trailer" },
                  { value: "gooseneck", label: "Gooseneck Dump Trailer" },
                  { value: "low_profile", label: "Low Profile Dump Trailer" },
                  { value: "high_side", label: "High Side Dump Trailer" },
                ]}
              />
            </FormGroup>
            <FormGroup>
              <SelectInput
                styleRest={{
                  width: "210px",
                  height: "42px",
                  paddingLeft: "20px",
                }}
                icon={<SVGICON.Producttype />}
                placeholder="Product Type"
                options={[
                  { value: "utility_trailer", label: "Utility Trailer" },
                  { value: "equipment_trailer", label: "Equipment Trailer" },
                  { value: "car_hauler", label: "Car Hauler" },
                  { value: "dump_trailer", label: "Dump Trailer" },
                  { value: "enclosed_trailer", label: "Enclosed Trailer" },
                ]}
              />
            </FormGroup>
          </Stack>
          <CostumeButton
            startIcon={<SearchIcon />}
            className="customstepperBtn"
          >
            Search
          </CostumeButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default SearchFilterBar;
