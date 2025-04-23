import { Button } from "@/components/ui/button";

export default function Cta() {
  const handleCtaClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 bg-[#3b5249]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your space?</h2>
            <p className="text-xl text-white/80">Schedule a free consultation and get a no-obligation quote today.</p>
          </div>
          <div>
            <Button 
              className="bg-white hover:bg-gray-100 text-[#3b5249] font-bold py-3 px-8 rounded-md text-lg"
              onClick={handleCtaClick}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
