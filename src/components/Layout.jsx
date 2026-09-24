import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import WhatsAppFloat from "./WhatsAppFloat";

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" role="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
