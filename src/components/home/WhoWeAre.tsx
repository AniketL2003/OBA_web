"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/src/animations/fade";
import { PrimaryButton } from "@/src/components/common/PrimaryButton";
import { useRouter } from "next/navigation";

export function WhoWeAre() {
  const router = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* CSS GRID – EXACT COLUMNS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",                // mobile
              md: "5fr 7fr",            // desktop: image/content ratio
            },
            gap: { xs: 4, md: 8 },
            alignItems: "center",
            width: "100%",
            mt: 0,
          }}
        >
          {/* LEFT: IMAGE */}
          <Box>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Box
                  component="img"
                  src="/images/About-Our.png"
                  alt="Who We Are"
                  sx={{
                    width: { xs: "240px", md: "320px" },
                    height: "auto",
                  }}
                />
              </Box>
            </motion.div>
          </Box>

          {/* RIGHT: CONTENT */}
          <Box>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
              <Typography
                sx={{
                  fontSize: { xs: "32px", md: "40px" },
                  fontWeight: 700,
                  color: "#0F172A",
                  mb: 2,
                }}
              >
                Who We{" "}
                <Box component="span" sx={{ color: "#FF7A00" }}>
                  Are
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  color: "#64748B",
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: "600px",
                }}
              >
                OBA (Order Booking App) is a comprehensive platform designed to
                revolutionize how businesses manage their orders. From small
                startups to large enterprises, we provide the tools you need to
                track, analyze, and optimize your entire order workflow.
              </Typography>

              <PrimaryButton onClick={() => router.push("/about")}>
                About OBA
              </PrimaryButton>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
