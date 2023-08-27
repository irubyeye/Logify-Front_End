import React from "react";
import TruckItem from "./TruckItem";

export default function TruckList({ trucks, title }) {
  if (!trucks.length) {
    return <h2 style={{ textAlign: "center" }}>List is empty</h2>;
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        {trucks.map((truck, index) => {
          return (
            <div key={truck._id}>
              <TruckItem truck={truck}></TruckItem>
            </div>
          );
        })}
      </div>
    );
  }
}
