import React from "react";
import { Link, navigate } from "@reach/router";

export const Logout = () => {
  localStorage.removeItem("token");

  return (window.location.href = "/");
};
export default Logout;
