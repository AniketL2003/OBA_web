"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { SectionHeader } from "@/src/components/common/SectionHeader";
import { StatCard } from "@/src/components/common/StatCard";
import { FeatureCard } from "@/src/components/common/FeatureCard";
import { PrimaryButton } from "@/src/components/common/PrimaryButton";
import { businessOwnerFeatures, operationsFeatures, platformFeatures } from "@/src/data/features";
import { Challenges } from "@/src/components/features/Challenges";
import { stats } from "@/src/data/stats";
import { fadeInUp } from "@/src/animations/fade";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AppContainer } from "@/src/components/layout/AppContainer";
import { Section } from "@/src/components/layout/Section";
import { GridX } from "@/src/components/layout/GridX";
import { FeaturesHero } from "@/src/components/features/FeaturesHero";

export default function FeaturesPage() {
  const router = useRouter();

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <FeaturesHero />
      </motion.div>

      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          py: { xs: 6, md: 4 },
        }}
      >
      </Box>

      {/* ===== STATS SECTION (MATCHES IMAGE) ===== */}
      <Section bg="#F8FAFC" py={{ xs: 6, md: 8 }}>
        <AppContainer>
          <GridX columns={{ xs: 1, sm: 2, md: 4 }} gap={{ xs: 4, md: 6 }}>
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                index={index}
              />
            ))}
          </GridX>
        </AppContainer>
      </Section>
      {/* ===== END STATS SECTION ===== */}


      {/* ===== CHALLENGES SECTION ===== */}
      <Challenges />
      {/* ===== END CHALLENGES SECTION ===== */}



      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <SectionHeader
            title="Built for Your Business"
            highlighted="Your Business"
            subtitle="Comprehensive features tailored to different roles and responsibilities in your organization."
            align="center"
          />

          <Box sx={{ mb: 8 }}>
            <Box sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              mb: 4,
              backgroundColor: "#F8FAFC",
              border: "1px solid #E2E8F0",
              p: 2,
              borderRadius: "8px",
            }}
            >
              <Box sx={{ mr: 2 }}>
                <img style={{ width: "64px" }} src="/images/Business.svg" alt="business-img" />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: "#0F172A",
                    mb: 0.5,
                    fontSize: "24px",
                  }}
                >
                  For Business Owners
                </Typography>
                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  Complete control over your order booking operations with intelligent flow.
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={4}>
              {businessOwnerFeatures.map((feature, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={feature.title}>
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mb: 8 }}>
            <Box sx={{ 
              display:"flex", 
              justifyContent: "flex-start", 
              alignItems: "center",
              backgroundColor: "#F8FAFC",
              p:2,
              mb:4,
            }}
            >
              <Box sx={{ mr: 2 }}>
                <img style={{ width: "64px" }} src="/images/features/Operations.svg" alt="operations-img" />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: "#0F172A",
                    mb: 1,
                    fontSize: { xs: "24px", md: "28px" },
                  }}
                >
                  For Operations Teams
                </Typography>
                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  Streamline daily operations and eliminate manual errors with automated workflows.
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={4}>
              {operationsFeatures.map((feature, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={feature.title}>
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F8FAFC",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <SectionHeader
            title="Complete Platform"
            highlighted="Platform"
            subtitle="All the tools you need in one integrated system."
            align="center"
          />
          <Grid container spacing={3}>
            {platformFeatures.map((feature, index) => (
              <Grid size={{ xs: 12, md: 6, sm: 4 }} key={feature.title}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.05 }}
                >
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: "12px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        backgroundColor: "#FFF2E6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        fontSize: "24px",
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", md: "14px" },
                        color: "#0F172A",
                        fontWeight: 500,
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", maxWidth: "700px", mx: "auto" }}>
            <SectionHeader
              title="Start Booking Orders Smarter Today!"
              highlighted="Smarter Today!"
              subtitle="Join thousands of businesses already transforming their order management. See OBA in action with a personalized demo."
              align="center"
            />
            <PrimaryButton
              variant="contained"
              onClick={() => router.push("/contact")}
            >
              Book a Demo
            </PrimaryButton>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
