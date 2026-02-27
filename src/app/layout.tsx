import React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "../theme/ThemeProvider";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "../../styles/global.css";

export const metadata: Metadata = {
  title: "OBA - Order Booking Application",
  description: "Streamlining order management for businesses worldwide",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <style>{`
          @media (max-width: 768px) {
            body, main, #__next, .MuiContainer-root {
              text-align: center !important;
              margin-left: auto !important;
              margin-right: auto !important;
              justify-content: center !important;
              align-items: center !important;
              display: block !important;
            }
            * {
              text-align: center !important;
            }
          }
        `}</style> */}
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
