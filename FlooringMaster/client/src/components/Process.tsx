import { ChevronRight } from "lucide-react";

const processSteps = [
  {
    number: 1,
    title: "Consultation",
    description: "Schedule a free in-home consultation to discuss your flooring needs and preferences."
  },
  {
    number: 2,
    title: "Measurement & Quote",
    description: "We'll measure your space and provide a detailed quote with transparent pricing."
  },
  {
    number: 3,
    title: "Installation",
    description: "Our expert team will install your new flooring with precision and care."
  },
  {
    number: 4,
    title: "Final Inspection",
    description: "We'll walk through the completed project together to ensure your complete satisfaction."
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Simple Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make getting new floors easy with our streamlined approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-lg shadow-md text-center h-full">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#3b5249] text-white text-2xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="w-6 h-6 text-[#3b5249]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
