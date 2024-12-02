import webdesign from "../../assets/Web-desgin-Icon.png";
import videoEditing from "../../assets/Web-desgin-Icon2.png";
const Features = () => {
  return (
    <div className=" lg:px-14 p-8 text-white ">
      <h4 className="uppercase tracking-[7px] text-center text-base font-medium">
        Best Features
      </h4>
      <h5 className="text-[25px] lg:text-[46px] font-medium  poppins-semibold-italic  text-center py-4">
        Experience unmatched results with <br className="lg:block hidden"/>
        our tailored marketing services
      </h5>
      <div className="grid lg:grid-cols-4 grid-cols-1  gap-12 mx-auto pt-6">
        <div
          className="bg-[#0c0f16] flex flex-col lg:justify-start mx-auto  p-[20px]
           gap-6 w-60 hover:border-b-8 hover:border-r-8
           hover:border-r-[#6EC1E4] hover:border-b-[#6EC1E4]"
        >
          <img className="w-20 h-20" src={webdesign} alt="" />
          <h4 className="font-semibold text-base">Web Development </h4>
        </div>
        <div
          className="bg-[#0c0f16] flex flex-col lg:justify-start mx-auto 
          p-[20px] gap-6 w-60 hover:border-b-8 hover:border-r-8
           hover:border-r-[#6EC1E4] hover:border-b-[#6EC1E4]"
        >
          {" "}
          <img className="w-20 h-20" src={videoEditing} alt="" />
          <h4 className="font-semibold text-base">Video Editing</h4>
        </div>
        <div
          className="bg-[#0c0f16] flex flex-col lg:justify-start mx-auto p-[20px]
           gap-6 w-60 hover:border-b-8 hover:border-r-8
           hover:border-r-[#6EC1E4] hover:border-b-[#6EC1E4]"
        >
          {" "}
          <img className="w-20 h-20" src={videoEditing} alt="" />
          <h4 className="font-semibold text-base">Graphics Design</h4>
        </div>
        <div
          className="bg-[#0c0f16] flex flex-col lg:justify-start mx-auto p-[20px]
           gap-6 w-60 hover:border-b-8 hover:border-r-8
           hover:border-r-[#6EC1E4] hover:border-b-[#6EC1E4]"
        >
          {" "}
          <img className="w-20 h-20" src={videoEditing} alt="" />
          <h4 className="font-semibold text-base">Ad Production</h4>
        </div>
      </div>
    </div>
  );
};

export default Features;
