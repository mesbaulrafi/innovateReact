import Containar from "../Containar";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import Button from "../Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <Containar>
        <Flex className={"justify-between"}>
          <div className="">
            <Link to={"/"} className="">
              <Image src={logo} />
            </Link>
          </div>
          <div className="">
            <ul className="flex ">
              <li className="flex items-center pr-12">
                {" "}
                <Link to={"/"} className="flex items-center">
                  Home <FaChevronDown className="pl-3 text-2xl " />
                </Link>{" "}
              </li>
              <li className="flex items-center pr-12">
                {" "}
                <Link to={"/about"} className="flex items-center">
                  About <FaChevronDown className="pl-3 text-2xl" />
                </Link>{" "}
              </li>
              <li className="flex items-center pr-12">
                {" "}
                <Link to={"/service"} className="flex items-center">
                  Service <FaChevronDown className="pl-3 text-2xl" />
                </Link>{" "}
              </li>
              <li className="flex items-center pr-12">
                {" "}
                <Link to={"/portfolio"} className="flex items-center">
                  Portfolio <FaChevronDown className="pl-3 text-2xl" />
                </Link>{" "}
              </li>
              <li className="flex items-center pr-12">
                {" "}
                <Link to={"/price"} className="flex items-center">
                  Price <FaChevronDown className="pl-3 text-2xl" />
                </Link>{" "}
              </li>
              <li className="flex items-center pr-12">
                {" "}
                <Link to={"/blog"} className="flex items-center">
                  Blog <FaChevronDown className="pl-3 text-2xl" />
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="">
            <Link to={"/contact"}>
              <Button btnText={"Contact Us"} />
            </Link>
          </div>
        </Flex>
      </Containar>
    </div>
  );
};

export default Header;
