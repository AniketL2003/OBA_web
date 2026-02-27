"use client";

import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

const businessOwnerFeatures = [
  {
    icon: "/images/features/Product.svg",
    title: "Product & Catalog Management",
    desc: "Organize products with category trees, manage stock, and control pricing from one dashboard",
  },
  {
    icon: "/images/features/Analytics.svg",
    title: "Real-time Analytics",
    desc: "Track trends, monitor inventory, and make data-driven decisions instantly",
  },
];

const operationsTeamFeatures = [
  {
    icon: "/images/features/Orders.svg",
    title: "Order Processing",
    desc: "Filter, search, and export orders with advanced filtering and bulk operations",
  },
  {
    icon: "/images/features/Delivery.svg",
    title: "Delivery Management",
    desc: "Set delivery zones, configure fees, and manage runner assignments efficiently",
  },
];

export function BuiltFor() {
  return (
    <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">

        {/* ================= HEADER ================= */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography sx={{ fontSize: { xs: 36, md: 48 }, fontWeight: 800, mb: 2 }}>
            Built for{" "}
            <Box component="span" sx={{ color: "#FF7A00" }}>
              Your Business
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: 720,
              mx: "auto",
              fontSize: 18,
              color: "#64748B",
              lineHeight: 1.7,
            }}
          >
            Comprehensive features tailored to different roles and responsibilities in your organization
          </Typography>

          {/* Illustration */}
          <Box sx={{ mt: { xs: 4, md: 6 }, display: "flex", justifyContent: "center" }}>
            <Image
              src="/images/features/Business.svg"
              alt="Built for business"
              width={720}
              height={400}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Box>

        {/* ================= BUSINESS OWNERS ================= */}
        <Box sx={{ mb: 10 }}>
          {/* ROLE BAR */}
          <RoleBar
            icon="/images/features/Business.svg"
            title="For Business Owners"
            desc="Complete control over your order booking operations with intelligent flow"
          />

          {/* CARDS */}
          <Grid container spacing={4}>
            {businessOwnerFeatures.map((f) => (
              <Grid xs={12} md={6} key={f.title}>
                <FeatureCard {...f} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ================= OPERATIONS TEAMS ================= */}
        <Box>
          <RoleBar
            icon="/images/features/Operations.svg"
            title="For Operations Teams"
            desc="Streamline daily operations and eliminate manual errors with automated workflows"
          />

          <Grid container spacing={4}>
            {operationsTeamFeatures.map((f) => (
              <Grid xs={12} md={6} key={f.title}>
                <FeatureCard {...f} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

/* ================= SUB COMPONENTS ================= */

function RoleBar({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        px: 4,
        py: 3,
        mb: 5,
        display: "flex",
        alignItems: "center",
        gap: 3,
      }}
    >
      <IconBox>
        <Image src={icon} alt={title} width={24} height={24} />
      </IconBox>

      <Box>
        <Typography sx={{ fontSize: 22, fontWeight: 700 }}>{title}</Typography>
        <Typography sx={{ fontSize: 16, color: "#64748B", mt: 0.5 }}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <Box
      sx={{
        border: "1px solid #E2E8F0",
        borderRadius: 3,
        p: 4,
        height: "100%",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box>
        <Image src={icon} alt={title} width={24} height={24} />
      </Box>

      <Typography sx={{ fontSize: 18, fontWeight: 700, mt: 2, mb: 1 }}>
        {title}
      </Typography>

      <Typography sx={{ fontSize: 15, color: "#64748B", lineHeight: 1.6 }}>
        {desc}
      </Typography>
    </Box>
  );
}

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        width: 48,
        height: 48,
        borderRadius: 2,
        border: "1px solid #E2E8F0",
        backgroundColor: "#FFF1E6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
}
