import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared";
import ThemeProvider from "@/providers/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "700", "800"],
});

export const metadata = {
  title: "Car Doctor",
  description: "A system for pre booking servicing car",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white dark:bg-gray-950`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
