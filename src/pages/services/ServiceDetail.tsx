import { useParams } from "react-router-dom";

const serviceContent: Record<string, any> = {
  "psychometric-test": {
    title: "Psychometric Test",
    content:
      "Our psychometric assessment helps students identify the right career path based on aptitude, interest, and personality traits.",
  },
  "career-counselling": {
    title: "Career Counselling",
    content:
      "Personalized one-on-one counselling sessions with experienced education advisors.",
  },
  "country-selection": {
    title: "Country Selection",
    content:
      "We help you select the best country based on academic goals, budget, and future prospects.",
  },
  // 👉 You can add others later
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceContent[slug || ""];

  if (!service) {
    return <div className="pt-32 text-center">Service not found</div>;
  }

  return (
    <section className="pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
        <p className="text-gray-700 leading-relaxed">
          {service.content}
        </p>
      </div>
    </section>
  );
};

export default ServiceDetail;
