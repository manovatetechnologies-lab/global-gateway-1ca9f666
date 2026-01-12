import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Education Street, Suite 456", "New Delhi, India 110001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 234 567 890", "+1 234 567 891"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@globaleducation.com", "admissions@globaleducation.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 5:00 PM"],
  },
];

const services = [
  "Study Abroad Consultation",
  "MBBS Abroad",
  "IELTS Coaching",
  "PTE Coaching",
  "TOEFL Coaching",
  "Visa Assistance",
  "Other",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <Layout>
      <div className="page-transition">
        {/* Hero Section */}
        <section className="bg-primary py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
                Contact Us
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Get in Touch With Us
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Have questions about studying abroad? Our expert counsellors are here to help you every step of the way.
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
                  Fill out the form below and our expert counsellors will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your goals and how we can help..."
                    />
                  </div>

                  <button type="submit" className="btn-hero flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Map */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Our Location
                </h2>
                <p className="text-muted-foreground mb-8">
                  Visit our office for a face-to-face consultation with our expert counsellors.
                </p>
                <div className="rounded-2xl overflow-hidden h-[500px] bg-secondary">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5400429369!2d77.04417450562502!3d28.52755441953125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
