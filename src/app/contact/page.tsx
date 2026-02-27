"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Card,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BusinessIcon from "@mui/icons-material/Business";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BoltIcon from "@mui/icons-material/Bolt";
import GroupIcon from "@mui/icons-material/Group";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { SectionHeader } from "@/src/components/common/SectionHeader";
import { PrimaryButton } from "@/src/components/common/PrimaryButton";
import { fadeInUp, slideInLeft, slideInRight } from "@/src/animations/fade";
import { motion } from "framer-motion";
import { useState } from "react";

/* -------------------- DATA -------------------- */

const offices = [
  {
    city: "Pune",
    address:
      "Office No. 5, 3rd Floor, Urban Bliss, Pancard Club Rd, Opp. Krushna Medical, Shivneri Colony, Baner Gaon, Pune, Maharashtra 411069",
    email: "support@oba.com",
  },
  {
    city: "Mumbai",
    address:
      "Tower B, Lodha Supremus, 1104, 11th Floor, Kolshet Rd, near Air Force Station, Thane, Maharashtra 400607",
    email: "support@oba.com",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      <Navbar />

      {/* ================= HERO ================= */}
      <Box sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "6fr 5fr" },
              alignItems: "center",
              gap: { xs: 6, md: 10 },
            }}
          >
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInLeft}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#FF7A00",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    mb: 2,
                  }}
                >
                  WE’RE HERE TO HELP
                </Typography>

                <Typography variant="h1" sx={{ mb: 3 }}>
                  Get{" "}
                  <Box component="span" sx={{ color: "#FF7A00" }}>
                    In Touch
                  </Box>{" "}
                  With Us
                </Typography>

                <Typography sx={{ color: "#64748B", maxWidth: 480 }}>
                  Have a question or need assistance? Our team is ready to help
                  you succeed with OBA.
                </Typography>
              </motion.div>
            </Box>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
            >
              <Box sx={{ width: { xs: 300, md: 420 }, mx: "auto" }}>
                <img
                  src="/images/ContactHero.svg"
                  alt="Contact"
                  style={{ width: "100%" }}
                />
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* ================= CONTACT METHODS ================= */}
      <Box sx={{ backgroundColor: "#F8FAFC", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="Choose Your Preferred Method"
            highlighted="Preferred Method"
            subtitle="We're available through multiple channels to serve you better."
            align="center"
          />

          <Grid container spacing={4}>
            {[
              {
                icon: <EmailIcon />,
                title: "Email Us",
                desc: "Our team responds within 24 hours",
                value: "support@oba.com",
              },
              {
                icon: <PhoneIcon />,
                title: "Call Us",
                desc: "Mon–Fri from 9am to 6pm",
                value: "+91 8612345670",
              },
              {
                icon: <ChatBubbleIcon />,
                title: "Live Chat",
                desc: "Get instant answers",
                value: "Start a conversation",
              },
            ].map((item) => (
              <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                >
                  <Card
                    elevation={0}
                    sx={{
                      p: 3,
                      height: "100%",
                      borderRadius: 3,
                      boxShadow: "none",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    <Box sx={{ color: "#FF7A00", mb: 2 }}>{item.icon}</Box>
                    <Typography sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#64748B", mb: 2 }}>
                      {item.desc}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ fontWeight: 500 }}>
                        {item.value}
                      </Typography>
                      <ArrowForwardIcon sx={{ color: "#FF7A00" }} />
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= FORM + SIDEBAR ================= */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {/* Shared header so both columns align from top */}
          <SectionHeader
            title="Send Us a Message"
            subtitle="Fill out the form and we’ll get back to you."
          />

          <Grid container spacing={6} alignItems="flex-start">
            {/* FORM */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  {[
                    { label: "First Name", name: "firstName" },
                    { label: "Last Name", name: "lastName" },
                    { label: "Email", name: "email" },
                    { label: "Company", name: "company" },
                    { label: "Phone", name: "phone" },
                    { label: "Subject", name: "subject" },
                  ].map((f) => (
                    <Grid size={{ xs: 12, md: 6 }} key={f.name}>
                      <TextField
                        fullWidth
                        label={f.label}
                        name={f.name}
                        value={(formData as any)[f.name]}
                        onChange={handleChange}
                      />
                    </Grid>
                  ))}

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>

                <PrimaryButton sx={{ mt: 3 }} type="submit">
                  Send Message
                </PrimaryButton>
              </Box>
            </Grid>

            {/* SIDEBAR */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Card
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  boxShadow: "none",
                  border: "1px solid #E5E7EB",
                }}
              >
                <Typography sx={{ fontWeight: 600, mb: 2 }}>
                  Quick Information
                </Typography>

                {[
                  {
                    icon: <AccessTimeIcon />,
                    title: "Business Hours",
                    desc: "Mon–Fri: 9 AM – 6 PM",
                  },
                  {
                    icon: <BoltIcon />,
                    title: "Response Time",
                    desc: "Within 24 hours",
                  },
                  {
                    icon: <GroupIcon />,
                    title: "Support Team",
                    desc: "Dedicated experts",
                  },
                ].map((i) => (
                  <Box key={i.title} sx={{ display: "flex", gap: 2, mb: 2 }}>
                    <Box sx={{ color: "#FF7A00" }}>{i.icon}</Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        {i.title}
                      </Typography>
                      <Typography sx={{ color: "#64748B" }}>
                        {i.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

     {/* ================= OFFICES ================= */}
      <Box sx={{ backgroundColor: "#F8FAFC", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="Our Offices"
            highlighted="Offices"
            subtitle="Visit us at one of our locations."
            align="center"
          />

          <Grid container spacing={4}>
            {offices.map((office) => (
              <Grid size={{ xs: 12, md: 6 }} key={office.city}>
                <Card
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "none",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <BusinessIcon sx={{ color: "#FF7A00", fontSize: 32 }} />

                  <Typography sx={{ fontWeight: 600, mt: 2 }}>
                    {office.city}
                  </Typography>

                  <Typography sx={{ color: "#64748B", mt: 1 }}>
                    {office.address}
                  </Typography>

                  <Typography sx={{ color: "#FF7A00", mt: 2 }}>
                    {office.email}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}