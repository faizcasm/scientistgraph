import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Scholarixa by Global Research Publications",
    template: "%s",
  },
  description: "Scholarixa by Global Research Publications — From idea to publication, we handle everything. Research writing, publication support, patent filing, and data analysis.",
  metadataBase: new URL("https://scholarixa.com"),
  openGraph: {
    title: "Scholarixa by Global Research Publications",
    description: "From idea to publication, we handle everything.",
    url: "https://scholarixa.com",
    siteName: "Scholarixa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground font-sans">
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-85 [background:radial-gradient(900px_420px_at_12%_2%,var(--sg-tint),transparent_65%),radial-gradient(800px_360px_at_95%_18%,rgba(43,196,155,0.11),transparent_70%)]" />
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
