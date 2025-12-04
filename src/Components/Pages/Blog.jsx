import React from 'react'
import Image from '../Image'
import ServicLogo from '/src/assets/servicLogo.png'
import blog1 from '/src/assets/blog1.png'
import Containar from '../Containar'
import Flex from '../Flex'
const Blog = (className,) => {
  return (
     <>
     <Containar className={"pt-12 pb-48"}>
      <div className="mx-auto text-center">
        <Image imgsrc={ServicLogo} className={'mx-auto'}/>
        <h3 className="pb-4 pt-2 text-[#192239] font-extrabold font-openSan text-[48px]">Our Latest Blog</h3>
        <p className="text-[#061b36] font-papika text-[18px] px-[420px] leading-9">We provide digital experience services to startups and small businesses.</p>
      </div>
      <Flex className={"justify-between gap-x-7 pt-14"}>
        <div className="bg-[#f1f1f1ac] rounded-2xl">
          <Image imgsrc={blog1}/>
          <h5 className={"font-openSan text-2xl font-medium text-[#413F45] pl-7 py-7  w-[233px]"}>How to Be Ahead of Stock Changes</h5>
          <p className='font-nunito text-[18px] text-[#474747] pl-7 pb-7'>By John  - 5 Comments</p>
          <button className="font-bold text-[20px] cursor-pointer pl-7 pb-7">Read more</button>
        </div>

        <div className="bg-[#f1f1f1ac] rounded-2xl">
          <Image imgsrc={blog1}/>
          <h5 className={"font-openSan text-2xl font-medium text-[#413F45] pl-7 py-7  w-[233px]"}>How to Be Ahead of Stock Changes</h5>
          <p className='font-nunito text-[18px] text-[#474747] pl-7 pb-7'>By John  - 5 Comments</p>
          <button className="font-bold text-[20px] cursor-pointer pl-7 pb-7">Read more</button>
        </div>

        <div className="bg-[#f1f1f1ac] rounded-2xl">
          <Image imgsrc={blog1}/>
          <h5 className={"font-openSan text-2xl font-medium text-[#413F45] pl-7 py-7  w-[233px]"}>How to Be Ahead of Stock Changes</h5>
          <p className='font-nunito text-[18px] text-[#474747] pl-7 pb-7'>By John  - 5 Comments</p>
          <button className="font-bold text-[20px] cursor-pointer pl-7 pb-7">Read more</button>
        </div>
      </Flex>
     </Containar>
     </>
  )
}

export default Blog