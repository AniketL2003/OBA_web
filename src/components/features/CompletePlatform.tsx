"use client";

import { Box, Container, Typography, Grid } from "@mui/material";

const platformFeatures = [
  { icon: "⚡", label: "Offers & Coupons" },
  { icon: "⏰", label: "Cancellation Rules" },
  { icon: "📍", label: "Area Selection" },
  { icon: "💰", label: "Dynamic Pricing" },
  { icon: "🔍", label: "Filters" },
  { icon: "📤", label: "Data Export" },
  { icon: "👥", label: "Role Management" },
  { icon: "🔄", label: "Auto-Sync" },
  { icon: "🔔", label: "Notifications" },
  { icon: "👁️", label: "Tracking" },
  { icon: "🔒", label: "Security" },
  { icon: "📱", label: "Mobile App" },
];

export function CompletePlatform() {
  return (
    <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            sx={{
              fontSize: { xs: "36px", md: "48px" },
              fontWeight: 800,
              color: "#0F172A",
              mb: 2,
            }}
          >
            Complete{" "}
            <Box component="span" sx={{ color: "#FF7A00" }}>
              Platform
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              color: "#64748B",
            }}
          >
            All the tools you need in one integrated system.
          </Typography>
        </Box>

        {/* GRID → 4 COLUMNS */}
        <Grid container spacing={4} justifyContent="center">
          {platformFeatures.map((f) => (
            <Grid
             size={{ xs: 12, md: 6 }}   // tablet → 2 per row
                 // desktop → 4 per row ✅
              key={f.label}
            >
              {/* CARD */}
              <Box
                sx={{
                  height: "100%",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  backgroundColor: "#FFFFFF",
                  px: 3,
                  py: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    backgroundColor: "#FFF1E6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    mb: 2,
                  }}
                >
                  {f.icon}
                </Box>

                {/* LABEL */}
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#0F172A",
                  }}
                >
                  {f.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
