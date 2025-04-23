import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  
  const slidesPerView = isMobile ? 1 : (window.innerWidth >= 1024 ? 3 : 2);
  const maxIndex = Math.ceil(TESTIMONIALS.length / slidesPerView) - 1;

  const goToSlide = (index: number) => {
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;
    setCurrentIndex(index);
  };

  // Generate stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-[#ffb347] text-[#ffb347]" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-[#ffb347] text-[#ffb347]" />);
    }

    return stars;
  };

  // Calculate transform value based on current index and slides per view
  const transformValue = `-${currentIndex * (100 / slidesPerView)}%`;

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Read what our satisfied customers have to say about our flooring services.
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="flex transition-transform duration-300 overflow-hidden"
            style={{ transform: `translateX(${transformValue})` }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <div 
                key={index} 
                className={`w-full ${
                  isMobile ? 'w-full' : (window.innerWidth >= 1024 ? 'w-1/3' : 'w-1/2')
                } flex-shrink-0 px-4`}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="flex text-[#ffb347]">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Testimonial Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white rounded-full w-12 h-12 shadow-md flex items-center justify-center text-[#3b5249] hover:bg-gray-100 z-10"
            onClick={() => goToSlide(currentIndex - 1)}
            disabled={currentIndex === 0}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon" 
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white rounded-full w-12 h-12 shadow-md flex items-center justify-center text-[#3b5249] hover:bg-gray-100 z-10"
            onClick={() => goToSlide(currentIndex + 1)}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight />
          </Button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-[#3b5249]' : 'bg-gray-300'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
