import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Stethoscope, GraduationCap, DollarSign, CheckCircle, Globe, Clock } from "lucide-react";

const countries = [
  {
    id: "russia",
    name: "Russia",
    duration: "6 years",
    fees: "$3,000 - $8,000/year",
    recognition: "MCI, WHO, UNESCO",
    features: ["No entrance exam", "English medium", "Low cost of living"],
  },
  {
    id: "georgia",
    name: "Georgia",
    duration: "6 years",
    fees: "$4,000 - $8,000/year",
    recognition: "MCI, WHO",
    features: ["USMLE coaching", "Modern facilities", "Safe environment"],
  },
  {
    id: "philippines",
    name: "Philippines",
    duration: "5.5 years",
    fees: "$3,500 - $6,000/year",
    recognition: "MCI, WHO, CHED",
    features: ["English medium", "US-based curriculum", "Clinical rotations"],
  },
  {
    id: "kazakhstan",
    name: "Kazakhstan",
    duration: "5 years",
    fees: "$3,000 - $5,000/year",
    recognition: "MCI, WHO",
    features: ["Affordable fees", "Quality education", "Growing medical hub"],
  },
];

const eligibility = [
  "Minimum 50% in 10+2 with Physics, Chemistry, Biology",
  "NEET qualification (for Indian students)",
  "Age 17 years or above as on 31st December",
  "Valid passport",
  "No entrance exam for most universities",
];

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Education",
    description: "Study MBBS at a fraction of the cost compared to private medical colleges in India.",
  },
  {
    icon: Globe,
    title: "Global Recognition",
    description: "Degrees recognized by MCI, WHO, and medical councils worldwide.",
  },
  {
    icon: GraduationCap,
    title: "Quality Education",
    description: "Modern infrastructure, experienced faculty, and practical training.",
  },
  {
    icon: Clock,
    title: "No Donation",
    description: "Transparent fee structure with no capitation or hidden charges.",
  },
];

const MBBSAbroad = () => {
  return (
    <Layout>
      <div className="page-transition">
        {/* Hero Section */}
        <section className="bg-primary py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
                MBBS Abroad
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Pursue Your Medical Dreams Globally
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Affordable, MCI-recognized MBBS programs in top medical universities abroad. Start your journey to becoming a doctor today.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                Why Study MBBS Abroad?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the advantages of pursuing your medical education internationally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="card-elevated text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                Top Destinations for MBBS
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our partner universities in these popular medical education destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {countries.map((country) => (
                <div key={country.id} id={country.id} className="card-elevated">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                      <Stethoscope className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        MBBS in {country.name}
                      </h3>
                      <p className="text-muted-foreground">{country.recognition}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">{country.duration}</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm text-muted-foreground">Tuition Fees</p>
                      <p className="font-semibold text-foreground">{country.fees}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {country.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="btn-hero w-full text-center mt-6"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
                  Eligibility
                </span>
                <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
                  Eligibility Criteria for MBBS Abroad
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  Check if you meet the basic requirements to pursue MBBS in our partner universities abroad.
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8">
                <div className="space-y-4">
                  {eligibility.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-primary-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-accent to-gold-dark">
          <div className="container-custom text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Start Your Medical Journey?
            </h2>
            <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
              Get expert guidance on MBBS admission, documentation, and visa process.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Free Counselling
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MBBSAbroad;
