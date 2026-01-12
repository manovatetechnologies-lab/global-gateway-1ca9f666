import { Link } from "react-router-dom";
import { GraduationCap, Stethoscope, Languages, Plane } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad Consulting",
    description: "Expert guidance for undergraduate, postgraduate, and PhD programs in top universities worldwide.",
    link: "/study-abroad",
  },
  {
    icon: Stethoscope,
    title: "MBBS Abroad",
    description: "Affordable medical education in MCI recognized universities with complete admission support.",
    link: "/mbbs-abroad",
  },
  {
    icon: Languages,
    title: "Language Training",
    description: "Comprehensive coaching for IELTS, PTE, TOEFL, and other English proficiency tests.",
    link: "/language-training",
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description: "End-to-end visa application support with 98% success rate and interview preparation.",
    link: "/contact",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-4">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Comprehensive Education Solutions
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            From course selection to post-landing assistance, we provide complete support for your international education journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-primary-foreground/70">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
