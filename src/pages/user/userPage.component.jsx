import React from "react";

import Drawer from "./../../components/drawer/drawer.component";

import user from "./../../assets/user.svg";
import styled from "styled-components";

const UserPageContainer = styled.div`
  display: flex;
  overflow: hidden;
  div.content {
    width: 100vw;
    transition: all 0.5s;
    &.moveLeft {
      transform: translateX(-95px);
    }
  }
`;

const UserPage = ({ children, showDrawer }) => {
  return (
    <UserPageContainer showDrawer={showDrawer}>
      <Drawer show={showDrawer} image={user} />
      <div className={`content ${!showDrawer ? "moveLeft" : ""}`}>
        {children}
      </div>
    </UserPageContainer>
  );
};

export default UserPage;
