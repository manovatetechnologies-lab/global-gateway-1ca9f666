import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone, Menu, X } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Study Abroad",
    href: "/study-abroad",
    dropdown: [
      { label: "Study in USA", href: "/study-abroad#usa" },
      { label: "Study in UK", href: "/study-abroad#uk" },
      { label: "Study in Canada", href: "/study-abroad#canada" },
      { label: "Study in Australia", href: "/study-abroad#australia" },
      { label: "Study in Europe", href: "/study-abroad#europe" },
    ],
  },
  {
    label: "MBBS Abroad",
    href: "/mbbs-abroad",
    dropdown: [
      { label: "MBBS in Russia", href: "/mbbs-abroad#russia" },
      { label: "MBBS in Georgia", href: "/mbbs-abroad#georgia" },
      { label: "MBBS in Philippines", href: "/mbbs-abroad#philippines" },
      { label: "MBBS in Kazakhstan", href: "/mbbs-abroad#kazakhstan" },
    ],
  },
  {
    label: "Language Training",
    href: "/language-training",
    dropdown: [
      { label: "IELTS Coaching", href: "/language-training#ielts" },
      { label: "PTE Coaching", href: "/language-training#pte" },
      { label: "TOEFL Coaching", href: "/language-training#toefl" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">
                GE
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold text-primary">
                Global Education
              </h1>
              <p className="text-xs text-muted-foreground">
                Your Gateway to World-Class Education
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`nav-link flex items-center gap-1 ${
                    location.pathname === item.href ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {item.dropdown && (
                  <div
                    className={`dropdown-menu ${
                      activeDropdown === item.label ? "active" : ""
                    }`}
                  >
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.label}
                        to={dropItem.href}
                        className="dropdown-item"
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="hidden md:flex items-center gap-2 text-primary font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>+1 234 567 890</span>
            </a>
            <Link
              to="/contact"
              className="hidden md:inline-flex btn-hero text-sm px-6 py-3"
            >
              Free Counselling
            </Link>
            <button
              className="lg:hidden p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  to={item.href}
                  className="block py-2 font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.label}
                        to={dropItem.href}
                        className="block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="btn-hero text-sm px-6 py-3 mt-4 w-full text-center"
            >
              Free Counselling
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
