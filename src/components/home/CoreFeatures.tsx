"use client";

import { Box, Container } from "@mui/material";
import { SectionHeader } from "@/src/components/common/SectionHeader";
import { FeatureCard } from "@/src/components/common/FeatureCard";
import { coreFeatures } from "@/src/data/features";

export function CoreFeatures() {
  return (
    <Box sx={{ backgroundColor: "#FFFFFF", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          title="Core Features"
          subtitle="Everything you need to manage orders efficiently"
          align="center"
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4 },
            mt: { xs: 4, md: 6 },
          }}
        >
          {coreFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
