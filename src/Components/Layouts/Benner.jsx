import React from "react";
import Heading from "../Heading";
import Containar from "../Containar";
import Button from "../Button";
import Contact from "../Pages/Contact";
import { Link } from "react-router-dom";

const Benner = () => {
  return (
    <div className="bg-[url('/src/assets/Bennerbg.jpg')] bg-no-repeat bg-cover bg-center py-[250px]">
      <Containar>
        <div className="">
          {/* <h1 className="text-[72px] font-openSans font-extrabold w-[686px] text-[#192239] block">We Are Digital <span className="text-[#FF7628]"> Marketing </span> Agency</h1> */}
          <Heading text={"We Are Digital #Marketing# Agency"} />
          <p className="text-normal text-[20px] font-papika text-[#6C7D93] w-[570px] leading-9 pb-10">
            Use customer data to build great and solid product experiences that
            convert. Digital marketing’s development has changed the way brands
            and businesses use technology for marketing.{" "}
          </p>
          <Link to={'/Contact'}>
          <Button btnText={"get free quoto"} className={"font-semibold font-openSan text-[18px] cursor-pointer"}/>
          </Link>
        </div>
      </Containar>
    </div>
  );
};
export default Benner;
