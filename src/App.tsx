import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import StudyAbroad from "./pages/StudyAbroad";
import MBBSAbroad from "./pages/MBBSAbroad";
import LanguageTraining from "./pages/LanguageTraining";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./pages/ScrollToTop";
import Courses from "./components/Courses";
import Bachelors from "./components/Bachelors";
import Masters from "./components/Masters";
import PhD from "./components/PhD";
import Diploma from "./components/Diploma";
import Certifications from "./components/Certifications";
import Services from "@/pages/services/Services";
import ServiceDetail from "@/pages/services/ServiceDetail";
import PsychometricTest from "@/pages/services/PsychometricTest";
import CareerCounselling from "@/pages/services/CareerCounselling";
import CountrySelection from "@/pages/services/CountrySelection";
import CourseUniversitySelection from "@/pages/services/CourseUniversitySelection";
import Admissions from "@/pages/services/Admissions";
import Scholarships from "@/pages/services/Scholarships";
import EducationLoan from "@/pages/services/EducationLoan";
import Documentation from "@/pages/services/Documentation";
import StudentVisa from "@/pages/services/StudentVisa";
import MockVisaInterview from "@/pages/services/MockVisaInterview";
import TravelServices from "@/pages/services/TravelServices";
import Accommodation from "@/pages/services/Accommodation";
import ForexServices from "./pages/services/ForexServices";
import Universities from "./pages/Universities";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/mbbs-abroad" element={<MBBSAbroad />} />
          <Route path="/language-training" element={<LanguageTraining />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/bachelors" element={<Bachelors />} />
          <Route path="/courses/masters" element={<Masters />} />
          <Route path="/courses/phd" element={<PhD />} />
          <Route path="/courses/diploma" element={<Diploma />} />
          <Route path="/courses/certifications" element={<Certifications />} />
          <Route path="/services" element={<Services />} />
<Route path="/services/:slug" element={<ServiceDetail />} />
<Route path="/services/psychometric-test" element={<PsychometricTest />} />
<Route path="/services/career-counselling" element={<CareerCounselling />} />
<Route path="/services/country-selection" element={<CountrySelection />} />
<Route path="/universities" element={<Universities />} />
<Route
  path="/services/course-university"
  element={<CourseUniversitySelection />}
/>
<Route path="/services/admissions" element={<Admissions />} />

<Route path="/services/scholarships" element={<Scholarships />} />
<Route path="/services/education-loan" element={<EducationLoan />} />

<Route path="/services/documentation" element={<Documentation />} />
<Route path="/services/student-visa" element={<StudentVisa />} />
<Route path="/services/mock-visa" element={<MockVisaInterview />} />
<Route path="/services/travel" element={<TravelServices />} />
<Route path="/services/accommodation" element={<Accommodation />} />
<Route path="/services/forex" element={<ForexServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
