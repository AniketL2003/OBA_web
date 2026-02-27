"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Features", path: "/features" },
  { label: "FAQ's", path: "/faqs" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();
  const router = useRouter();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleNavClick = (path: string) => {
    router.push(path);
    setDrawerOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E2E8F0",
        boxShadow: "none",
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 2 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >

            <img
              src="/images/LogoOBA.svg"
              alt="About OBA Illustration"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </motion.div>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
              {navItems.map((item) => (
                <Typography
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  sx={{
                    fontSize: "16px",
                    fontWeight: isActive(item.path) ? 600 : 400,
                    color: isActive(item.path) ? "#FF7A00" : "#0F172A",
                    cursor: "pointer",
                    position: "relative",
                    "&:hover": {
                      color: "#FF7A00",
                    },
                    "&::after": isActive(item.path)
                      ? {
                        content: '""',
                        position: "absolute",
                        bottom: -8,
                        left: 0,
                        right: 0,
                        height: 2,
                        backgroundColor: "#FF7A00",
                      }
                      : {},
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          )}

          {!isMobile ? (
            <Button
              variant="outlined"
              onClick={() => handleNavClick("/contact")}
              sx={{
                textTransform: "none",
                borderColor: "#E2E8F0",
                color: "#0F172A",
                fontWeight: 600,
                fontSize: "16px",
                px: 3,
                py: 1.25,
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                "&:hover": {
                  borderColor: "#FF7A00",
                  backgroundColor: "rgba(255, 122, 0, 0.04)",
                },
              }}
            >
              Book Demo
            </Button>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{ color: "#0F172A" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 280, pt: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, pb: 2 }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                sx={{
                  cursor: "pointer",
                  backgroundColor: isActive(item.path) ? "#FFF2E6" : "transparent",
                  "&:hover": {
                    backgroundColor: "#FFF2E6",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "16px",
                      color: isActive(item.path) ? "#FF7A00" : "#0F172A",
                      fontWeight: isActive(item.path) ? 600 : 400,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Box sx={{ px: 2, mt: 2, pb: 4 }}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleNavClick("/contact")}
              sx={{
                textTransform: "none",
                borderColor: "#E2E8F0",
                color: "#0F172A",
                fontWeight: 600,
                py: 1.5,
                borderRadius: "12px",
              }}
            >
              Book Demo
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
