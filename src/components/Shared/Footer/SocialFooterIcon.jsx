import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const SocialFooterIcon = () => {
  return (
    <div>
      <ul className="flex gap-5 mt-3">
        <li className="cursor-pointer">
          <a
            href="https://www.facebook.com/people/NuStartz/61554431259746/?_rdc=1&_rdr"
            aria-label="Read more about NuStartz on Facebook"
          >
            {" "}
            <FaFacebookF className="text-2xl  text-[#dbfa9b]" />
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            href="https://www.instagram.com"
            aria-label="Read more about NuStartz on Instagram"
          >
            {" "}
            <AiFillInstagram className="text-2xl text-[#dbfa9b]" />
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            href="https://www.linkedin.com/company/nustartz/"
            aria-label="Read more about NuStartz on LinkdIn"
          >
            <BsLinkedin className="text-2xl text-[#dbfa9b]" />
          </a>
        </li>
        <li className="cursor-pointer">
          <a
            href="https://www.youtube.com/@NuStartz"
            aria-label="Read more about NuStartz on Youtube"
          >
            {" "}
            <BsYoutube className="text-2xl text-[#dbfa9b]" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialFooterIcon;
