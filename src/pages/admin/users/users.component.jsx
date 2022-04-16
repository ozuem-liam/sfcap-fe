import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";

import AdminPage from "../adminPage.component";
import DashboardFooter from "../../../components/dashboardFooter/dashboardFooter.component";
import DashboardHeader from "../../../components/dashboardHeader/dashboardHeader.component";
import AdminUsersTable from "../../../components/adminUsersTable/adminUsersTable.component";
import { useHistory } from "react-router-dom";
import { logAdminOut } from "../../../redux/admin/admin.actions";
import PaginationButton from "../../../components/paginationButton/paginationButton.component";
import { ROOT_URL } from "../../../constant";

const Container = styled.div`
  width: 100vw;
  position: relative;
  & > main {
    padding: 2rem 1rem;
    margin-bottom: 3rem;
    h2 {
      font-size: 2rem;
      max-width: 1450px;
      margin-left: auto;
      margin-right: auto;
    }
    div.buttons {
      margin: 2rem auto 2rem;
      display: inline-block;
      flex-wrap: wrap;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      button {
        padding: 10px;
        color: white;
        border: none;
        background-color: #00b4ae;
        margin-right: 5px;
        margin-bottom: 10px;
        width: 40px;
        &.active {
          border: solid 1px green;
        }
        &:focus {
          outline: none;
        }
        &:disabled {
          background-color: #15193e;
          svg {
            animation: rotateLoader 1s linear infinite;
          }
        }

        @keyframes rotateLoader {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
`;

const Users = ({ adminToken, logAdminOut }) => {
  const [showDrawer, toggleDrawer] = useState(false);
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();

  useEffect(() => {
    if (!adminToken) {
      history.push("/admin/login");
    } else {
      const getData = async () => {
        let url = `${ROOT_URL}/admin/getusers/${currentPage}`;
        const options = {
          headers: {
            "Content-Type": "application/json",
            admin_csrf_token: adminToken,
          },
          withCredentials: true,
        };

        try {
          let response = await axios.get(url, options);

          if (response.status === 200) {
            setUsers(response.data.data);
            const totalPages = Math.ceil(response.data.total / 10);
            let arr = [];
            for (let i = 1; i <= totalPages; i++) {
              arr.push(i);
            }
            setPages(arr);
          }
        } catch (e) {
          if (e.response.status === 403) {
            setTimeout(() => logAdminOut(), 500);
            history.push("/admin/login");
          }
        }
      };
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminPage showDrawer={showDrawer}>
      <Container>
        <DashboardHeader
          admin
          showDrawer={showDrawer}
          toggleDrawer={toggleDrawer}
        />
        <main>
          <h2>Users</h2>
          <AdminUsersTable users={users} />
          <div className="buttons">
            {pages.map((page, index) => (
              <PaginationButton
                page={page}
                key={index}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setUsers={setUsers}
              />
            ))}
          </div>
        </main>
        <DashboardFooter admin drawerOpen={showDrawer} />
      </Container>
    </AdminPage>
  );
};

const mapStateToProps = (state) => ({
  adminToken: state.admin.adminToken,
});

const mapDispatchToProps = (dispatch) => ({
  logAdminOut: () => dispatch(logAdminOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
