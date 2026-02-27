"use client";

import { Box, Typography } from "@mui/material";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { AboutHero } from "@/src/components/about/AboutHero";
import { StatCard } from "@/src/components/common/StatCard";
import { stats } from "@/src/data/stats";
import { Section } from "@/src/components/layout/Section";
import { AppContainer } from "@/src/components/layout/AppContainer";
import { GridX } from "@/src/components/layout/GridX";
import { AboutSection } from "@/src/components/about/AboutSection";
import { CoreValues } from "@/src/components/about/CoreValues";
import { Approach } from "@/src/components/about/Approach";
import { SectionHeader } from "@/src/components/common/SectionHeader";
import { PrimaryButton } from "@/src/components/common/PrimaryButton";
import router from "next/router";

export default function AboutPage() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      <Navbar />
      <AboutHero />
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
      <AboutSection />
      <CoreValues />
      <Approach />
      {/* ===== CTA SECTION ===== */}
      <Section bg="#FFFFFF" py={{ xs: 6, md: 10 }}>
        <AppContainer>
          <Box sx={{ textAlign: "center", maxWidth: "700px", mx: "auto" }}>
            <SectionHeader
              title="Start Booking Orders Smarter Today!"
              highlighted="Smarter Today!"
              subtitle="Join thousands of businesses already transforming their order management. See OBA in action with a personalized demo."
              align="center"
            />
            <Box sx={{ mb: 4 }}>
              <PrimaryButton
                variant="contained"
                onClick={() => router.push("/contact")}
                sx={{ px: 4, py: 1.6, fontWeight: 600, fontSize: "16px", borderRadius: "12px", mx: "auto", display: "block" }}
              >
                Book Demo
              </PrimaryButton>
            </Box>                                                                                                                                
            {/* CSS GRID – CTA ICONS */}
            <GridX columns={{ xs: 1, sm: 2, md: 3 }} gap={4} sx={{ mt: 2, alignItems: "center", width: "100%" }}>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={{ fontSize: "32px", mb: 1 }}><img src="/images/TickIcon.svg" alt="Easy Ordering" style={{ width: "24px", height: "24px" }} /></Box>
                <Typography sx={{ color: "#0F172A", fontWeight: 500 }}>
                  Easy Ordering
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={{ fontSize: "32px", mb: 1 }}><img src="/images/TickIcon.svg" alt="Fast Processing" style={{ width: "24px", height: "24px" }} /></Box>
                <Typography sx={{ color: "#0F172A", fontWeight: 500 }}>
                  Fast Processing
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box sx={{ fontSize: "32px", mb: 1 }}><img src="/images/TickIcon.svg" alt="Smart Analytics" style={{ width: "24px", height: "24px" }} /></Box>
                <Typography sx={{ color: "#0F172A", fontWeight: 500 }}>
                  Smart Analytics
                </Typography>
              </Box>
            </GridX>
          </Box>
        </AppContainer>
      </Section>
      <Footer />
    </Box>
  );
}
