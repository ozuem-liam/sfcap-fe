import React, { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logAdminOut } from "../../redux/admin/admin.actions";
import axios from "axios";
import { ROOT_URL } from "../../constant";

const PaginationButton = ({
  page,
  currentPage,
  setCurrentPage,
  setUsers,
  adminToken,
  logAdminOut,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    setCurrentPage(page);
    if (!adminToken) {
      history.push("/admin/login");
    } else {
      setIsSubmitting(true);
      let url = `${ROOT_URL}/admin/getusers/${page}`;
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
        }
      } catch (e) {
        if (e.response.status === 403) {
          setTimeout(() => logAdminOut(), 500);
          history.push("/admin/login");
        }
      }
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitting ? (
        <button disabled>
          <BiLoaderAlt />
        </button>
      ) : (
        <button
          className={`${currentPage === page ? "active" : ""}`}
          onClick={handleClick}
        >
          {page}
        </button>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  adminToken: state.admin.adminToken,
});

const mapDispatchToProps = (dispatch) => ({
  logAdminOut: () => dispatch(logAdminOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationButton);
