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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
                
                if (shouldBeDark) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`antialiased dark:bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
