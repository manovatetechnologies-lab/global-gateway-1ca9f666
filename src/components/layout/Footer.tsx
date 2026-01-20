import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
  <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
    Optimus Global Education
  </h3>

  <p className="text-primary-foreground/80 leading-relaxed">
    Your trusted partner for international education. We guide students
    through every step of their study abroad journey with expert counselling,
    global university partnerships, and personalized support.
  </p>
</div>

            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/optimusoverseasedu/?viewAsMember=true" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/study-abroad" className="text-primary-foreground/80 hover:text-accent transition-colors">Study Abroad</Link>
              </li>
              <li>
                <Link to="/mbbs-abroad" className="text-primary-foreground/80 hover:text-accent transition-colors">MBBS Abroad</Link>
              </li>
              <li>
                <Link to="/courses" className="text-primary-foreground/80 hover:text-accent transition-colors">Courses offered</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Study Destinations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/study-abroad#usa" className="text-primary-foreground/80 hover:text-accent transition-colors">Study in USA</Link>
              </li>
              <li>
                <Link to="/study-abroad#uk" className="text-primary-foreground/80 hover:text-accent transition-colors">Study in UK</Link>
              </li>
              <li>
                <Link to="/study-abroad#canada" className="text-primary-foreground/80 hover:text-accent transition-colors">Study in Canada</Link>
              </li>
              <li>
                <Link to="/study-abroad#australia" className="text-primary-foreground/80 hover:text-accent transition-colors">Study in Australia</Link>
              </li>
              <li>
                <Link to="/study-abroad#europe" className="text-primary-foreground/80 hover:text-accent transition-colors">Study in Europe</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
  <MapPin className="w-5 h-5 mt-1 text-accent shrink-0" />

  <span className="text-base text-primary-foreground/80 leading-relaxed">
    2nd Floor, 12, Rajiv Gandhi Salai,<br />
    Srinivasa Nagar,<br />
    Kandhanchavadi, Perungudi,<br />
    Chennai, Tamil Nadu 600096
  </span>
</li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:9087778000" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  9087778000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@optimusoverseasedu.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                   info@optimusoverseasedu.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Optimus Global Education. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
