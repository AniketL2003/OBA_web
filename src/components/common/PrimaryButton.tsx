"use client";

import { Button, ButtonProps, Box } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface PrimaryButtonProps extends Omit<ButtonProps, "variant"> {
  children: React.ReactNode;
  variant?: "contained" | "outlined";
  showArrow?: boolean;
}

export function PrimaryButton({
  children,
  variant = "contained",
  showArrow = true,
  sx,
  ...props
}: PrimaryButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        variant={variant}
        sx={{
          backgroundColor: variant === "contained" ? "#FF7A00" : "transparent",
          color: variant === "contained" ? "#FFFFFF" : "#0F172A",
          borderColor: variant === "outlined" ? "#E2E8F0" : "transparent",
          borderWidth: variant === "outlined" ? 1 : 0,
          borderStyle: "solid",
          borderRadius: "12px",
          px: 3,
          py: 1.5,
          fontSize: "16px",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: variant === "contained" ? "0 4px 12px rgba(255, 122, 0, 0.3)" : "0 2px 8px rgba(0, 0, 0, 0.04)",
          "&:hover": {
            backgroundColor: variant === "contained" ? "#E56F00" : "rgba(255, 122, 0, 0.04)",
            borderColor: variant === "outlined" ? "#FF7A00" : "transparent",
            boxShadow: variant === "contained" ? "0 6px 16px rgba(255, 122, 0, 0.4)" : "0 2px 8px rgba(0, 0, 0, 0.08)",
          },
          ...sx,
        }}
        {...props}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {children}
          {showArrow && (
            <ArrowForwardIcon sx={{ fontSize: "18px", ml: 0.5 }} />
          )}
        </Box>
      </Button>
    </motion.div>
  );
}
