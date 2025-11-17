import SVGICON from '@/app/assets/svg/icon';
import { Box, Typography } from '@mui/material';

export default function BookingHeader() {
  return (
    <>
      <Box mt={4}>
        <Box sx={{ textAlign: "center" }}>
          <SVGICON.Sucess />
        </Box>
        <Typography variant="h1" align="center" sx={{ marginBottom: "30px" }}>
          Booking Confirmed!
        </Typography>
        <Typography
          variant="h6"
          align="center"
          fontWeight={400}
          mb={4}
          fontSize={"17.5px"}
        >
          Your Booking is confirmed. Thank you for choosing <br />
          MikeVehicles.
        </Typography>
      </Box>
    </>
  );
}
