import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

type FilterCategory = "all" | "tile" | "vinyl" | "carpet" | "commercial";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFilterClick = (filter: FilterCategory) => {
    setActiveFilter(filter);
  };

  const filteredPortfolio = activeFilter === "all" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our gallery to see examples of our exceptional workmanship and attention to detail.
          </p>
        </div>
        
        {/* Gallery Filter */}
        <div className="flex flex-wrap justify-center mb-10">
          <Button
            onClick={() => handleFilterClick("all")}
            variant={activeFilter === "all" ? "default" : "outline"}
            className={`m-2 ${activeFilter === "all" ? "bg-[#3b5249]" : ""}`}
          >
            All
          </Button>
          <Button
            onClick={() => handleFilterClick("tile")}
            variant={activeFilter === "tile" ? "default" : "outline"}
            className={`m-2 ${activeFilter === "tile" ? "bg-[#3b5249]" : ""}`}
          >
            Tile
          </Button>
          <Button
            onClick={() => handleFilterClick("vinyl")}
            variant={activeFilter === "vinyl" ? "default" : "outline"}
            className={`m-2 ${activeFilter === "vinyl" ? "bg-[#3b5249]" : ""}`}
          >
            Vinyl
          </Button>
          <Button
            onClick={() => handleFilterClick("carpet")}
            variant={activeFilter === "carpet" ? "default" : "outline"}
            className={`m-2 ${activeFilter === "carpet" ? "bg-[#3b5249]" : ""}`}
          >
            Carpet
          </Button>
          <Button
            onClick={() => handleFilterClick("commercial")}
            variant={activeFilter === "commercial" ? "default" : "outline"}
            className={`m-2 ${activeFilter === "commercial" ? "bg-[#3b5249]" : ""}`}
          >
            Commercial
          </Button>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md cursor-pointer">
                  <div className="relative group h-72 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#3b5249]/70 opacity-0 group-hover:opacity-80 flex items-center justify-center transition-opacity duration-300">
                      <span className="text-white text-lg font-bold">View Project</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <Badge variant="outline" className="mt-2 bg-gray-100">{item.category}</Badge>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Badge variant="outline" className="mb-4 bg-gray-100">{item.category}</Badge>
                    
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold mb-2">Project Details</h4>
                      <p className="text-gray-600 mb-6">
                        This project showcases our attention to detail and commitment to quality. 
                        The client wanted a durable, beautiful floor that would complement their space.
                      </p>
                      
                      <Button 
                        onClick={scrollToContact}
                        className="bg-[#3b5249] hover:bg-[#3b5249]/90 text-white"
                      >
                        Request Similar Project
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            className="bg-[#3b5249] hover:bg-[#3b5249]/90 text-white font-bold py-3 px-8"
          >
            Request Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
