import blog1 from "../assets/blog1.jpg";
import admin from "../assets/admmin.png";

const Blogs = () => {
  return (
    <div className=" lg:px-14 p-8">
      <h1 className="lg:text-[45px] text-[25px] font-medium  text-center text-white">
        Recent Articles
      </h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto gap-8 py-10">
        <div className="flex flex-col gap-4">
          <img src={blog1} alt="" />
          <h5 className="text-[17px] text-[#6a6a6a] hover:text-[#dbfa9b] font-medium">
            January 8, 2020
          </h5>
          <h4 className="text-[22px] text-[#6a6a6a] hover:text-[#dbfa9b] font-semibold">
            Art Design
          </h4>
          <p className="text-[17px] text-white font-normal">
            Consectetur adipiscing elit pellentesque ntorbi que senectus et
            netus. Quis viverra nibh crasar sitete est placerat in tas.
          </p>

          <h6 className="font-bold text-[12px] mt-8 flex gap-3 items-center">
            {" "}
            <img className="rounded-full " src={admin} alt="" />
            By Showrab Paul
          </h6>
        </div>

        <div className="flex flex-col gap-4">
          <img src={blog1} alt="" />
          <h5 className="text-[17px] text-[#6a6a6a] hover:text-[#dbfa9b] font-medium">
            January 8, 2020
          </h5>
          <h4 className="text-[22px] text-[#6a6a6a] hover:text-[#dbfa9b] font-semibold">
            Art Design
          </h4>
          <p className="text-[17px] text-white font-normal">
            Consectetur adipiscing elit pellentesque ntorbi que senectus et
            netus. Quis viverra nibh crasar sitete est placerat in tas.
          </p>

          <h6 className="font-bold text-[12px] mt-8 flex gap-3 items-center">
            {" "}
            <img className="rounded-full " src={admin} alt="" />
            By Enoch Reuben
          </h6>
        </div>

        <div className="flex flex-col gap-4">
          <img src={blog1} alt="" />
          <h5 className="text-[17px] text-[#6a6a6a] hover:text-[#dbfa9b] font-medium">
            January 8, 2020
          </h5>
          <h4 className="text-[22px] text-[#6a6a6a] hover:text-[#dbfa9b] font-semibold">
            Art Design
          </h4>
          <p className="text-[17px] text-white font-normal">
            Consectetur adipiscing elit pellentesque ntorbi que senectus et
            netus. Quis viverra nibh crasar sitete est placerat in tas.
          </p>

          <h6 className="font-bold text-[12px] mt-8 flex gap-3 items-center">
            {" "}
            <img className="rounded-full " src={admin} alt="" />
            By Sam Paul
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
