import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Joshua Alexander",
  description: "A developer portfolio made by/for Joshua Alexander",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
