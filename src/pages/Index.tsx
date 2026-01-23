import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StudyDestinations from "@/components/home/StudyDestinations";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTABanner from "@/components/home/CTABanner";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
    <Layout>
      <Helmet>
        <title>
          Optimus Overseas Educational Consultants | Study Abroad & MBBS
        </title>

        <meta
          name="description"
          content="Optimus Overseas Educational Consultants offers expert guidance for study abroad and MBBS abroad programs across USA, UK, Canada, Australia and Europe."
        />

        <link
          rel="canonical"
          href="https://www.optimusoverseasedu.com/"
        />
      </Helmet>
      <div className="page-transition">
        <HeroSlider />
        <WhyChooseUs />
        <StudyDestinations />
        <ServicesPreview />
        <CTABanner />
      </div>
    </Layout>
    </>
  );
};

export default Index;
