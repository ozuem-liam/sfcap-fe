import React, { useState, useEffect } from "react";
import { HeaderContainer } from "./header.styles.jsx";
import SocketFxLogo from "../../assets/SocketFX Normal.png";
import { GiHamburgerMenu as Menu } from "react-icons/gi";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

const Header = ({ ScrollLink, ...otherProps }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = [
    { mainLink: "About Us", key: 0, link: "aboutUs" },
    { mainLink: "Investment Plans", key: 1, link: "investmentPlan" },
    {
      mainLink: "My Account",
      key: 2,
      class: "myAccountHoverEffect navLink",
    },
    {
      mainLink: "Login",
      key: 3,
      class: "hoverSubLink navLink",
      path: "/login",
    },
    {
      mainLink: "Registration",
      key: 4,
      class: "hoverSubLink navLink",
      path: "/signup",
    },
    { mainLink: "Contact Us", key: 5, link: "contactUs" },
  ];
  const subNavLinks = [
    { subLink: "Login", key: 0, path: "/login" },
    {
      subLink: "Registration",
      key: 1,
      path: "/signup",
    },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    position > scrollPosition ? setHideHeader(true) : setHideHeader(false);
  };
  const handleClick = () => {
    setToggle(!toggle);
  };
  const hideMobileMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <HeaderContainer
      hideHeader={hideHeader}
      toggleMenu={toggleMenu}
      toggle={toggle}
    >
      <ScrollLink
        activeClass="active"
        to="heroSection"
        spy={true}
        smooth={true}
        offset={-300}
        duration={1000}
        className="logoSection"
      >
        <img src={SocketFxLogo} alt="Logo" className="logo" />
      </ScrollLink>
      <div className="menuSection" onClick={hideMobileMenu}>
        <label>MENU</label>
        {toggleMenu ? (
          <CloseIcon className="menuIcon" fontSize="2rem" color="white" />
        ) : (
          <Menu className="menuIcon" fontSize="2rem" color="white" />
        )}
      </div>
      <div className="navLinkSection">
        {navLinks.map((navLink) => (
          <ScrollLink
            activeClass="active"
            to={navLink.link}
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={
              navLink.key === 2
                ? handleClick
                : navLink.key === 3 || navLink.key === 4
                ? () => window.open(navLink.path, "_blank").focus()
                : hideMobileMenu
            }
            className={
              navLink.key === 2 || navLink.key === 3 || navLink.key === 4
                ? navLink.class
                : "navLink"
            }
            key={navLink.key}
          >
            <p>{navLink.mainLink}</p>
            <div className="bottomLine"></div>

            {navLink.key === 2 ? (
              <div className="subLinksWrapper">
                {subNavLinks.map((subNavLink) => (
                  <div className="subNavLink" key={subNavLink.key}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      onClick={() =>
                        window.open(subNavLink.path, "_blank").focus()
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {subNavLink.subLink}
                    </a>
                  </div>
                ))}
              </div>
            ) : null}
          </ScrollLink>
        ))}
      </div>
    </HeaderContainer>
  );
};

export default Header;
