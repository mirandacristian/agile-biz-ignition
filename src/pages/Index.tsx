
import Hero from "@/components/Hero";
import ServiceOverview from "@/components/ServiceOverview";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";
import VideoDemo from "@/components/VideoDemo";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServiceOverview />
      <Testimonials />
      <Comparison />
      <VideoDemo />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
