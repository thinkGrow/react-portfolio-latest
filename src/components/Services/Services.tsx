import { Text } from "../retroui/Text";

const Services = () => {
  return (
    <div className="space-y-4 lowercase text-center list-style-none">
      <Text as="h2" className="text-xl font-bold">
        services
      </Text>

      <div>
        <Text as="h3" className="font-semibold mb-1">
          Web Development
        </Text>
        <ul className="pl-6 text-base font-sans">
          <li>
            {" "}
            <strong>Frontend</strong> (figma to code, React + Tailwind)
          </li>
          <li>
            {" "}
            <strong>Backend</strong> (NestJS / Firebase)
          </li>
          <li>
            {" "}
            <strong>Full Stack Deployments</strong>
          </li>
        </ul>
      </div>

      <div>
        <Text as="h3" className="font-semibold mb-1">
          AI Services
        </Text>
        <ul className="pl-6 text-base font-sans ">
          <li>
            <strong>Data cleaning & preprocessing</strong>
          </li>
          <li>
            <strong>Model training & evaluation</strong>
          </li>
          <li>
            <strong>Computer vision / NLP</strong>
          </li>
        </ul>
      </div>

      <div>
        <Text as="h3" className="font-semibold mb-1">
          Tutoring
        </Text>
        <Text as="h5" className="font-semibold mb-1">
          pre-o upto masters & real projects
        </Text>
        <ul className="pl-6 text-base font-sans">
          <li>
            {" "}
            <strong>Programming</strong> - AI, Web, CS fundamentals
          </li>
          <li>
            <strong>Mathematics</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
