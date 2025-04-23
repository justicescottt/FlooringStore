import { COMPANY_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function About() {
  const handleButtonClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About {COMPANY_NAME}</h2>
            <p className="text-gray-600 mb-6">
              For over 15 years, {COMPANY_NAME} has been transforming spaces with exceptional flooring solutions. 
              Our commitment to quality craftsmanship and customer satisfaction has made us a trusted name in the industry.
            </p>
            <p className="text-gray-600 mb-6">
              We're a family-owned business that takes pride in every project we undertake. 
              Our team of experienced professionals is dedicated to providing personalized service and 
              expert installation for all types of flooring needs.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-[#3b5249] mb-2">500+</div>
                <p className="text-gray-600">Completed Projects</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#3b5249] mb-2">15+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#3b5249] mb-2">100%</div>
                <p className="text-gray-600">Satisfaction Guarantee</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#3b5249] mb-2">24/7</div>
                <p className="text-gray-600">Customer Support</p>
              </div>
            </div>
            <Button 
              className="bg-[#3b5249] hover:bg-[#3b5249]/90 text-white" 
              onClick={handleButtonClick}
            >
              Contact Our Team
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-64 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1581321825660-aa4421a4a0d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Flooring Installation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-40 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Carpet Installation" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden h-40 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Team Working" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-64 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Finished Flooring" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
