import React, {useState} from 'react';
import SocketFxLogo from "../../assets/SocketFX Normal.png";
import {Link} from "react-router-dom";
import styled from "styled-components";

export const Container = styled("div")`
@media (max-width: 1000px) {
    .block {
        display: flex;
        height: 40px;
    }
    .hidden {
        display: none;
    }
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
    .mobile-menu {
        display: flex;
        height: 100vh;
    }
    .menu-nav {
        width: 100%;
        height: 100vh;
        display: flex;
        position: relative;
        top: 0;
        bottom: 0;
        right: 0;
        background: gray;
        flex-direction: column;
    }
    #nav-link {
        display: flex;
        margin-top: 100px;
        margin-left: 50px;
        padding: 2px 3px 2px 3px;
        font-weight: bold;
    }
    #nav-link::hover {
        background: #007CFF;
        color: white;
        border: 2px solid #007CFF;
    }
    .nav-text {
        font-size: 40px;
        margin-right: 2px;
        color: #007CFF;
    }
    .navbar-container {
        width: 100%;
        height: 80px;
    }
    
    .navbar-sub-container {
        width: 100%;
        height: 80px;
    }
    
    .wbus-ssr1059615 {
        float: left;
        cursor: pointer;
    }
    
    .logo {
        width: 100px;
        background-size: 50% 50%;
    }
    
    .nav {
        display: none;
    }
    .navbar-section {
        width: 100%;
    }
    #hamburger {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 2;
        border-radius: 2rem;
        color: gray;
    }
    #hamburger:hover {
        background: gray;
        color: white;
    }
    .nav>a {
        color: #000000;
        padding: 0 15px;
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
        line-height: 80px;
    }
    
    .nav>a.active,
    .nav>a:hover {
        color: #007CFF;
    }
    
    .btn-container {
        display: none;
    }
    
    .btn-action {
        float: right;
    }
    
    .m-login-btn {
        color: #FFFFFF;
        float: right;
        width: 110px;
        cursor: pointer;
        height: 36px;
        font-size: 16px;
        font-weight: bold;
        font-family: sans-serif;
        background: #007CFF;
        box-sizing: border-box;
        text-align: center;
        line-height: 36px;
        border-radius: 21px;
        text-decoration: none;
    }
    
    .m-login-btn:hover {
        background-color: rgba(0, 124, 255, 0.8);
    }
    .login-btn {
        display: none;
    }
    .signup-btn {
        display: none;
    }
}



.nav-link {
    display: none; 
}
.navbar-container {
    height: 80px;
}
.hamburger {
    display: none;
}
.navbar-sub-container {
    width: 100%;
    height: 80px;
    z-index: 20;
    position: fixed;
    background: #FFFFFF;
}

.navbar-section {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-family: sans-serif;
    display: flex;
    z-index: 20;
    position: relative;
    align-items: center;
    justify-content: space-between;
}

.wbus-ssr1059615 {
    float: left;
    cursor: pointer;
}

.logo {
    width: 150px;
    height: 80px;
    background-size: 100% 100%;
}

.nav {
    flex: 1;
    float: left;
    position: relative;
    padding-left: 50px;
}

.nav>a {
    color: #000000;
    padding: 0 15px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 80px;
}

.nav>a.active,
.nav>a:hover {
    color: #007CFF;
}

.btn-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.btn-action {
    float: right;
}

.login-btn {
    color: #FFFFFF;
    float: right;
    width: 110px;
    cursor: pointer;
    height: 36px;
    font-size: 16px;
    font-weight: bold;
    font-family: sans-serif;
    background: #007CFF;
    box-sizing: border-box;
    text-align: center;
    line-height: 36px;
    border-radius: 21px;
    text-decoration: none;
}

.login-btn:hover {
    background-color: rgba(0, 124, 255, 0.8);
}

.signup-btn {
    color: #007CFF;
    float: right;
    width: 110px;
    cursor: pointer;
    height: 36px;
    font-size: 16px;
    font-weight: bold;
    font-family: sans-serif;
    box-sizing: border-box;
    text-align: center;
    line-height: 36px;
    text-decoration: none;
}

.signup-btn:hover {
    color: rgba(0, 124, 255, 0.8);
}
`;

const NavbarComponent = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
 
    function mobileNavBarHandler() {
      setShowMobileNav(showMobileNav => !showMobileNav);
    }

    function loadHome() {
        window.location.href = "/";
    }

    function loadMarket() {
        window.location.href = "/market";
    }

    function loadPricing() {
        window.location.href = "/pricing";
    }

    function loadLogin() {
        window.location.href = "/login";
    }

    function loadSignUp() {
        window.location.href = "/signup";
    }
    return (
        <Container>
            <div className="navbar-container" style={{height:"80px"}}>
                <div className="navbar-sub-container" style={{top:"0px"}} id="common_head">
                    <div className="navbar-section">
                        <img src={SocketFxLogo} alt="Logo" className="logo" />
                        <nav role="menubar" className="nav">
                            <a role="menuitem" aria-label="home" href="/" className="">HOME</a>
                            <a role="menuitem" aria-label="MARKET" href="market" className="">MARKET</a>
                            <a role="menuitem" aria-label="PRICING" href="/pricing" className="">PRICING</a>
                        </nav>
                        
                        <div className="btn-container common_head_btnWrap">
                            <div className="btn-action">
                                <Link to="/login" role="button" aria-label="LOG IN" className="login-btn">LOG IN</Link>
                                <Link to="/signup" role="button" aria-label="SIGN UP" className="signup-btn">SIGN UP</Link>
                            </div>
                        </div>

                        {/* <!-- Mobile menu button--> */}
                        <button onClick={mobileNavBarHandler} type="button" id="hamburger" className="hamburger" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {/* <!--
                            Icon when menu is closed.

                            Heroicon name: outline/menu

                            Menu open: "hidden", Menu closed: "block"
                        --> */}
                        <svg className={showMobileNav ? "hidden" : "block"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {/* <!--
                            Icon when menu is open.

                            Heroicon name: outline/x

                            Menu open: "block", Menu closed: "hidden"
                        --> */}
                        <svg className={showMobileNav ? "block" : "hidden"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>

                            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className={showMobileNav ? 'mobile-menu' : 'hidden'}>
                    <div className="menu-nav">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <div id="nav-link" className="nav-link" aria-current="page">
                        <span onClick={loadHome} className="nav-text">Home</span>
                        </div>
                        <div id="nav-link" className="nav-link">
                        <span onClick={loadMarket} className="nav-text">Market</span>
                        </div>
                        <div id="nav-link" className="nav-link">
                        <span onClick={loadPricing} className="nav-text">Pricing</span>
                        </div>
                        <div id="nav-link" className="nav-link">
                        <span style={{marginRight: "10px"}} onClick={loadLogin} role="button" aria-label="LOG IN" className="m-login-btn">LOG IN</span>
                        <span onClick={loadSignUp} role="button" aria-label="SIGN UP" className="m-login-btn">SIGN UP</span>
                        </div>
                    </div>
                </div>
        </Container>
    );
}

export default NavbarComponent;
