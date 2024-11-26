import { ServiceCard } from "../components";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex justify-container flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key="service.label" {...service} />
      ))}
    </section>
  );
};

export default Services;
