import { Box } from "@mui/material";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  bg?: string;
  py?: number | { xs?: number; md?: number };
  id?: string;
  sx?: any;
}

export function Section({ children, bg = "transparent", py = { xs: 6, md: 10 }, id, sx = {} }: SectionProps) {
  return (
    <Box
      id={id}
      sx={{
        width: "100%",
        backgroundColor: bg,
        py,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
