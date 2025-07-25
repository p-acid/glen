import localFont from "next/font/local";

import "@/app/styles/globals.css";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className={`${pretendard.className} h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
