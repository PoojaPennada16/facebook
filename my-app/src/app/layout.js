import "./globals.css";

export const metadata = {
  title: "Facebook UI",
  description: "Login Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
