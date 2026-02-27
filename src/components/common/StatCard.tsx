"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp } from "@/src/animations/fade";

interface StatCardProps {
  value: string;
  label: string;
  icon: string;
  index?: number;
}

export function StatCard({
  value,
  label,
  icon,
  index = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      transition={{ delay: index * 0.12 }}
    >
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%", // ✅ keeps all cards equal
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            mb: 2,
            borderRadius: "18px",
            backgroundColor: "#FFF2E6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src={icon}
            alt={label}
            sx={{
              width: 28,
              height: 28,
            }}
          />
        </Box>


        {/* VALUE */}
        <Typography
          sx={{
            fontSize: { xs: "36px", md: "52px" },
            fontWeight: 700,
            color: "#FF7A00",
            lineHeight: "56px", // ✅ fixed rhythm
            minHeight: "56px",  // ✅ equal height across cards
            mb: 1,
          }}
        >
          {value}
        </Typography>

        {/* LABEL */}
        <Typography
          sx={{
            fontSize: { xs: "15px", md: "17px" },
            color: "#64748B",
            fontWeight: 500,
            lineHeight: "24px",
            minHeight: "24px", // ✅ equal label baseline
          }}
        >
          {label}
        </Typography>
      </Box>
    </motion.div>
  );
}
