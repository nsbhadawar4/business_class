import { Download } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import CostumeButton from "../button";
import SVGICON from "@/app/assets/svg/icon";
import ClickableBox from "../router";

export default function BookingFooter() {
  return (
    <>
      {/* Payment Completed */}
      <Box className="customCardShadow" sx={{ p: 3, mt: 3 }}>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <SVGICON.Sucess />
          <CostumeButton
            className="inheritCssComonBtn"
            stylesRest={{
              background: "#DBFCE7 !important",
              color: "#016630 !important",
              padding: "10px !important",
            }}
          >
            Payment Completed
          </CostumeButton>
        </Stack>
      </Box>

      {/* Payment Failed */}
      <Box className="customCardShadow" sx={{ p: 3, mt: 3 }}>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <SVGICON.Paymentfail />
          <CostumeButton
            className="inheritCssComonBtn"
            stylesRest={{
              background: "#FFE2E2 !important",
              color: "#9F0712 !important",
              padding: "10px !important",
            }}
          >
            Payment Failed
          </CostumeButton>
        </Stack>
        <Typography variant="h6" sx={{ ml: 11 }}>
          Please retry your payment
        </Typography>
        <Box mt={2}>
          <CostumeButton
            className="inheritCssComonBtn"
            stylesRest={{
              background: "#E82A2D !important",
              color: "#FFFFFF !important",
              padding: "10px !important",
              width: "100% !important",
            }}
          >
            Retry Payment
          </CostumeButton>
        </Box>
      </Box>

      <Box textAlign="center">
        <Typography variant="h2" my={3}>
          What's Next?
        </Typography>
        <CostumeButton
          className="outlineBtn"
          startIcon={<Download />}
          stylesRest={{
            height: "46px !important",
            width: "100% !important",
            fontSize: "16px !important",
          }}
        >
          Download Invoice
        </CostumeButton>
        <br />
        <ClickableBox nextPageUrl="/">
          <CostumeButton className="customstepperBtn">Continue →</CostumeButton>
        </ClickableBox>
      </Box>
    </>
  );
}
