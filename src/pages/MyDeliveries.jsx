import React from "react";
import Deliveries from "./Deliveries";

export default function MyDeliveries() {
  const userId = localStorage.getItem("userId");
  return <Deliveries id={userId} />;
}
