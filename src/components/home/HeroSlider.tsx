import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, GraduationCap, Users, Award, Globe } from "lucide-react";
import heroStudyAbroad from "@/assets/hero-study-abroad.jpg";
import heroMbbs from "@/assets/hero-mbbs.jpg";
import heroLanguage from "@/assets/hero-language.jpg";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Study Abroad",
    subtitle: "Your Gateway to World-Class Education",
    description: "Explore top universities in USA, UK, Canada, Australia & Europe with expert guidance.",
    image: heroStudyAbroad,
    badge: "USA • UK • Canada • Australia",
    link: "/study-abroad",
  },
  {
    id: 2,
    title: "MBBS Abroad",
    subtitle: "Pursue Your Medical Dreams Globally",
    description: "Affordable MBBS programs in Russia, Georgia, Philippines & Kazakhstan with MCI recognized universities.",
    image: heroMbbs,
    badge: "MCI Recognized Universities",
    link: "/mbbs-abroad",
  },
  {
    id: 3,
    title: "Language Training",
    subtitle: "Master Your English Proficiency",
    description: "Expert coaching for IELTS, PTE & TOEFL with proven success rates.",
    image: heroLanguage,
    badge: "IELTS • PTE • TOEFL",
    link: "/language-training",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-overlay-gradient" />
          </div>

          {/* Content */}
          <div className="relative h-full container-custom flex items-center">
            <div className="max-w-2xl">
              <div
                className={`transition-all duration-700 delay-200 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span className="inline-block px-4 py-2 bg-accent text-primary font-semibold rounded-full text-sm mb-6">
                  {slide.badge}
                </span>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 font-display mb-4">
                  {slide.subtitle}
                </p>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to={slide.link} className="btn-hero">
                    Learn More
                  </Link>
                  <Link to="/contact" className="btn-outline-hero">
                    Book Free Counselling
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <div
            className={`floating-badge right-20 top-1/4 animate-float transition-all duration-700 delay-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">10,000+</p>
              <p className="text-sm text-muted-foreground">Students Placed</p>
            </div>
          </div>

          <div
            className={`floating-badge right-40 bottom-1/4 animate-float transition-all duration-700 delay-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "1s" }}
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">50+ Countries</p>
              <p className="text-sm text-muted-foreground">Worldwide Network</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slider-dot ${index === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
