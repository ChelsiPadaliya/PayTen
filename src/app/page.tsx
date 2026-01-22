import type { Metadata } from "next";
import TopHeaderOne from "@/components/TopHeaderOne";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import BannerOne from "@/components/BannerOne";
import AOSWrap from "@/helper/AOSWrap";
import OurFeatureOne from "@/components/OurFeatureOne";
import PaynoneOne from "@/components/PaynoneOne";
import ServicesOne from "@/components/ServicesOne";
import RequestSectionOne from "@/components/RequestSectionOne";
import WorkingSectionOne from "@/components/WorkingSectionOne";
import MobileSectionOne from "@/components/MobileSectionOne";
import TestimonialsOne from "@/components/TestimonialsOne";
import FAQOne from "@/components/FAQOne";
import PaymentMethodOne from "@/components/PaymentMethodOne";
import BlogOne from "@/components/BlogOne";
import NewsletterOne from "@/components/NewsletterOne";
import FooterOne from "@/components/FooterOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home | PayTen Money Exchange Next JS Template",
    description:
      "PayTen is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Home | PayTen",
      description:
        "PayTen is a professional Next JS Template for online money exchange, remittance, and digital payment services. Clean design, responsive layout, and modern UI components included.",

      type: "website",
    
    },
  };
};

export default function Home() {
  return (
    <AOSWrap>
      {/* <Preloader /> */}
      <Preloader />

      {/* TopHeaderOne */}
      <TopHeaderOne />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />

      {/* OurFeatureOne */}
      <OurFeatureOne />

      {/* PaynoneOne */}
      <PaynoneOne />

      {/* ServicesOne */}
      <ServicesOne />

      {/* RequestSectionOne */}
      <RequestSectionOne />

      {/* WorkingSectionOne */}
      <WorkingSectionOne />

      {/* MobileSectionOne */}
      <MobileSectionOne />

      {/* TestimonialsOne */}
      <TestimonialsOne />

      {/* FAQOne */}
      <FAQOne />

      {/* PaymentMethodOne */}
      <PaymentMethodOne />

      {/* BlogOne */}
      <BlogOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
}
