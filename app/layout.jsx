import { Inter } from "next/font/google";
import "./_globals.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PageNotification from "./components/page_notification/page_notification";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Realmbank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto overflow-x-hidden`} style={{maxWidth: "1600px"}}>
        <Header />
        <PageNotification />
        {children}
        <Footer />
      </body>
    </html>
  );
}
