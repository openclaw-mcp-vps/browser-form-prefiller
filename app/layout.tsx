import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Browser Form Prefiller – Auto-fill forms with saved templates",
  description: "Chrome extension that saves form templates and auto-fills repetitive web forms with one click. Built for developers and sales teams."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4586396e-50dd-4d41-8214-28a5907e259e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
