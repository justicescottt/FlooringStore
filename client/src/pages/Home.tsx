import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Cta from "@/components/Cta";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { COMPANY_NAME } from "@/lib/constants";
import { useEffect } from "react";

export default function Home() {
  // Set page title and meta description
  useEffect(() => {
    document.title = `${COMPANY_NAME} | Professional Installation Services`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Expert flooring installation services for residential and commercial properties. Quality craftsmanship and exceptional results guaranteed."
      );
    }
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Cta />
        <Portfolio />
        <Testimonials />
        <About />
        <Process />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
