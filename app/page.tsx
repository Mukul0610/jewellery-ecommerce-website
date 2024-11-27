import BannerSection from "@/components/BannerSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import FullWidthBanner from "@/components/FullWidthBanner";
import Header from "@/components/Header";
import InstagramSection from "@/components/InstagramSection";
import NewsletterSection from "@/components/NewsletterSection";
import ProductSection from "@/components/ProductSection";
import Slider from "@/components/Slider";


export default function Home() {
  return (
    
    <>
    <Header/>
    <main>
      <Slider/>
      <BannerSection/>
      <ProductSection title="Featured Products" />
      <FullWidthBanner/>
      <ProductSection title="Bestselling Products" />
      <BlogSection />
      <InstagramSection/>
      <NewsletterSection/>
    </main>
    <Footer/>
    </>
  );
}
