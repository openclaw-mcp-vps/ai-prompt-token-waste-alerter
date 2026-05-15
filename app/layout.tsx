import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt Token Waste Alerter — Cut AI Costs by 30–50%",
  description: "Detect inefficient prompts that waste tokens and money. Analyze prompt logs to identify redundant instructions, excessive context, and optimization opportunities."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8be5a0ab-a4a0-4089-8bcd-3f3a7ddfe91a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
