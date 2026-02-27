"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/src/animations/fade";
import { PrimaryButton } from "@/src/components/common/PrimaryButton";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        py: { xs: 6, md: 12 },

        /* Responsive background images */
        backgroundImage: {
          xs: "url('/images/BGHH.jpg')",
          md: "url('/images/BGHH.jpg')",
          
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",

        /* Overlay for text readability */
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.91), rgb(255, 255, 255))",
          zIndex: 0,
        },
      }}
    >
      {/* Content wrapper */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "6fr 5fr",
            },
            alignItems: "center",
            gap: { xs: 6, md: 10 },
            width: "100%",
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: "center",
              textAlign: { xs: "center", md: "left" },
              width: "100%",
              gap: 2,
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
              style={{ width: "100%" }}
            >
              <Typography
                sx={{
                  color: "#FF7A00",
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                Order Booking Made Simple
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  maxWidth: 520,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Streamline Your Ordering Process with{" "}
                <Box component="span" sx={{ color: "#FF7A00" }}>
                  OBA
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#64748B",
                  mb: 4,
                  maxWidth: 480,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Track, manage, and fulfill all your orders in one powerful app.
                Gain real-time insights and boost your business efficiency.
              </Typography>

              <PrimaryButton
                onClick={() => router.push("/features")}
                sx={{
                  px: 4,
                  py: 1.6,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Explore OBA
              </PrimaryButton>
            </motion.div>
          </Box>

          {/* RIGHT VISUAL */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              style={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  width: { xs: 340, md: 480 },
                  height: { xs: 340, md: 480 },
                }}
              >
                <img
                  src="/images/HomeHeroPlane.svg"
                  alt="Hero Illustration"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
