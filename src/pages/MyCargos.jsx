import React from "react";
import Cargos from "./Cargos";

export default function MyCargos() {
  const token = localStorage.getItem("token");
  return <Cargos token={token} />;
}
