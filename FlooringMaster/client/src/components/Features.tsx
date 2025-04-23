import { Medal, Bolt, ThumbsUp } from "lucide-react";

const features = [
  {
    title: "Premium Quality",
    description: "We use only the highest quality materials and techniques to ensure your floors last for years to come.",
    icon: <Medal className="w-6 h-6" />
  },
  {
    title: "Expert Installation",
    description: "Our experienced team provides professional installation with meticulous attention to detail.",
    icon: <Bolt className="w-6 h-6" />
  },
  {
    title: "Customer Satisfaction",
    description: "We're not happy until you're happy. Our commitment to excellence ensures your complete satisfaction.",
    icon: <ThumbsUp className="w-6 h-6" />
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg text-center transition-transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#3b5249]/10 text-[#3b5249] mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
