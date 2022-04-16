import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import AdminPage from "../adminPage.component";
import DashboardFooter from "../../../components/dashboardFooter/dashboardFooter.component";
import DashboardHeader from "../../../components/dashboardHeader/dashboardHeader.component";
import AdminWithdrawalTable from "../../../components/adminWithdrawalTable/adminWithdrawalTable.component";
import AdminKYCTable from "../../../components/adminKYCTable/adminKYCTable.component";
import AdminBalanceTable from "../../../components/adminBalanceTable/adminBalanceTable.component";
import { connect } from "react-redux";
import { logAdminOut } from "../../../redux/admin/admin.actions";
import { useHistory } from "react-router-dom";
import { ROOT_URL } from "../../../constant";

const Container = styled.div`
  width: 100vw;
  position: relative;
  & > main {
    padding: 2rem 1rem;
    margin-bottom: 3rem;
    div.tabs {
      margin-bottom: 2rem;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      button {
        border: none;
        padding: 10px;
        font-size: 1rem;
        color: #00b4ae;
        background-color: transparent;
        &.active {
          background-color: #555;
          color: white;
        }
      }
    }
  }
`;

const AdminDashboard = ({ adminToken, logAdminOut }) => {
  const [showDrawer, toggleDrawer] = useState(false);
  const [kyc, setKyc] = useState([]);
  const [balances, setBalances] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);
  const [page, setPage] = useState("withdrawal");
  const history = useHistory();

  useEffect(() => {
    if (!adminToken) {
      history.push("/admin/login");
    } else {
      const getData = async () => {
        let url = `${ROOT_URL}/admin/withdrawals/pending`;
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
            setWithdrawals(response.data);
          }

          url = `${ROOT_URL}/admin/user/kyc/requests`;
          response = await axios.get(url, options);

          if (response.status === 200) {
            setKyc(response.data);
          }

          url = `${ROOT_URL}/admin/deposits/pending`;
          response = await axios.get(url, options);
          if (response.status === 200) {
            setBalances(response.data);
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

  const setPageContent = () => {
    switch (page) {
      case "withdrawal":
        return <AdminWithdrawalTable withdrawals={withdrawals} />;
      case "kyc":
        return <AdminKYCTable kyc={[...kyc]} />;
      case "balance":
        return <AdminBalanceTable balances={balances} />;
      default:
        return <p>Something Went Wrong</p>;
    }
  };

  return (
    <AdminPage showDrawer={showDrawer}>
      <Container>
        <DashboardHeader
          admin
          showDrawer={showDrawer}
          toggleDrawer={toggleDrawer}
        />
        <main>
          <div className="tabs">
            <button
              onClick={() => setPage("withdrawal")}
              className={`${page === "withdrawal" ? "active" : ""}`}
            >
              Pending Withdrawals
            </button>
            <button
              onClick={() => setPage("kyc")}
              className={`${page === "kyc" ? "active" : ""}`}
            >
              Pending KYC
            </button>
            <button
              onClick={() => setPage("balance")}
              className={`${page === "balance" ? "active" : ""}`}
            >
              Update Balance
            </button>
          </div>
          {setPageContent()}
        </main>
        <DashboardFooter admin drawerOpen={showDrawer} />
      </Container>
    </AdminPage>
  );
};

const mapStateToProps = (state) => ({
  adminToken: state.admin?.adminToken,
});

const mapDispatchToProps = (dispatch) => ({
  logAdminOut: () => dispatch(logAdminOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
