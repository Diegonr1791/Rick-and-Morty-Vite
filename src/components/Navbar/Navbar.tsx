import { useState } from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import LogoRM from "@/assets/LogoRM";
import { navigationMenu } from "@/constants/navigation";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indexActive, setIndexActive] = useState(0);
  const pathName = window.location.pathname;

  const handleMenuIndexChange = (index: number) => {
    setIndexActive(index);
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="flex  justify-start  backdrop-filter-none  bg-inherit  shadow-medium border-b-1 border-b-white/20  bg-[#A868C9]"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white"
        />
      </NavbarContent>

      <div className="flex w-full h-full justify-end sm:justify-start">
        <Link to={"/"} onClick={() => handleMenuIndexChange(0)}>
          <LogoRM width={70} height={70} color="#ffff" />
        </Link>
      </div>

      <NavbarContent className="hidden sm:flex gap-4 py-1" justify="center">
        {navigationMenu.map((item, index) => {
          const isActive = pathName === item.path;
          const activeColor = isActive
            ? "text-purple-950 underline underline-offset-4"
            : "text-white";

          return (
            <NavbarItem key={`${item}-${index}`}>
              <Link
                to={item.path}
                className={`w-full  font-semibold hover:text-white/70 transition duration-300  hover:ease-in-out ${activeColor} text-lg`}
                onClick={() => handleMenuIndexChange(index)}
              >
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarMenu className="bg-gray-200/50 w-1/2">
        {navigationMenu.map((item, index) => {
          const isActive = pathName === item.path;
          const activeColor = isActive
            ? "text-red-500 underline underline-offset-4"
            : "text-white";
          return (
            <NavbarMenuItem key={`${item.name}-$index}`}>
              <Link
                className={`w-full  font-semibold hover:text-white/70 transition duration-300  hover:ease-in-out ${activeColor} text-lg`}
                color={indexActive === index ? "primary" : "foreground"}
                to={item.path}
                onClick={() => handleMenuIndexChange(index)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default Menu;
