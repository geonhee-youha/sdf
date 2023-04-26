import { Box } from "@mui/material";
import Button from "../components/atoms/Button";

export default function Index() {
  return (
    <>
      <Box
        sx={{
          maxWidth: "640px",
          m: `0 auto`,
          "& img": {
            width: "100%",
            height: "auto",
          },
          p: `0 0 100px 0`,
        }}
      >
        <img src="/images/poster.png" />
      </Box>
      
      <Box
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Box
          sx={{
            maxWidth: "640px",
            m: `0 auto`,
            p: `8px 16px`,
          }}
        >
          <Button
            fullWidth
            backgroundColor="#0ED5BC"
            size="lg"
            onClick={() => {
              window.open("https://forms.gle/YyejT1GMVznmmmdEA");
            }}
          >
            지금 참가신청하기
          </Button>
        </Box>
      </Box>
    </>
  );
}
