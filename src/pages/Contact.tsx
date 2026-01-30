import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";


const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "2nd Floor, 12, Rajiv Gandhi Salai, Srinivasa Nagar, Kandhanchavadi, Perungudi, Chennai, Tamil Nadu 600096",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["9087778000"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@optimusoverseasedu.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 5:00 PM"],
  },
];

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ CONNECTED TO FORMSPREE (ONLY CHANGE)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mreeqypb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for contacting us. We'll get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your internet connection.",
      });
    }
  };

  return (
    <>
    <Layout>
      <Helmet>
  {/* Primary SEO */}
  <title>
    Contact Optimus Overseas Education | Free Study Abroad Consultation
  </title>

  <meta
    name="description"
    content="Contact Optimus Overseas Educational Consultants for free study abroad counselling, MBBS abroad guidance, admissions, visa, loans, and overseas education support. Visit our Chennai office or call us today."
  />

  <meta
    name="keywords"
    content="contact study abroad consultants, study abroad consultants chennai, overseas education counselling, free study abroad consultation"
  />

  <link
    rel="canonical"
    href="https://www.optimusoverseasedu.com/contact"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Contact Optimus Overseas Education | Free Study Abroad Consultation"
  />
  <meta
    property="og:description"
    content="Get in touch with Optimus Overseas Educational Consultants for expert study abroad guidance, admissions, visa support, and free counselling."
  />
  <meta
    property="og:url"
    content="https://www.optimusoverseasedu.com/contact"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://www.optimusoverseasedu.com/og/optimus-footer.jpeg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Contact Optimus Overseas Education"
  />
  <meta
    name="twitter:description"
    content="Book a free study abroad consultation with expert counsellors at Optimus Overseas Education."
  />
  <meta
    name="twitter:image"
    content="https://www.optimusoverseasedu.com/og/optimus-footer.jpeg"
  />
</Helmet>

      <div className="page-transition">
        {/* Hero Section */}
        <section className="bg-primary py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
                Contact Us
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
  Contact Optimus Overseas Educational Consultants
</h1>
              <p className="text-xl text-primary-foreground/80">
                Have questions about studying abroad? Our expert counsellors are
                here to help you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-secondary">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="card-elevated text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Book Your Free Consultation
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our expert counsellors will get back
                  to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border"
                      placeholder="Phone Number"
                    />
                    <input
                      type="text"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border"
                      placeholder="Service Interested In"
                    />
                  </div>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border resize-none"
                    placeholder="Your Message"
                  />

                  <button
                    type="submit"
                    className="btn-hero flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-[500px] bg-secondary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0331749280313!2d80.248544!3d12.969729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6c837857cf%3A0xa4c6190d9941ab1e!2s2nd%20Floor%2C%2012%2C%20Rajiv%20Gandhi%20Salai%2C%20Srinivasa%20Nagar%2C%20Kandhanchavadi%2C%20Perungudi%2C%20Chennai%2C%20Tamil%20Nadu%20600096!5e0!3m2!1sen!2sin!4v1768858262338!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
    </>
  );
};

export default Contact;
