import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import HomePage from "../components/card-fliter/card";
import CostumeButton from "../components/button";
import Topbanner from "../components/home-comp/topbanner";
import ExploreBusiness from "../components/home-comp/exploreBusiness";

const Landing = () => {
  return (
    <>
      <Topbanner />
      <Box className="pageColor">
        <Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2">
              <span
                style={{
                  background: "none",
                  WebkitBackgroundClip: "unset",
                  WebkitTextFillColor: "#020817",
                  paddingRight: "10px",
                }}
              >
                Explore Local
              </span>
              Businesses
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#64748B", my: 3, fontSize: "20px" }}
            >
              Discover amazing local businesses in your area. From restaurants
              to services, find <br /> exactly what you need with exclusive
              member discounts.
            </Typography>
          </Box>
          <ExploreBusiness />
        </Box>
        <HomePage />
      </Box>
    </>
  );
};

Landing.showHeader = true;
export default Landing;
