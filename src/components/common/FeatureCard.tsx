"use client";

import { Box, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/src/animations/fade";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeInUp}
      transition={{ delay: index * 0.08 }}
      style={{ height: "100%" }}
    >
      <Card
        sx={{
          height: "100%",
          p: "24px",
          borderRadius: "16px",
          border: "1px solid #E2E8F0",
          boxShadow: "none",
          display: "flex",
          alignItems: "flex-start",
          gap: "16px", // ⭐ THIS FIXES SPACING
          backgroundColor: "#fff",
          transition: "all 0.25s ease",

          "&:hover": {
            boxShadow: "0 8px 24px rgba(16,24,40,0.08)",
            transform: "translateY(-2px)",
          },
        }}
      >
        {/* ICON */}
        <Box
          sx={{
            minWidth: 48,
            height: 48,
            borderRadius: "12px",
            backgroundColor: "#FFF2E6",
            display: "flex",
            justifyContent: "center", // ⭐ FIX
            alignItems: "center",
          }}
        >
          <Image src={icon} alt={title} width={24} height={24} />
        </Box>

        {/* TEXT */}
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              mb: "6px",
              color: "#0F172A",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              color: "#64748B",
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Card>
    </motion.div>
  );
}