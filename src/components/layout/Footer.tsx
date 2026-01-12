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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-primary font-display font-bold text-xl">GE</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Global Education</h3>
                <p className="text-sm text-primary-foreground/70">Consultants</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Your trusted partner for international education. We help students achieve their dreams of studying abroad with personalized guidance and support.
            </p>
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
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
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
                <Link to="/language-training" className="text-primary-foreground/80 hover:text-accent transition-colors">Language Training</Link>
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
                <MapPin className="w-5 h-5 mt-1 text-accent" />
                <span className="text-primary-foreground/80">
                  123 Education Street, Suite 456<br />
                  New Delhi, India 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@globaleducation.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@globaleducation.com
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
            © 2024 Global Education Consultants. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
