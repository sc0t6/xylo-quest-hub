import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById("faq");
    faqSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            XYLO
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
            The Ultimate Roblox Executor
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience unmatched performance, stability, and features with Xylo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 transition-all hover:scale-105"
              onClick={scrollToFAQ}
            >
              Learn More
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
