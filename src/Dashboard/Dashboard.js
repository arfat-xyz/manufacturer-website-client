import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (loading || adminLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <label
            htmlFor="my-drawer-2"
            className=" mr-8 ml-auto drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div>
            <h1 className="text-4xl text-primary">Welcome to dashboard</h1>
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard/myprofile">My Profile</Link>
            </li>
            {admin === "user" && (
              <span>
                <li>
                  <Link to="/dashboard/myorder">My Order</Link>
                </li>
                <li>
                  <Link to="/dashboard/addareview">Add A Review</Link>
                </li>
              </span>
            )}
            {admin === "admin" && (
              <span>
                <li>
                  <Link to="/dashboard/makeaadmin">Make admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageallorders">Manage All orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/addaproduct">Add a product</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageproducts">Manage products</Link>
                </li>
              </span>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
