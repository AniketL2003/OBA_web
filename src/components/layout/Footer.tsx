"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
} from "@mui/material";
import { useRouter } from "next/navigation";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid2 from "@mui/material/Unstable_Grid2";

export function Footer() {
  const router = useRouter();

  const handleLinkClick = (path: string) => {
    router.push(path);
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0F172A",
        color: "#94A3B8",
        // mt: { xs: 10, md: 14 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 3, sm: 6, md: 8 },
        }}
      >
        <Grid
          container
          rowSpacing={{ xs: 5, md: 0 }}
          columnSpacing={{ md: 6 }}
          py={6}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // ✅ responsive layout
            alignItems: { xs: "center", md: "flex-start" }, // ✅ center on mobile
            textAlign: { xs: "center", md: "left" }, // ✅ text alignment
            gap: 3
          }}
        >
          {/* Brand */}
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <img
              src="/images/LogoOBALight.svg"
              alt="About OBA Illustration"
              style={{
                width: "37%",
                height: "37%",
                objectFit: "contain",
                display: "block",
                maxHeight: "50px",
              }}
            />
            <Typography
              sx={{
                maxWidth: 360,
                fontSize: "14px",
                lineHeight: 1.8,
              }}
            >
              Streamlining order management for businesses worldwide.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography sx={{ color: "#fff", mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MuiLink component="button" onClick={() => handleLinkClick("/features")} sx={link}>
                Features
              </MuiLink>
              <MuiLink component="button" onClick={() => handleLinkClick("/about")} sx={link}>
                About
              </MuiLink>
              <MuiLink component="button" onClick={() => handleLinkClick("/faqs")} sx={link}>
                FAQ
              </MuiLink>
            </Box>
          </Grid>

          {/* Support */}
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography sx={{ color: "#fff", mb: 2, fontWeight: 600 }}>
              Support
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MuiLink sx={link}>Help Center</MuiLink>
              <MuiLink sx={link}>Privacy Policy</MuiLink>
              <MuiLink sx={link}>Terms of Service</MuiLink>
              <MuiLink component="button" onClick={() => handleLinkClick("/contact")} sx={link}>
                Contact Us
              </MuiLink>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography sx={{ color: "#fff", mb: 2, fontWeight: 600 }}>
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <ContactRow icon={<EmailIcon />} text="support@oba.com" />
              <ContactRow icon={<PhoneIcon />} text="+91 98596877048" />
              <ContactRow icon={<LocationOnIcon />} text="Pune, India" />
            </Box>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            py: 3,
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "13px" }}>
            © 2026 OBA – Order Booking App. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

/* helpers */
const link = {
  color: "#CBD5E1",
  textDecoration: "none",
  fontSize: "14px",
  lineHeight: 1.7,
  textAlign: "left",
  "&:hover": { color: "#FFFFFF" },
};

function ContactRow({ icon, text }: any) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        justifyContent: { xs: "center", md: "flex-start" }, // ✅ responsive align
        width: "100%",
      }}
    >
      {icon}
      <Typography sx={{ fontSize: "14px" }}>{text}</Typography>
    </Box>
  );
}
