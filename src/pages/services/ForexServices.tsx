import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  DollarSign,
  Globe,
  ShieldCheck,
  ArrowLeftRight,
  CreditCard,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const features = [
  {
    icon: ArrowLeftRight,
    title: "Foreign Exchange Assistance",
    desc: "Get competitive exchange rates for tuition fees, living expenses, and travel needs.",
  },
  {
    icon: CreditCard,
    title: "International Money Transfer",
    desc: "Secure and fast international fund transfers through authorized banking partners.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & RBI-Compliant",
    desc: "All forex transactions are fully compliant with RBI and international regulations.",
  },
  {
    icon: Globe,
    title: "Multi-Country Support",
    desc: "Forex services available for USA, UK, Canada, Australia, Europe, and more.",
  },
];

const ForexServices = () => {
  return (
    <Layout>
      <Helmet>
        <title>
          Forex Services for Students | Optimus Overseas Educational Consultants
        </title>
        <meta
          name="description"
          content="Get secure and affordable forex services for overseas education. Optimus Overseas offers student-friendly foreign exchange and international money transfer support."
        />
      </Helmet>

      {/* HERO */}
   <section className="bg-primary pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
              Our Services
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
             Forex Services
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
             Manage your international education finances with confidence. We
            provide safe, transparent, and student-friendly forex solutions for
            tuition payments, living expenses, and overseas transactions.
              
            </p>
          </div>
        </div>
      </section>

      {/* WHY FOREX */}
      <section className="section-padding bg-secondary">
        <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Why Forex Services Matter
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              International education involves multiple cross-border payments.
              Choosing the right forex partner helps you save money, avoid risks,
              and ensure compliance with global regulations.
            </p>

            <ul className="space-y-3 text-foreground">
              <li>✔ Lower exchange margins than regular banks</li>
              <li>✔ Faster international fund transfers</li>
              <li>✔ End-to-end documentation support</li>
              <li>✔ Dedicated student forex assistance</li>
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div key={index} className="card-elevated">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="font-display text-4xl font-bold text-foreground mb-12">
            Our Forex Assistance Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Requirement Analysis",
              "Rate Comparison",
              "Documentation Support",
              "Secure Transfer",
            ].map((step, i) => (
              <div key={i} className="card-elevated text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <p className="font-semibold text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BOX */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl px-10 py-14 text-center relative -mb-24">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Need Help with Forex & Payments?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get expert forex guidance, best exchange rates, and hassle-free
              international money transfers for your overseas education.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition"
            >
              Talk to a Forex Expert
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForexServices;
