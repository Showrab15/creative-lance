import { Link } from "react-router-dom";
import SocialFooterIcon from "./SocialFooterIcon";
import logo from "../../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="mb-96  md:px-8 p-8 font-serif">
      <div className="md:ml-4 lg:ml-0  grid lg:grid-cols-4 md:grid-cols-2 mx-auto md:gap-10 gap-8 lg:gap-2 justify-between items-center  ">
        <div>
          <img className="md:max-w-[150px] md:max-h-[150px] max-w-[100px] max-h-[80px]  lg:-ml-0 -ml-3  " src={logo} alt="logo" />

          <div className="lg:ml-6 md:-mt-20 -mt-10 md:text-md text-base ">
            <p className="my-8">
             {` We're`} a digital creative services firm. We provide web
               development,   branding  and design services
            </p>

            {/* social icon */}
            <h3 className="text-base poppins-medium my-4 "> Networks</h3>
            <SocialFooterIcon></SocialFooterIcon>
          </div>
        </div>

        {/* useful links */}
        <div className="lg:ml-20">
          <h1 className=" text-lg md:text-2xl font-semibold ">Our Links</h1>
          <ul className="text-md md:text-lg font-normal text-[#b2b2b2] md:my-4 my-2">
            <li className="mb-2">
              <Link to="/" target="_blank" rel="noopener noreferrer">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about-Us" target="_blank" rel="noopener noreferrer">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about-Us" target="_blank" rel="noopener noreferrer">
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div className=" ">
          <h1 className="  text-lg md:text-2xl font-semibold ">Our Company</h1>
          <ul className="text-md md:text-lg font-normal text-[#b2b2b2] md:my-4 my-2">
            <li className="mb-2">
              <Link to="/" target="_blank" rel="noopener noreferrer">
                About Company
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about-Us" target="_blank" rel="noopener noreferrer">
                Our Testimonial
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about-Us" target="_blank" rel="noopener noreferrer">
                Our Support
              </Link>
            </li>
          </ul>
        </div>

        <div className=" ">
          <h1 className="  text-lg md:text-2xl font-semibold ">Contact</h1>
          <ul className="text-md md:text-lg font-normal text-[#b2b2b2] md:my-4 my-2">
            <li className="mb-2">ceativelance@gmail.com</li>
            <li className="mb-2">+1 732 983 1325</li>
            <li className="mb-2">https://ceativeLance.com</li>
          </ul>
        </div>
      </div>

      {/* bottom */}
      <div className="mt- py-5 border-y-0 text-center">
        <hr className="mb-2 border-blue-200" />
        <p className="">
          &copy; Copyright 2024{" "}
          <span className="text-[#dbfa9b]">Creative Lance <br  className="md:hidden block"/> </span> - All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
