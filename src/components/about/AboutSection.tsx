"use client";

import { Box, Container, Typography } from "@mui/material";

export function AboutSection() {
  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography sx={{ fontSize: { xs: "28px", md: "32px" }, fontWeight: 700, color: "#0F172A", mb: 2 }}>
            About <Box component="span" sx={{ color: "#FF7A00" }}>OBA</Box>
          </Typography>
          <Typography sx={{ color: "#64748B", fontSize: { xs: "14px", md: "16px" }, mb: 2 }}>
            OBA (<Box component="span" sx={{ color: "#FF7A00" }}>Order Booking App</Box>) is a comprehensive platform designed to revolutionize how businesses manage their orders. From small startups to large enterprises, we provide the tools you need to track, analyze, and optimize your entire order workflow.
          </Typography>
          <Typography sx={{ color: "#64748B", fontSize: { xs: "14px", md: "16px" } }}>
            With real-time analytics, intelligent tracking, and seamless team collaboration, <Box component="span" sx={{ color: "#FF7A00" }}>OBA</Box> empowers businesses to make data-driven decisions and deliver exceptional customer experiences. Our platform has helped thousands of companies increase <Box component="span" sx={{ color: "#FF7A00" }}>efficiency by 40%</Box> and reduce order errors by <Box component="span" sx={{ color: "#FF7A00" }}>35%</Box>.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 8 },
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              component="img"
              src="/images/About-Our.png"
              alt="About OBA Team"
              sx={{
                width: { xs: 260, md: 340 },
                height: "auto",
                mb: { xs: 2, md: 0 },
                mx: { xs: "auto", md: 0 },
                display: "block",
              }}
            />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: { xs: "20px", md: "24px" }, color: "#0F172A", mb: 2 }}>
              Our Mission
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: { xs: "14px", md: "16px" }, mb: 4 }}>
              To empower businesses of all sizes with intuitive, powerful tools that simplify order management and drive sustainable growth.
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: { xs: "20px", md: "24px" }, color: "#0F172A", mb: 2 }}>
              Our Vision
            </Typography>
            <Typography sx={{ color: "#64748B", fontSize: { xs: "14px", md: "16px" } }}>
              To become the world’s most trusted order management platform, helping millions of businesses operate more efficiently and profitably.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
