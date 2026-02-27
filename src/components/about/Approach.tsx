"use client";

import { Box, Container, Typography, Card } from "@mui/material";
import Image from "next/image";

const approach = [
  {
    icon: "/images/aboutimg/CustObbess.svg",
    title: "User-Centric Design",
    desc: "Every feature is designed with real user needs in mind, ensuring intuitive and delightful experiences.",
  },
  {
    icon: "/images/aboutimg/Insights.svg",
    title: "Data-Driven Decisions",
    desc: "We leverage analytics and user feedback to continuously improve and innovate our platform.",
  },
  {
    icon: "/images/aboutimg/FastDev.svg",
    title: "Fast Development",
    desc: "Rapid iteration cycles allow us to ship new features and improvements every week.",
  },
];

export function Approach() {
  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* HEADER */}
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "32px" },
            fontWeight: 700,
            color: "#0F172A",
            mb: 1,
            textAlign: "center",
          }}
        >
          Our{" "}
          <Box component="span" sx={{ color: "#FF7A00" }}>
            Approach
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            fontSize: { xs: "14px", md: "16px" },
            mb: 4,
            textAlign: "center",
          }}
        >
          How we build products that make a difference
        </Typography>

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4 },
            mt: { xs: 2, md: 4 },
            alignItems: "stretch",
            width: "100%",
          }}
        >
          {approach.map((v) => (
            <Card
              key={v.title}
              sx={{
                height: "100%",
                p: 3,
                borderRadius: "16px",
                border: "1px solid #E5EAF1",
                backgroundColor: "#FFFFFF",
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* ICON (IMAGE OR EMOJI SAFE) */}
              <Box
                sx={{
                  mb: 2,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {v.icon.startsWith("/") ? (
                  <Image
                    src={v.icon}
                    alt={v.title}
                    width={32}
                    height={32}
                  />
                ) : (
                  <Typography fontSize={32}>{v.icon}</Typography>
                )}
              </Box>

              {/* TITLE */}
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#0F172A",
                  mb: 1,
                }}
              >
                {v.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#64748B",
                  lineHeight: 1.7,
                }}
              >
                {v.desc}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
