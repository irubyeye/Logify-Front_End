import React from "react";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  return (
    <div
      style={{
        display: "flex",
        width: "50%",
        justifyContent: "space-evenly",
        padding: "20px 0",
      }}
    >
      <div>
        <Link to={"/my-cargos"}>My Cargos</Link>
      </div>
      <div>
        <Link to={"/add-cargo"}> Create Cargo</Link>
      </div>
      <div>
        <Link to={"/my-deliveries"}>My Deliveries</Link>
      </div>
      <div>
        <Link to={"/add-delivery"}>Create Delivery</Link>
      </div>
    </div>
  );
}
