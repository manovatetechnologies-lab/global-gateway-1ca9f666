import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, CheckCircle, Globe } from "lucide-react";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "10,000+", label: "Students Placed" },
  { number: "98%", label: "Visa Success Rate" },
  { number: "50+", label: "Partner Countries" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower students with the knowledge, resources, and guidance they need to pursue world-class education opportunities abroad and build successful global careers.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the most trusted and preferred international education consultancy, known for our integrity, expertise, and commitment to student success.",
  },
];

const reasons = [
  "Personalized counselling by certified experts",
  "Direct partnerships with 500+ universities",
  "Comprehensive visa application support",
  "Pre-departure orientation and briefing",
  "Post-landing assistance and support",
  "Scholarship guidance and financial aid support",
];

const About = () => {
  return (
    <Layout>
      <div className="page-transition">
        {/* Hero Section */}
        <section className="bg-primary py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
                About Us
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Your Trusted Partner in International Education
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Since 2009, we have been helping students achieve their dreams of studying abroad with personalized guidance and unwavering support.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-secondary">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground font-semibold rounded-full text-sm mb-6">
                  Who We Are
                </span>
                <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                  Global Education Consultants
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Global Education Consultants is a premier international education consultancy firm dedicated to helping students realize their dreams of studying abroad. With over 15 years of experience, we have successfully guided thousands of students to prestigious universities across the globe.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team of certified counsellors provides personalized guidance at every step – from course selection and university shortlisting to visa application and pre-departure support. We believe that quality education should be accessible to all, and we work tirelessly to make that a reality.
                </p>
                <Link to="/contact" className="btn-hero">
                  Get Free Consultation
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="card-elevated">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-foreground font-medium">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground font-semibold rounded-full text-sm mb-6">
                  Why Choose Us
                </span>
                <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                  Why Students & Parents Trust Us
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our commitment to excellence and student success has made us one of the most trusted names in international education consulting. Here's why thousands of students choose us every year.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Certified</p>
                      <p className="text-sm text-muted-foreground">AIRC Member</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Global</p>
                      <p className="text-sm text-muted-foreground">Network</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Take the first step towards your international education dream. Our expert counsellors are here to guide you.
            </p>
            <Link to="/contact" className="btn-hero">
              Schedule Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
