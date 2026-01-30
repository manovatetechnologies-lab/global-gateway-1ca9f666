import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  GraduationCap,
  Briefcase,
  Globe,
  School,
  FileText,
  Award,
  CreditCard,
  Files,
  Stamp,
  MessageCircle,
  Plane,
  Home,
  DollarSign,
} from "lucide-react";

const services = [
  {
    title: "Psychometric Test",
    desc: "Identify the right career path based on aptitude, interests, and personality.",
    link: "/services/psychometric-test",
    icon: GraduationCap,
  },
  {
    title: "Career Counselling",
    desc: "Personalized one-on-one guidance from expert education advisors.",
    link: "/services/career-counselling",
    icon: Briefcase,
  },
  {
    title: "Country Selection",
    desc: "Choose the best country based on academics, budget, and future scope.",
    link: "/services/country-selection",
    icon: Globe,
  },
  {
    title: "Course / University Selection",
    desc: "Shortlisting the right universities aligned with your profile.",
    link: "/services/course-university",
    icon: School,
  },
  {
    title: "Admissions",
    desc: "End-to-end application support with document verification.",
    link: "/services/admissions",
    icon: FileText,
  },
  {
    title: "Scholarships",
    desc: "Guidance on scholarships and financial aid opportunities.",
    link: "/services/scholarships",
    icon: Award,
  },
  {
    title: "Educational Loan",
    desc: "Assistance in securing education loans from banks and NBFCs.",
    link: "/services/education-loan",
    icon: CreditCard,
  },
  {
    title: "Documentation",
    desc: "Complete SOP, LOR, resume and application documentation support.",
    link: "/services/documentation",
    icon: Files,
  },
  {
    title: "Student Visa",
    desc: "Expert student visa filing assistance with high success rates.",
    link: "/services/student-visa",
    icon: Stamp,
  },
  {
    title: "Mock Visa Interview",
    desc: "Professional mock interviews to prepare for visa success.",
    link: "/services/mock-visa",
    icon: MessageCircle,
  },
  {
    title: "Travel Services",
    desc: "Flight booking and international travel assistance for students.",
    link: "/services/travel",
    icon: Plane,
  },
  {
    title: "Accommodation",
    desc: "Safe and affordable student accommodation options abroad.",
    link: "/services/accommodation",
    icon: Home,
  },
  {
    title: "Forex Services",
    desc: "Foreign exchange and international money transfer assistance.",
    link: "/services/forex",
    icon: DollarSign,
  },
];

const Services = () => {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 bg-[#f8fafc]">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Our Study Abroad Services
            </h1>
            <p className="text-gray-600 text-lg">
              Complete end-to-end overseas education support — from career
              counselling to visa success and beyond.
            </p>
          </div>

          {/* Premium Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group rounded-2xl p-8 bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <span className="inline-flex items-center text-primary font-semibold">
                  Explore Service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
