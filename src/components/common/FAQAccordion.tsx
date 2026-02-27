"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import { fadeInUp } from "@/src/animations/fade";

interface FAQAccordionProps {
  question: string;
  answer: string;
  defaultExpanded?: boolean;
  index?: number;
}

export function FAQAccordion({
  question,
  answer,
  defaultExpanded = false,
  index = 0,
}: FAQAccordionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      transition={{ delay: index * 0.05 }}
    >
      <Accordion
        defaultExpanded={defaultExpanded}
        sx={{
          mb: 2,
          borderRadius: "12px",
          border: "1px solid #E2E8F0",
          boxShadow: "none",
          backgroundColor: "#FFFFFF",
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: "0 0 16px 0",
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#FF7A00" }} />
          }
          sx={{
            px: 3,
            py: 2,
            "&.Mui-expanded": {
              minHeight: 56,
            },
            "& .MuiAccordionSummary-content": {
              margin: "12px 0",
              "&.Mui-expanded": {
                margin: "12px 0",
              },
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "#FFF2E6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Typography sx={{ color: "#FF7A00", fontWeight: 600, fontSize: "14px" }}>
                ?
              </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: 600,
                color: "#0F172A",
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              {question}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            px: 3,
            pb: 3,
            pt: 0,
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              lineHeight: 1.6,
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </motion.div>
  );
}
