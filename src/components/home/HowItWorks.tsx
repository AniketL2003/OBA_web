"use client";

import { Box, Container, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/src/components/common/SectionHeader";
import { fadeInUp } from "@/src/animations/fade";

const steps = [
  {
    number: 1,
    title: "Quick Setup",
    description:
      "Configure your store settings, delivery zones, and product packing workflows.",
    icon: "/images/HowItWorks/Setup.svg",
  },
  {
    number: 2,
    title: "Start Processing",
    description:
      "Orders flow in automatically with real-time notifications and status updates.",
    icon: "/images/HowItWorks/StartP.svg",
  },
  {
    number: 3,
    title: "Data Insights",
    description:
      "Track performance with the dashboard and exclusive analytics.",
    icon: "/images/HowItWorks/Insights.svg",
  },
  {
    number: 4,
    title: "Scale & Grow",
    description:
      "Expand your orders confidently with automated workflows and insights.",
    icon: "/images/HowItWorks/Scale.svg",
  },
];

export function HowItWorks() {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          title="How It Works"
          highlighted="Works"
          subtitle="Simple steps to transform your order management."
          align="center"
        />

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
            mt: 4,
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              style={{ width: "100%" }}
            >
              <Card
                component={motion.div}
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                }}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "none",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* STEP NUMBER */}
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "#FFF2E6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#FF7A00",
                    border: "2px solid #FF7A00",
                  }}
                >
                  {step.number}
                </Box>

                {/* ICON (IMAGE OR EMOJI SAFE) */}
                <Box
                  sx={{
                    mb: 1,
                    height: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {step.icon.startsWith("/") ? (
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={40}
                      height={40}
                    />
                  ) : (
                    <Typography fontSize={32}>{step.icon}</Typography>
                  )}
                </Box>

                {/* TITLE */}
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#0F172A",
                    mb: 1,
                    fontSize: "18px",
                  }}
                >
                  {step.title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    color: "#64748B",
                    lineHeight: 1.6,
                    fontSize: "14px",
                  }}
                >
                  {step.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
