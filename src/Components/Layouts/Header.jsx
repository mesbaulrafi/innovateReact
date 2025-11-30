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
            <Link to={"/"}>
              <Image src={logo} />
            </Link>
          </div>
          <div className="">
            <ul className="flex ">
              <li className="flex items-center pr-12">
                {" "}
                <Link to={"/"}>
                  Home <FaChevronDown className="pl-3 text-2xl flex" />
                </Link>{" "}
              </li>
              <li className="flex items-center pr-12">
                {" "}
                <Link to={"/about"}>
                  About <FaChevronDown className="pl-3 text-2xl" />
                </Link>{" "}
              </li>
              <li className="flex items-center pr-12">
                {" "}
                <Link to={"/service"}>
                  Service <FaChevronDown className="pl-3 text-2xl" />
                </Link>{" "}
              </li>
              <li className="flex items-center pr-12">
                {" "}
                <Link to={"/portfolio"}>
                  Portfolio <FaChevronDown className="pl-3 text-2xl" />
                </Link>{" "}
              </li>
              <li className="flex items-center pr-12">
                {" "}
                <Link to={"/price"}>
                  Price <FaChevronDown className="pl-3 text-2xl" />
                </Link>{" "}
              </li>
              <li className="flex items-center pr-12">
                {" "}
                <Link to={"/blog"}>
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
