import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import DrawerButton from "./drawer-button.component";
import { DrawerContainer } from "./drawer.styles";
import { logAdminOut } from "../../redux/admin/admin.actions";

const AdminDrawer = ({ image, show, logAdminOut, adminToken }) => {
  const history = useHistory();
  if (!adminToken) {
    history.push("/admin/login");
  }
  return (
    <DrawerContainer admin className={`${show ? "display" : "hidden"}`}>
      {/* <div className="profile">
        <img className="profile" src={image} alt="Profile" />
        <p>Dro Taiwo</p>
        <img className="verified" src={verified} alt="Verified User" />
      </div> */}
      <div className="button-container">
        <DrawerButton
          onClick={() => history.push("/admin/dashboard")}
          text="Dashboard"
          icon={
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style={{ enableBackground: "new 0 0 512 512" }}
            >
              <g>
                <g>
                  <path d="M286,376h-60c-8.276,0-15,6.724-15,15s6.724,15,15,15h60c8.276,0,15-6.724,15-15S294.276,376,286,376z" />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M256,191.314c-8.511,40.237-14.955,73.393-15,79.691c0,8.266,6.729,14.995,15,14.995c8.27,0,14.998-6.727,15-14.996
			C270.955,264.706,264.511,231.55,256,191.314z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M256,16C115.39,16,0,130.39,0,271c0,92.637,51.361,178.125,132.44,223.11c2.227,1.245,4.731,1.89,7.28,1.89h232.559
			c2.549,0,5.054-0.645,7.28-1.89C460.639,449.125,512,363.637,512,271C512,130.39,396.61,16,256,16z M286,436h-60
			c-24.814,0-45-20.186-45-45c0-24.814,20.186-45,45-45h60c24.814,0,45,20.186,45,45C331,415.814,310.814,436,286,436z M436,286h-60
			c-8.291,0-15-6.709-15-15c0-8.291,6.709-15,15-15h44.326c-3.1-34.244-17.095-65.153-37.95-90.165l-30.912,30.912
			c-5.86,5.859-15.351,5.859-21.211,0c-5.859-5.859-5.859-15.352,0-21.211l30.905-30.905c-24.957-20.803-56.006-34.063-90.157-37.2
			v11.904c5.805,25.863,30,134.689,30,151.664c0,24.813-20.187,45-45,45s-45-20.187-45-45c0-16.975,24.195-125.801,30-151.664
			V106.76c-34.243,3.105-65.497,16.663-90.507,37.522l31.254,31.254c5.859,5.859,5.859,15.352,0,21.211
			c-5.86,5.859-15.351,5.859-21.211,0l-31.254-31.254C108.422,190.503,94.865,221.757,91.76,256H136c8.291,0,15,6.709,15,15
			c0,8.291-6.709,15-15,15H76c-8.291,0-15-6.709-15-15c0-107.238,87.272-195,195-195c107.238,0,195,87.272,195,195
			C451,279.291,444.291,286,436,286z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          }
        />

        <DrawerButton
          onClick={() => history.push("/admin/users")}
          text="Users"
          icon={
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="45.532px"
              height="45.532px"
              viewBox="0 0 45.532 45.532"
              style={{ enableBackground: "new 0 0 45.532 45.532" }}
            >
              <g>
                <path
                  d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765
		S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53
		c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012
		c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592
		c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          }
        />

        <DrawerButton
          onClick={() => history.push("/admin/users/Details")}
          text="Users Details"
          icon={
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="45.532px"
              height="45.532px"
              viewBox="0 0 45.532 45.532"
              style={{ enableBackground: "new 0 0 45.532 45.532" }}
            >
              <g>
                <path
                  d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765
		S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53
		c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012
		c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592
		c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          }
        />
      </div>
      <DrawerButton
        last
        text="Logout"
        onClick={() => {
          logAdminOut();
          history.push("/admin/login");
        }}
        icon={
          <svg
            id="bold"
            enableBackground="new 0 0 24 24"
            height="512"
            viewBox="0 0 24 24"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m15 13c-.553 0-1 .448-1 1v4c0 .551-.448 1-1 1h-3v-15c0-.854-.544-1.617-1.362-1.901l-.296-.099h4.658c.552 0 1 .449 1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3c0-1.654-1.346-3-3-3h-10.75c-.038 0-.07.017-.107.022-.048-.004-.094-.022-.143-.022-1.103 0-2 .897-2 2v18c0 .854.544 1.617 1.362 1.901l6.018 2.006c.204.063.407.093.62.093 1.103 0 2-.897 2-2v-1h3c1.654 0 3-1.346 3-3v-4c0-.552-.447-1-1-1z" />
              <path d="m23.707 9.293-4-4c-.286-.286-.716-.372-1.09-.217-.373.155-.617.52-.617.924v3h-4c-.552 0-1 .448-1 1s.448 1 1 1h4v3c0 .404.244.769.617.924.374.155.804.069 1.09-.217l4-4c.391-.391.391-1.023 0-1.414z" />
            </g>
          </svg>
        }
      />
    </DrawerContainer>
  );
};

const mapStateToProps = (state) => ({
  adminToken: state.admin.adminToken,
});

const mapDispatchToProps = (dispatch) => ({
  logAdminOut: () => dispatch(logAdminOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDrawer);
