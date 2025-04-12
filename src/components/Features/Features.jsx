import { featureData } from "./FeatureData"; // Import the feature data
import FeatureCard from "./FeatureCard"; // Import the FeatureCard component

const Features = () => {
  return (
    <div className="lg:px-14 p-8 text-white">
      <h4 className="uppercase tracking-[7px] text-center text-base font-medium">
        Best Features
      </h4>
      <h5 className="text-[25px] lg:text-[46px] font-medium poppins-semibold-italic text-center py-4">
        Experience unmatched results with <br className="lg:block hidden" />
        our tailored marketing services
      </h5>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-12 mx-auto pt-6">
        {featureData.map((feature, idx) => (
          <FeatureCard key={idx} imgSrc={feature.imgSrc} title={feature.title} />
        ))}
      </div>
    </div>
  );
};

export default Features;

