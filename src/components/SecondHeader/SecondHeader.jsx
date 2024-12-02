import { FaAngleRight } from "react-icons/fa";
import header from "../../../src/assets/3-1.jpg";
import "./SecondHeader.css";
import growth from "../../../src/assets/progress-curve-1.png";
const SecondHeader = () => {
  return (
    <div className=" lg:flex-row flex-col flex justify-between gap-4 lg:p-14 p-8">
      <div className="lg:w-1/2">
        <h4 className="text-[#ffbd4a] text-base font-medium">
          DIGITAL CONSULTING
        </h4>
        <h3 className="lg:text-4xl  w-full text-xl font-bold text-white py-6 ">
          Unique Business Consulting Agency corporate.
        </h3>
        <p className="text-[#666] text-base font-normal">
          At Creative Lance, we blend artistry with technology to create
          captivating digital experiences. Our team of skilled designers,
          developers, and strategists collaborates seamlessly to bring your
          vision to life. Whether you need a stunning website, eye-catching
          graphics, compelling ads, or intuitive user interfaces, we’ve got the
          expertise to make it happen. Join us on this creative journey! Explore
          our portfolio and let’s transform ideas into reality.
        </p>
        <ul className="list-none text-inherit font-semibold py-6">
          <li className="my-4 flex items-center gap-2">
            {" "}
            <span
              className="rounded-full btn-outline
           border-2  border-[#6ec1e4] "
            >
              <FaAngleRight className="text-[#6ec1e4] " />
            </span>
            Branding the latest marketing agency.
          </li>
          <li className="my-4 flex items-center gap-2">
            {" "}
            <span
              className="rounded-full btn-outline
           border-2  border-[#6ec1e4] "
            >
              <FaAngleRight className="text-[#6ec1e4] " />
            </span>{" "}
            Connect to more online customers.
          </li>
          <li className="my-4 flex items-center gap-2">
            {" "}
            <span
              className="rounded-full btn-outline
           border-2  border-[#6ec1e4] "
            >
              <FaAngleRight className="text-[#6ec1e4] " />
            </span>{" "}
            Grow up your digital business.
          </li>

          <button
            className=" font-semibold text-[#171818] text-[18px] bg-[#ffbd4a]
             hover:bg-[#6ec1e4]  border-none py-[10px] px-[20px] rounded-[10px]"
          >
            {` Discover`} More →{" "}
          </button>
        </ul>
      </div>
      <div className="lg:w-1/2 ">
        <img className="p-4  h-auto max:w-full" src={header} alt="" />

        <div className="relative bottom-9">
          <div className="w- bg-[#11141b] rounded-[10px] p-[15px]  gap-6 flex items-end -mt-32 lg:ml-10 lg:w-96">
            <div className="bg-[#141a26] w-[93px] h-[94px] rounded-[10px] flex  justify-center items-center ">
              <img src={growth} alt="" />
            </div>
            <div className="flex flex-col">
              <div className="flex  justify-evenly gap-12 justify-items-end">
                <h3 className="text-lg font-semibold text-white ">Annual</h3>
                <div className=" justify-items-end chat chat-end">
                  <div className="chat-bubble chat-bubble-info ">92%</div>
                </div>
              </div>
              <div>
                <progress
                  className="progress progress-info w-56"
                  value="90"
                  max="100"
                ></progress>
                <h3 className="ml-3 text-lg font-semibold text-white">
                  Business Growth
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
