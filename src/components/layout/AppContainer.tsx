import { Container } from "@mui/material";
import { ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  sx?: any;
}

export function AppContainer({ children, maxWidth = "lg", sx = {} }: AppContainerProps) {
  return (
    <Container maxWidth={maxWidth} sx={{ px: { xs: 2, md: 4 }, ...sx }}>
      {children}
    </Container>
  );
}
