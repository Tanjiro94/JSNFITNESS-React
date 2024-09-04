import React, {useState, useRef} from "react";
import Menu from "./Menu";
import NavBar from "./NavBar";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navBarRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
    };
    

  return(
    <>
    <NavBar ref={navBarRef} isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} onMenuToggle={handleMenuToggle}/>
    <Menu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </>
  );
};

export default Header;