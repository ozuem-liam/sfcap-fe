import React from 'react';
import SocketFxLogo from "../../assets/SocketFX Normal.png";
import {Link} from "react-router-dom";
import styled from "styled-components";

export const Container = styled("div")`
.navbar-container {
    height: 80px;
}

.navbar-sub-container {
    width: 100%;
    height: 80px;
    z-index: 20;
    position: fixed;
    background: #FFFFFF;
}

.navbar-section {
    width: 1200px;
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
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default NavbarComponent;
