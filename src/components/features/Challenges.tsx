"use client";

import { Box, Container, Typography, Grid } from "@mui/material";

const painPoints = [
  "Labor intensive inventory management",
  "Difficult to track orders",
  "No visibility of order status",
  "Manual order booking errors",
];

const achievements = [
  "Save time with OBA",
  "Reduce errors significantly",
  "Real-time inventory controls",
  "Better data insights",
];

export function Challenges() {
  return (
    <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* SECTION HEADER */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              fontWeight: 800,
              color: "#0F172A",
              mb: 2,
            }}
          >
            We Understand Your{" "}
            <Box component="span" sx={{ color: "#FF7A00" }}>
              Challenges
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "15px", md: "17px" },
              color: "#64748B",
              maxWidth: 720,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Built from real business needs and designed to solve the problems
            that matter most
          </Typography>
        </Box>

        {/* CENTERED COMPARISON BLOCK */}
        <Box
          sx={{
            maxWidth: 1100,
            mx: "auto",
          }}
        >
          <Grid container spacing={{ xs: 6, md: 10 }} justifyContent="center">
            {/* PAIN POINTS */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "center",
                }}
              >
                {/* Title */}
                <Box
                  sx={{
                    display: "flex",
                    // alignItems: "center",
                    gap: 1.5,
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "12px",
                      backgroundColor: "#FFF1F2",
                      color: "#EF4444",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    !
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#0F172A",
                    }}
                  >
                    Common Pain Points
                  </Typography>
                </Box>

                {/* Items */}
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 520,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {painPoints.map((point, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        px: 3,
                        py: 2.25,
                        borderRadius: "14px",
                        backgroundColor: "#FFF7F7",
                        border: "1px solid #FEE2E2",
                      }}
                    >
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          backgroundColor: "#FEE2E2",
                          color: "#EF4444",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        ✕
                      </Box>
                      <Typography sx={{ fontSize: "15px", color: "#475569" }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* ACHIEVEMENTS */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "center",
                }}
              >
                {/* Title */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "12px",
                      backgroundColor: "#ECFDF5",
                      color: "#22C55E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#0F172A",
                    }}
                  >
                    What You’ll Achieve
                  </Typography>
                </Box>

                {/* Items */}
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 520,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {achievements.map((point, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        px: 3,
                        py: 2.25,
                        borderRadius: "14px",
                        backgroundColor: "#F0FDF4",
                        border: "1px solid #DCFCE7",
                      }}
                    >
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          backgroundColor: "#DCFCE7",
                          color: "#22C55E",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </Box>
                      <Typography sx={{ fontSize: "15px", color: "#475569" }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
