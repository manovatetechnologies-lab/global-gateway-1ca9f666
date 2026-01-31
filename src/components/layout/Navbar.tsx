

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
const hideScrollbarStyle: React.CSSProperties = {
  msOverflowStyle: "none",
};

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}
interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
  type?: "mega"; // 👈 ADD THIS
}

const dropdownStyle: React.CSSProperties = {
  maxHeight: "280px",              // 👈 smaller = premium
  overflowY: "auto",
  background: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 16px 32px rgba(0,0,0,0.12)",
  padding: "6px 0",
  scrollbarWidth: "none",          // Firefox hide scrollbar
};


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
    { label: "MBBS in Uzbekistan", href: "/mbbs-abroad#uzbekistan" },
    { label: "MBBS in Kyrgyzstan", href: "/mbbs-abroad#kyrgyzstan" },
    { label: "MBBS in Armenia", href: "/mbbs-abroad#armenia" },
    { label: "MBBS in Azerbaijan", href: "/mbbs-abroad#azerbaijan" },
    { label: "MBBS in Poland", href: "/mbbs-abroad#poland" },
    { label: "MBBS in Romania", href: "/mbbs-abroad#romania" },
    { label: "MBBS in Hungary", href: "/mbbs-abroad#hungary" },
    { label: "MBBS in Bulgaria", href: "/mbbs-abroad#bulgaria" }
  ],
},
{
  label: "Services",
  href: "/services",
  type: "mega",
  dropdown: [
    { label: "Psychometric Test", href: "/services/psychometric-test" },
    { label: "Career Counselling", href: "/services/career-counselling" },
    { label: "Country Selection", href: "/services/country-selection" },
    { label: "Course / University", href: "/services/course-university" },
    { label: "Admissions", href: "/services/admissions" },
    { label: "Scholarships", href: "/services/scholarships" },
    { label: "Educational Loan", href: "/services/education-loan" },

    { label: "Documentation", href: "/services/documentation" },
    { label: "Student Visa", href: "/services/student-visa" },
    { label: "Mock Visa Interview", href: "/services/mock-visa" },
    { label: "Travel Services", href: "/services/travel" },
    { label: "Accommodation", href: "/services/accommodation" },
    { label: "Forex Services", href: "/services/forex" },
  ],
},


  {
  label: "Courses",
  href: "/courses",
  dropdown: [
    { label: "Bachelor’s Programs", href: "/courses/bachelors" },
    { label: "Master’s Programs", href: "/courses/masters" },
    { label: "PhD / Doctorate", href: "/courses/phd" },
    { label: "Diploma & PG Diploma", href: "/courses/diploma" },
    { label: "Professional Certifications", href: "/courses/certifications" },
  ],
},

  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string | null>(null);
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
      ? "bg-white shadow-lg py-4"
      : "bg-white/95 backdrop-blur-sm py-4"
  }`}
>

      <div className="container-custom">
        <div className="flex items-center justify-between">
         {/* Logo */}
<Link to="/" className="flex items-center gap-3">
  <img
  src="/logo.png"
  alt="Global Education"
  className="h-16 w-auto object-contain scale-[1.7] -my-6 origin-left"
/>

  
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
  style={{ ...dropdownStyle, ...hideScrollbarStyle }}
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
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setExpandedMobileItems(
                          expandedMobileItems === item.label ? null : item.label
                        )
                      }
                      className="w-full flex items-center justify-between py-2 font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedMobileItems === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedMobileItems === item.label && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.label}
                            to={dropItem.href}
                            className="block py-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-2 font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
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
