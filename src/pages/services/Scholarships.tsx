import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  Award,
  Wallet,
  GraduationCap,
  CheckCircle,
} from "lucide-react";

const scholarshipTypes = [
  {
    title: "Merit-Based Scholarships",
    desc: "Awarded based on academic excellence, test scores, and achievements.",
    icon: GraduationCap,
  },
  {
    title: "Need-Based Scholarships",
    desc: "Designed for students with financial constraints but strong academic potential.",
    icon: Wallet,
  },
  {
    title: "University Scholarships",
    desc: "Offered directly by universities to attract high-performing international students.",
    icon: Award,
  },
];

const coverage = [
  "Tuition fee reduction",
  "Partial or full tuition waiver",
  "Living expense support",
  "Accommodation assistance",
  "Research & course-specific grants",
];

const eligibility = [
  "Strong academic background",
  "Valid offer letter from university",
  "English proficiency (IELTS / TOEFL where required)",
  "Well-written SOP",
  "Early application submission",
];

const Scholarships = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-primary pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
              Our Services
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Scholarships Assistance
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
                We help students secure scholarships and financial aid opportunities
            that significantly reduce the cost of studying abroad.
            </p>
          </div>
        </div>
      </section>
      {/* TYPES */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Types of Scholarships We Help With
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple funding options based on merit, need, and university criteria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {scholarshipTypes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE + ELIGIBILITY */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Coverage */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <h3 className="font-display text-3xl font-bold text-foreground mb-6">
                What Scholarships Cover
              </h3>

              <ul className="space-y-4">
                {coverage.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <h3 className="font-display text-3xl font-bold text-foreground mb-6">
                Scholarship Eligibility
              </h3>

              <ul className="space-y-4">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BOX */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl px-10 py-14 text-center relative -mb-24">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Reduce Your Study Abroad Costs
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experts identify and apply for scholarships that maximize your
              chances of financial support.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition"
            >
              Check Scholarship Eligibility
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scholarships;
