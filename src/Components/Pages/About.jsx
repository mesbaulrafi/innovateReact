import React from "react";
import Containar from "../Containar";
import Image from "../Image";
import aboutLeft from "../../assets/aboutLeft.png"
import aboutLogo from "/src/assets/aboutLogo.png"
import ServicLogo from '/src/assets/servicLogo.png'
import Flex from "../Flex";

const About = (className) => {
  return (
    <>
    <Containar className={"py-12  "}>
    <Flex className={"justify-between "}>
      <div className="w-1/2"><Image imgsrc={aboutLeft} className={""}/></div>

      <div className="w-1/2 ">
        <Image imgsrc={ServicLogo}/>
        <h3 className="font-extrabold text-5xl font-openSan text-[#192239] pt-9">Who We Are</h3>
        <p className="font-papika text-[18px] text-[#6C7D93] w-[439px] leading-8 py-7">We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, </p>
        <h5 className="font-papika text-[12px] text-[#6C7D93]">Join the 10.000+ Companys Trusting </h5>
        <Image imgsrc={aboutLogo} className={" "}/>
      </div>
    </Flex>
    </Containar>
    </>
  );
};

export default About;
