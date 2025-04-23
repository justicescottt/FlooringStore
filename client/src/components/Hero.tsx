import { Button } from "@/components/ui/button";
import { COMPANY_TAGLINE, COMPANY_DESCRIPTION } from "@/lib/constants";

export default function Hero() {
  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative bg-primary">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {COMPANY_TAGLINE}
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {COMPANY_DESCRIPTION}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-accent hover:bg-accent/90 text-gray-800 font-bold py-3 px-8 rounded-md text-lg"
              onClick={() => handleClick("#contact")}
            >
              Free In-Home Consultation
            </Button>
            <Button 
              className="bg-white hover:bg-white/90 text-primary font-bold py-3 px-8 rounded-md text-lg"
              variant="outline"
              onClick={() => handleClick("#services")}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt="Beautiful hardwood flooring in modern home" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
