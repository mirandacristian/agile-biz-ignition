
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Solutions",
      company: "Traditional Manufacturing SME",
      content: "The MVP was delivered exactly on time and exceeded our expectations. The lean course helped us avoid costly mistakes and focus on what really matters to our customers.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Weber",
      role: "Founder",
      company: "FinTech Startup",
      content: "From idea to functioning product in 2 weeks seemed impossible, but they delivered. The landing page generated 200+ leads in the first month, and the lean methodology course was invaluable.",
      rating: 5,
      avatar: "MW"
    },
    {
      name: "Elena Rodriguez",
      role: "Innovation Director",
      company: "Retail Chain (500+ employees)",
      content: "As a traditional business looking to innovate, this package gave us everything we needed to test our digital product idea quickly and professionally. ROI was clear within 6 weeks.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Ambitious Entrepreneurs
          </h2>
          <p className="text-xl text-slate-600">
            See what our clients say about their MVP journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-slate-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-xs text-slate-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
