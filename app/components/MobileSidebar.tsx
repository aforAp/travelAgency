import { Link } from "react-router";
import logo from "../../public/assets/icons/logo.svg";
import Menu from "../../public/assets/icons/menu.svg";
import Cancel from "../../public/assets/icons/x.svg";
import {useState, useRef, useEffect} from "react";
import NavItems from "./NavItems";

const MobileSidebar = () => {

    const [toggle, setToggle] = useState(false);
     const sidebarRef = useRef<HTMLDivElement>(null);
     useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);
  return (
    <div ref={sidebarRef} className="lg:static md:hidden sm:static mobile-sidebar wrapper">
       <button className="absolute right-0 top-5 mr-5" onClick={() => setToggle(prev => !prev)}>
           {toggle ? (<img src={Menu} alt="menu" className="size-7" />): 
(<img src={Cancel} alt="menu" className="size-7" />)}
            </button> 

            <NavItems isDisplay={toggle} />
    </div>
  )
}

export default MobileSidebar;
