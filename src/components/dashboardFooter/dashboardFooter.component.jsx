import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  background-color: #222;
  text-align: center;
  font-size: 14px;
  color: #00b4ae;
  padding: 1rem;
  position: ${({ drawerOpen, admin }) => (drawerOpen && !admin ? "" : "fixed")};
  bottom: 0;
`;

const DashboardFooter = ({ drawerOpen, admin }) => {
  return (
    <Footer drawerOpen={drawerOpen} admin={admin}>
      Copyright &copy; 2020 Socket Forex | All Rights Reserved
    </Footer>
  );
};

export default DashboardFooter;
