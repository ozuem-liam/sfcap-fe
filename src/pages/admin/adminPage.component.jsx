import React from "react";

import AdminDrawer from "./../../components/drawer/adminDrawer.component";

import user from "./../../assets/user.svg";
import styled from "styled-components";

const AdminPageContainer = styled.div`
  display: flex;
  overflow: hidden;
  div.content {
    width: 100vw;
    transition: all 0.5s;
    &.moveLeft {
      transform: translateX(-90px);
    }
  }
`;

const AdminPage = ({ children, showDrawer }) => {
  return (
    <AdminPageContainer showDrawer={showDrawer}>
      <AdminDrawer show={showDrawer} image={user} />
      <div className={`content ${!showDrawer ? "moveLeft" : ""}`}>
        {children}
      </div>
    </AdminPageContainer>
  );
};

export default AdminPage;
