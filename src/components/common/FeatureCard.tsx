"use client";

import { Box, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/src/animations/fade";

interface FeatureCardProps {
  icon: string; // image path now
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
          backgroundColor:"#fff",
          // flexDirection: "column",
          // alignItems: { xs: "center", sm: "flex-start" },
          // textAlign: { xs: "center", sm: "left" },
        }}
      >
        {/* ICON IMAGE */}
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "12px",
            backgroundColor: "#FFF2E6",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          {icon.startsWith("/") ? (
            <Image src={icon} alt={title} width={28} height={28} />
          ) : (
            <Typography fontSize={24}>{icon}</Typography>
          )}
        </Box>


        <Box>
          <Typography sx={{ fontSize: 16, fontWeight: 600, mb: 1 }}>
          {title}
        </Typography>

        <Typography sx={{ fontSize: 14, color: "#64748B", lineHeight: 1.7 }}>
          {description}
        </Typography>
        </Box>
      </Card>
    </motion.div>
  );
}
