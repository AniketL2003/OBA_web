"use client";

import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { SectionHeader } from "@/src/components/common/SectionHeader";
import { FAQAccordion } from "@/src/components/common/FAQAccordion";
import { PrimaryButton } from "@/src/components/common/PrimaryButton";
import { faqs } from "@/src/data/faqs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeInUp } from "@/src/animations/fade";

const categories = [
  "All Questions",
  "Getting Started",
  "Features",
  "Pricing & Plans",
  "Security",
  "Account & Users",
];

export default function FAQsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All Questions");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs =
    selectedCategory === "All Questions"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const searchedFaqs = searchQuery
    ? filteredFaqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs;

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      <Navbar />

      {/* HERO */}
      <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "6fr 5fr" },
              alignItems: "center",
              gap: { xs: 6, md: 10 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                gap: 2,
              }}
            >
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    color: "#FF7A00",
                    fontWeight: 600,
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                  }}
                >
                  Help Center
                </Typography>

                <Typography variant="h1" sx={{ mb: 1 }}>
                  Frequently{" "}
                  <Box component="span" sx={{ color: "#FF7A00" }}>
                    Asked
                  </Box>
                </Typography>

                <Typography variant="h1" sx={{ mb: 3 }}>
                  Questions
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    maxWidth: 480,
                    mb: 4,
                    lineHeight: 1.7,
                  }}
                >
                  Find answers to common questions about OBA. Can’t find what
                  you’re looking for? Our support team is here to help.
                </Typography>
              </motion.div>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                minHeight: { xs: 260, md: 420 },
              }}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <Box
                  sx={{
                    width: { xs: 360, md: 480 },
                    height: { xs: 360, md: 480 },
                  }}
                >
                  <img
                    src="/images/FAQHero.svg"
                    alt="FAQ Illustration"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FAQ LIST */}
      <Box sx={{ backgroundColor: "#F8FAFC", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          {/* Categories */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4, justifyContent: "center" }}>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={
                  selectedCategory === category ? "contained" : "outlined"
                }
                sx={{
                  borderRadius: "12px",
                  px: 3,
                  py: 1.25,
                  fontSize: "14px",
                  textTransform: "none",
                  backgroundColor:
                    selectedCategory === category ? "#FF7A00" : "transparent",
                  color:
                    selectedCategory === category ? "#FFFFFF" : "#0F172A",
                  borderColor: "#E2E8F0",
                }}
              >
                {category}
              </Button>
            ))}
          </Box>

            <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "14px", color: "#64748B", mb: 4, textAlign: "center" }}>
            Showing {searchedFaqs.length} questions.
          </Typography>
          </Box>

          {/* ✅ SINGLE COLUMN FAQ */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              maxWidth: 800,
              mx: "auto",
              width: "100%",
            }}
          >
            {searchedFaqs.map((faq, index) => (
              <FAQAccordion
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                defaultExpanded={index === 0}
                index={index}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto" }}>
            <SectionHeader
              title="Still Have Questions?"
              highlighted="Questions?"
              subtitle="Can't find the answer you're looking for? 
              Our friendly support team is ready to help you."
              align="center"
            />
            <PrimaryButton onClick={() => router.push("/contact")}>
              Book a Demo
            </PrimaryButton>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
