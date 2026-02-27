import { Box } from "@mui/material";
import { ReactNode } from "react";

interface GridXProps {
  children: ReactNode;
  columns?: { xs?: number; sm?: number; md?: number; lg?: number };
  gap?: number | { xs?: number; md?: number };
  sx?: any;
}

export function GridX({ children, columns = { xs: 1, sm: 2, md: 3 }, gap = { xs: 3, md: 4 }, sx = {} }: GridXProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: `repeat(${columns.xs || 1}, 1fr)`,
          sm: columns.sm ? `repeat(${columns.sm}, 1fr)` : undefined,
          md: columns.md ? `repeat(${columns.md}, 1fr)` : undefined,
          lg: columns.lg ? `repeat(${columns.lg}, 1fr)` : undefined,
        },
        gap,
        alignItems: "stretch",
        width: "100%",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
