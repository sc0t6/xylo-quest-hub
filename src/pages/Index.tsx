import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
