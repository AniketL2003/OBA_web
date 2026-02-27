"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/src/animations/fade";
import { PrimaryButton } from "@/src/components/common/PrimaryButton";


import { useRouter } from "next/navigation";

export function FeaturesHero() {
  const router = useRouter();
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        py: { xs: 6, md: 12 },
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
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
                Features & Capabilities
              </Typography>

              {/* SAME h1 SCALE AS HOME HERO */}
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  maxWidth: { xs: "100%", md: "520px" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Everything You Need to{" "}
                <Box component="span" sx={{ color: "#FF7A00" }}>
                  Succeed
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#64748B",
                  mb: 4,
                  maxWidth: { xs: "100%", md: "480px" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Discover the powerful features that make OBA the leading order
                management platform trusted by thousands of businesses
                worldwide.
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: 2,
                  mb: { xs: 4, md: 0 },
                }}
              >
                <PrimaryButton
                  variant="contained"
                  onClick={() => router.push("/contact")}
                >
                  Book Demo
                </PrimaryButton>
              </Box>
            </motion.div>
          </Box>

          {/* RIGHT VISUAL – SAME SIZE LOGIC AS HOME HERO */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              minHeight: { xs: 260, md: 420 },
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 360, md: 480 },
                  height: { xs: 360, md: 480 },
                  mx: "auto",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src="/images/FeatueHero.svg"
                    alt="Features Illustration"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}