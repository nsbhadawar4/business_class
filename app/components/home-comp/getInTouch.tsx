"use client";
import { Box, Grid, Typography, TextField, Button, Paper } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function GetInTouch() {
  return (
    <>
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography variant="h2">
          <span
            style={{
              background: "none",
              WebkitBackgroundClip: "unset",
              WebkitTextFillColor: "#020817",
              paddingRight: "10px",
            }}
          >
            Get In
          </span>
          Touch
        </Typography>
        <Typography variant="h6" sx={{ color: "#64748B", mt: 1 }}>
          Have questions about our platform? Need help with your advantage card?
          We're here <br /> to help and would love to hear from you.
        </Typography>
      </Box>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: "16px",
          border: "1px solid #F0F0F0",
          background: "#fff",
          maxWidth: "1200px",
          mx: "auto",
          mt: 4,
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              bgcolor: "rgba(0,200,0,0.1)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
            }}
          >
            <ChatBubbleOutlineIcon sx={{ fontSize: 28, color: "#10B981" }} />
          </Box>
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            Send us a message
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* First Name */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={{ mb: 1, fontWeight: 500 }}>First Name</Typography>
            <TextField
              fullWidth
              placeholder="Enter your first name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "48px",
                  borderRadius: "10px",
                },
              }}
            />
          </Grid>

          {/* Last Name */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={{ mb: 1, fontWeight: 500 }}>Last Name</Typography>
            <TextField
              fullWidth
              placeholder="Enter your last name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "48px",
                  borderRadius: "10px",
                },
              }}
            />
          </Grid>

          {/* Email */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={{ mb: 1, fontWeight: 500 }}>Email</Typography>
            <TextField
              fullWidth
              placeholder="Enter your email address"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "48px",
                  borderRadius: "10px",
                },
              }}
            />
          </Grid>

          {/* Subject */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={{ mb: 1, fontWeight: 500 }}>Subject</Typography>
            <TextField
              fullWidth
              placeholder="What is this about?"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "48px",
                  borderRadius: "10px",
                },
              }}
            />
          </Grid>

          {/* Message */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={{ mb: 1, fontWeight: 500 }}>Message</Typography>
            <TextField
              fullWidth
              placeholder="Tell us how we can help you..."
              multiline
              rows={5}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />
          </Grid>

          {/* reCAPTCHA + Submit Button */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              mt: 2,
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            {/* reCAPTCHA placeholder */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: "78px",
                border: "1px solid #E5E7EB",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                px: 2,
              }}
            >
              <Typography color="text.secondary">
                I'm not a robot (reCAPTCHA box)
              </Typography>
            </Box>

            {/* Send Message Button */}
            <Button
              fullWidth
              sx={{
                height: "50px",
                borderRadius: "10px",
                background: "linear-gradient(90deg, #4F46E5 0%, #A855F7 100%)",
                color: "#fff",
                fontWeight: 600,
                textTransform: "none",
                px: 6,
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #4338CA 0%, #9333EA 100%)",
                },
                width: { xs: "100%", md: "45%" },
              }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
