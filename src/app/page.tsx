"use client";

import { Box, Typography, Container, Button } from "@mui/material";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { Hero } from "@/src/components/home/Hero";
import { SeeInAction } from "@/src/components/home/SeeInAction";
import { WhoWeAre } from "@/src/components/home/WhoWeAre";
import { CoreFeatures } from "@/src/components/home/CoreFeatures";
import { HowItWorks } from "@/src/components/home/HowItWorks";
import { Testimonials } from "@/src/components/home/Testimonials";
import { SectionHeader } from "@/src/components/common/SectionHeader";
import { StatCard } from "@/src/components/common/StatCard";
import { PrimaryButton } from "@/src/components/common/PrimaryButton";
import { FAQAccordion } from "@/src/components/common/FAQAccordion";
import { stats } from "@/src/data/stats";
import { faqs } from "@/src/data/faqs";
import { useRouter } from "next/navigation";
import { Section } from "@/src/components/layout/Section";
import { AppContainer } from "@/src/components/layout/AppContainer";
import { GridX } from "@/src/components/layout/GridX";

export default function HomePage() {
  const router = useRouter();

  return (
    <Box sx={{ minHeight: "100vh"}}>
      <Navbar />
      <Hero />

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
      <SeeInAction />
      {/* ===== END STATS SECTION ===== */}

      <WhoWeAre />
      <CoreFeatures />
      <HowItWorks />
      <Testimonials />

      {/* ===== FAQ SECTION ===== */}
      <Section bg="#FFFFFF" py={{ xs: 6, md: 10 } }>
        <AppContainer>
          <SectionHeader
            title="Frequently Asked Questions"
            highlighted="Questions"
            subtitle="Get answers to common questions before you start."
            align="center"
          />
          <Box sx={{ maxWidth: "800px", mx: "auto", mt: 4, display: "flex", flexDirection: "column", gap: 2 }}>
            {faqs.slice(0, 3).map((faq, index) => (
              <FAQAccordion
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                defaultExpanded={index === 0}
                index={index}
              />
            ))}
          </Box>
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="contained"
              onClick={() => router.push("/faqs")}
              sx={{ 
                borderRadius: "12px",
                boxShadow: "none",
                backgroundColor: "#fff2e6",
                color: "#FF7A00",
                "&:hover": {
                  backgroundColor: "#FF7A00",
                  color: "#FFFFFF",
                },
              }}
            >
              See more
            </Button>
          </Box>
        </AppContainer>
      </Section>

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
