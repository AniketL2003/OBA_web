"use client";

import { Box, Container, Typography, Card, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { SectionHeader } from "@/src/components/common/SectionHeader";
import { fadeInUp } from "@/src/animations/fade";

const testimonials = [
  {
    quote:
      "OBA has transformed how we manage orders. The real-time tracking and analytics have increased our efficiency by 40%.",
    author: "Dean Johnson",
    role: "Operations Manager",
    company: "XYZ Corp",
    avatar: "👨‍💼",
  },
  {
    quote:
      "The insights I get from OBA are invaluable. It's helped us identify trends and opportunities, and streamline our entire process significantly.",
    author: "Vanessa Chen",
    role: "Project Manager",
    company: "ABC Co",
    avatar: "👩‍💼",
  },
  {
    quote:
      "Simple, powerful, and exactly what we needed. OBA has become an essential tool for our daily operations.",
    author: "Emily Black",
    role: "CEO",
    company: "Startup Hub",
    avatar: "👩",
  },
];

export function Testimonials() {
  return (
    <Box
      sx={{
        backgroundColor: "#F8FAFC",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          title="What Our Clients Say"
          highlighted="Say"
          subtitle="Trusted by businesses worldwide."
          align="center"
        />
        {/* CSS GRID – EXACT COLUMNS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",                // mobile
              md: "repeat(3, 1fr)",     // desktop
            },
            gap: 4,
            mt: 4,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              style={{ width: "100%" }}
            >
              <Card
                component={motion.div}
                whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "none",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#0F172A",
                    lineHeight: 1.7,
                    mb: 3,
                    fontSize: { xs: "14px", md: "16px" },
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.quote}"
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: "#FFF2E6",
                      fontSize: "24px",
                    }}
                  >
                    {testimonial.avatar}
                  </Avatar>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: "#0F172A",
                        fontSize: "14px",
                      }}
                    >
                      {testimonial.author}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#64748B",
                        fontSize: "12px",
                      }}
                    >
                      {testimonial.role}, {testimonial.company}
                    </Typography>
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
