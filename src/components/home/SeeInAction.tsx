"use client";

import { Box, Container, Card } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp } from "@/src/animations/fade";
import { SectionHeader } from "@/src/components/common/SectionHeader";

const showcaseItems = [
  {
    id: 1,
    image: "/images/ImageNotifications.png",
    title: "Stay Connected with Mobile",
    description: "Get a complete overview of your orders on the go.",
  },
  {
    id: 2,
    image: "/images/ImageDashboard.png",
    title: "Manage Everything from Web",
    description: "Full control and comprehensive insights in one platform.",
  },
];

export function SeeInAction() {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          title="See OBA in Action"
          subtitle="Experience the power of seamless order management with our product showcase."
          align="center"
        />

        {/* SHOWCASE GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: { xs: 4, md: 6 },
            mt: { xs: 4, md: 6 },
          }}
        >
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              style={{ width: "100%", height: "100%" }}
            >
              <Card
                component={motion.div}
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                }}
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "none",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* IMAGE */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "100%",
                    backgroundColor: "#F8FAFC",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* TEXT CONTENT */}
                <Box
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >

                  <Box
                    sx={{
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: 600,
                      color: "#0F172A",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Box>

                  <Box
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#64748B",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Box>
                </Box>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
