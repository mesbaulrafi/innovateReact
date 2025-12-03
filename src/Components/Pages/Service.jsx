
import Containar from '../Containar'
import Image from '../Image'
import Flex from '../Flex'


const Service = (className,) => {
  return (
    <>
    <Containar>
     <div className="py-2.5">
       <Image src={'/src/assets/servicLogo.png'} className={"m-auto"}/>
      <h2 className={"font-extrabold font-openSan text-5xl text-[#192239] text-center"}>Our Services</h2>
      <p className={"font-papika text-[#6C7D93] text-[18px] m-auto text-center pt-2.5 w-[332px]"}>We have been providing great flooring solutions service.</p>
     </div>
     <div className="py-24">
      <Flex className={"justify-between gap-x-7"}>

        <div className="bg-[#EBF7E9] p-10  leading-7 rounded-2xl text-center h-[400px] w-1/3">
          <Image src={'/src/assets/serviceL1.png'} className={"m-auto"}/>
          <h4 className={"font-openSan font-semibold text-center text-3xl text-[#202427] pt-7"}>MARKETING STRATEGY</h4>
          <p className={"font-papika text-[18px] text-[#6C7D93] w-[257px] m-auto text-center py-4"}>Social Media has changed the way we interact & do business while creating</p>
          <button className="font-bold text-[20px] cursor-pointer">Read more</button>
        </div>

        <div className="bg-[#D8EAFF] p-10  leading-7 rounded-2xl text-center h-[400px] w-1/3">
          <Image src={'/src/assets/serviceL2.png'} className={"m-auto"}/>
          <h4 className={"font-openSan font-semibold text-center text-3xl text-[#202427] pt-7"}>Social Marketing</h4>
          <p className={"font-papika text-[18px] text-[#6C7D93] w-[257px] m-auto text-center py-4"}>Social Media has changed the way we interact & do business while creating a new avenue.</p>
          <button className="font-bold text-[20px] cursor-pointer">Read more</button>
        </div>

        <div className="bg-[#FBF1EC] p-10  leading-7 rounded-2xl text-center h-[400px] w-1/3">
          <Image src={'/src/assets/serviceL3.png'} className={"m-auto"}/>
          <h4 className={"font-openSan font-semibold text-center text-3xl text-[#202427] pt-7"}>Content Marketing</h4>
          <p className={"font-papika text-[18px] text-[#6C7D93] w-[257px] m-auto text-center py-4"}>Content Marketing is the other fold of online advertisement. If you are looking to build</p>
          <button className="font-bold text-[20px] cursor-pointer">Read more</button>
        </div>
        
      </Flex>
     </div>
    </Containar>
    </>
  )
}

export default Service