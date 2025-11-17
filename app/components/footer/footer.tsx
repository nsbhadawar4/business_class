"use client";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";
import SVG from "@/app/assets/svg";
import ClickableBox from "../router";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0C1518",
        color: "white",
        p: { xs: 4, md: 8 },
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems={"end"}
      >
        {/* Left Section */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h4" mb={3}>
            MikeVehicles
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#B0B0B0", lineHeight: 1.7 }}
          >
            Lorem ipsum dolor sit amet consectetur. Sem semper turpis vitae amet
            convallis sed. Aliquet rutrum pellentesque ornare eu. Tincidunt
            turpis consectetur est.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
            <ClickableBox nextPageUrl="/">
              <SVG.Logo />
            </ClickableBox>
            <Typography variant="body2" sx={{ ml: 1, color: "#B0B0B0" }}>
              Powered by Rent Logic
            </Typography>
          </Box>
        </Grid>

        {/* Center Section */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
          <Box>
            <IconButton sx={{ color: "white" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "end" }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" mb={3}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: "#B0B0B0" }}>
              +1 (999) 888-77-66
              <br />
              Mikevehicles@gmail.com
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" mb={3}>
              Location
            </Typography>
            <Typography variant="body2" sx={{ color: "#B0B0B0" }}>
              483920, Moscow,
              <br />
              Myasnitskaya 22/2/5, Office 4
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
