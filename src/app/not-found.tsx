"use client";

import { Box, Container, Typography } from "@mui/material";
import { PrimaryButton } from "@/src/components/common/PrimaryButton";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { fadeInUp } from "@/src/animations/fade";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function NotFound() {
  const router = useRouter();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      <Navbar />
      <Container maxWidth="md">
        <Box
          sx={{
            minHeight: "calc(100vh - 200px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            py: { xs: 8, md: 12 },
            width: "100%",
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "72px", md: "120px" },
                fontWeight: 700,
                color: "#0F172A",
                mb: 2,
                lineHeight: 1,
              }}
            >
              404
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: 600,
                color: "#0F172A",
                mb: 2,
              }}
            >
              We couldn't find that page.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "#64748B",
                mb: 4,
                maxWidth: "500px",
                mx: "auto",
              }}
            >
              Please check the URL or go back home.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "center", width: "100%" }}>
              <PrimaryButton
                variant="contained"
                onClick={() => router.push("/")}
                sx={{
                  backgroundColor: "#FF7A00",
                  color: "#FFFFFF",
                  px: 4,
                  py: 1.5,
                  fontSize: "16px",
                  borderRadius: "12px",
                  mx: "auto",
                  display: "block",
                  "&:hover": {
                    backgroundColor: "#E56F00",
                  },
                }}
              >
                Back To Home
              </PrimaryButton>
            </Box>
          </motion.div>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
