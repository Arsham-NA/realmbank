import { Inter } from "next/font/google";
import "./_globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Realmbank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto overflow-x-hidden`} style={{maxWidth: "1600px"}}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
