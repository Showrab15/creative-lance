/* eslint-disable react/prop-types */
import { Meteors } from "../ui/Meteors"; // Import the Meteors component

const FeatureCard = ({ imgSrc, title }) => (
  <div className="relative bg-[#0c0f16] flex flex-col lg:justify-start mx-auto p-[20px] gap-6 w-60 hover:border-b-8 hover:border-r-8 hover:border-r-[#6EC1E4] hover:border-b-[#6EC1E4] overflow-hidden">
    {/* Add Meteor effect behind the card */}
    <div className="absolute inset-0">
      <Meteors number={10} className="z-10" /> {/* Adjust number of meteors */}
    </div>
    <img className="w-20 h-20 relative z-20" src={imgSrc} alt={title} />
    <h4 className="font-semibold text-base relative z-20">{title}</h4>
  </div>
);

export default FeatureCard;
