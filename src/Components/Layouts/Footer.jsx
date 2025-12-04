import React from 'react'
import Containar from '../Containar'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '/src/assets/logo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <Containar className={"py-10"}>
      <Flex className={"justify-between items-start"} >
        <div className="w-1/3 ">
          <Link to={'/'}><Image imgsrc={Logo}/></Link>
          <p className={"font-nunito text-[#6C7D93] text-[18px] leading-[180%] capitalize pt-9"}>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
        </div>

        <div className=""> 
          <ul className={""}>
            <li className={"font-openSan font-semibold text-[#413F45] text-2xl pb-7"}>Features</li>
            <li className={"font-nunito text-[#6C7D93] text-[20px] pb-7"}><Link to={'/'}>Home</Link></li>
            <li className={"font-nunito text-[#6C7D93] text-[20px] pb-7"}><Link to={'/about'}>About</Link></li>
            <li className={"font-nunito text-[#6C7D93] text-[20px] pb-7"}><Link to={'/benifit'}>Benifit</Link></li>
            <li className={"font-nunito text-[#6C7D93] text-[20px] pb-7"}><Link to={'/pricing'}>Pricing</Link></li>
            <li className={"font-nunito text-[#6C7D93] text-[20px] pb-7"}><Link to={'/blog'}>Blog</Link></li>
            
          </ul>
        </div>

        <div className="">
          <ul>
            <li className={"font-openSan font-semibold text-[#413F45] text-2xl pb-7"}><Link>Products</Link></li>
            <li className={"font-nunito text-[#6C7D93] text-[20px] pb-7"}><Link to={'/taskManagement'}>Task Management</Link></li>
            <li className={"font-nunito text-[#6C7D93] text-[20px] pb-7"}><Link to={'/companygrowth'}>Company growth</Link></li>
            <li className={"font-nunito text-[#6C7D93] text-[20px] pb-7"}><Link to={'/timetracking'}>Time tracking</Link></li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className={"font-openSan font-semibold text-[#413F45] text-2xl pb-7"}><Link>Support</Link></li>
            <li className={"font-nunito text-[#6C7D93] text-[20px] pb-7"}><Link to={'/customerservice'}>Customer Service</Link></li>
            <li className={"font-nunito text-[#6C7D93] text-[20px] pb-7"}><Link to={'/accessibility'}>Accessibility</Link></li>
            <li className={"font-nunito text-[#6C7D93] text-[20px] pb-7"}><Link to={'/contact'}>Contact us</Link></li>
          </ul>
        </div>
      </Flex>
    </Containar>
    <Containar>
      <Flex className={"justify-between items-start mt-[60px]"}>
        <div className="">
          <p className='className="text-[18px] text-[#6C7D93] leading-[180%] capitalize"'>@20201 Innovate.All rights reserved.</p>
        </div>
        <div className="rightSide flex justify-between gap-x-10">
          <p className="text-[18px] text-[#6C7D93] leading-[180%] capitalize">Privacy policy</p>
          <p className="text-[18px] text-[#6C7D93] leading-[180%] capitalize">Terms & condition</p>
        </div>
      </Flex>
    </Containar>
    </>
  )
}


export default Footer