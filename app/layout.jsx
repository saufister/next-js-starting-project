import "./globals.css";

export const metadata = {
  title: "NextJS Course Apps",
  description: "Your first NextJS apps!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
