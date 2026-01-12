import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StudyDestinations from "@/components/home/StudyDestinations";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <Layout>
      <div className="page-transition">
        <HeroSlider />
        <WhyChooseUs />
        <StudyDestinations />
        <ServicesPreview />
        <CTABanner />
      </div>
    </Layout>
  );
};

export default Index;
