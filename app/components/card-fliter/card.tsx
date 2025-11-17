"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Card,
  Typography,
  Chip,
  Stack,
  CircularProgress,
  Grid,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import IMAGES from "@/app/assets/images";
import Image from "next/image";
import SearchFilterBar from "./search-filter-bar";
import CostumeButton from "../button";
import ClickableBox from "../router";
import SVGICON from "@/app/assets/svg/icon";

const products = [
  {
    id: 1,
    title: "Car Hauler",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quam sed velit egestas tincidunt consequat.",
    image: IMAGES.Card1,
    rating: 4.9,
    reviews: 127,
    tags: ["Dump Trailer", "Enclosed", "Cap: 500 kg"],
    price: 60,
  },
  {
    id: 2,
    title: "Flatbed Trailer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quam sed velit egestas tincidunt consequat.",
    image: IMAGES.Card1,
    rating: 4.7,
    reviews: 85,
    tags: ["Utility Trailer", "Enclosed", "Cap: 200 kg"],
    price: 45,
  },
  {
    id: 3,
    title: "Bike Rack",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quam sed velit egestas tincidunt consequat.",
    image: IMAGES.Card1,
    rating: 4.8,
    reviews: 95,
    tags: ["Cargo Carrier", "Enclosed", "Cap: 30 kg"],
    price: 25,
  },
  {
    id: 4,
    title: "Car Carrier",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
    image: IMAGES.Card1,
    rating: 4.7,
    reviews: 98,
    tags: ["Open", "Heavy Duty", "Cap: 800 kg"],
    price: 80,
  },
  {
    id: 5,
    title: "Truck Trailer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
    image: IMAGES.Card1,
    rating: 4.5,
    reviews: 65,
    tags: ["Flatbed", "Heavy Duty", "Cap: 1200 kg"],
    price: 100,
  },
  {
    id: 6,
    title: "Utility Trailer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
    image: IMAGES.Card1,
    rating: 4.8,
    reviews: 84,
    tags: ["Compact", "Lightweight", "Cap: 300 kg"],
    price: 45,
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(products);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setFiltered(products);
    } else {
      const filteredItems = products.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(filteredItems);
    }
  };

  // Lazy loading on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        if (!isLoading && visibleCount < filtered.length) {
          setIsLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + 3, filtered.length));
            setIsLoading(false);
          }, 1000);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, filtered.length, visibleCount]);

  const visibleProducts = filtered.slice(0, visibleCount);

  return (
    <Box>
      {/* ✅ Search + Filter Bar Component */}
      <SearchFilterBar search={search} onSearchChange={handleSearch} />

      {/* Products Count or No Data */}
      {filtered.length === 0 ? (
        <Typography variant="h6" sx={{ mb: 2, color: "red" }}>
          No Data Found
        </Typography>
      ) : (
        <Typography variant="h6" sx={{ mb: 2 }}>
          {filtered.length}+ Products
        </Typography>
      )}

      {/* Product Cards */}
      <Grid container spacing={2}>
        {visibleProducts.map((item) => (
          <Grid size={{ xs: 12, md: 4 }} key={item.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                // overflow: "hidden",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <ClickableBox nextPageUrl="/details">
                  <Image
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "224px",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      bgcolor: "white",
                      borderRadius: 2,
                      px: 1.5,
                      py: 0.3,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    <StarIcon sx={{ color: "#facc15", fontSize: 18 }} />
                    {item.rating} ({item.reviews})
                  </Box>
                </ClickableBox>
              </Box>

              <Box sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  {item.description}
                </Typography>

                {/* <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 2,
                    cursor: "pointer",
                  }}
                >
                  {item.tags.map((tag, i) => (
                    <Chip
                      key={i}
                      label={tag}
                      variant="outlined"
                      sx={{ borderRadius: 2 }}
                    />
                  ))}
                  <Chip
                    label="+1 more"
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Box> */}

                <Stack direction="row" spacing={0.5} flexWrap="wrap" mb={2}>
                  <CostumeButton
                    className="outlineBtn"
                    startIcon={<SVGICON.Icon1 />}
                    stylesRest={{
                      fontSize: "10px !important",
                      fontWeight: "400 !important",
                      padding: "0 10px !important",
                    }}
                  >
                    Dump Trailer
                  </CostumeButton>
                  <CostumeButton
                    className="outlineBtn"
                    startIcon={<SVGICON.Icon2 />}
                    stylesRest={{
                      fontSize: "10px !important",
                      fontWeight: "400 !important",
                      padding: "0 10px !important",
                    }}
                  >
                    Enclosed
                  </CostumeButton>
                  <CostumeButton
                    className="outlineBtn"
                    startIcon={<SVGICON.Icon3 />}
                    stylesRest={{
                      fontSize: "10px !important",
                      fontWeight: "400 !important",
                      padding: "0 10px !important",
                    }}
                  >
                    Cap: 500 kg
                  </CostumeButton>
                  <CostumeButton
                    className="outlineBtn"
                    startIcon={<SVGICON.Icon3 />}
                    stylesRest={{
                      fontSize: "10px !important",
                      fontWeight: "400 !important",
                      padding: "0 10px !important",
                    }}
                  >
                    +1 more
                  </CostumeButton>
                </Stack>

                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  sx={{
                    borderTop: "1px solid #A1A1AA4D",
                    width: "100%",
                    pt: 2,
                  }}
                >
                  <Typography variant="h5">
                    {`$${item.price}`}
                    <span style={{ color: "#717182", marginLeft: "5px" }}>
                      /day
                    </span>
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <CostumeButton className="outlineBtn">
                      Check Availability
                    </CostumeButton>
                    <ClickableBox nextPageUrl="/book-car-hauler">
                      <CostumeButton className="darkBtn">
                        Book Now
                      </CostumeButton>
                    </ClickableBox>
                  </Box>
                </Stack>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ✅ Loader at bottom center */}
      {isLoading && (
        <Box
          sx={{
            position: "fixed",
            top: "250px",
            left: 0,
            right: 0,
          }}
        >
          <CircularProgress size={16} sx={{ color: "#DDDDE6" }} />
        </Box>
      )}
    </Box>
  );
}
