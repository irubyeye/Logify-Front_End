import React from "react";
import DeliveryItem from "./DeliveryItem";

export default function DeliveryList({ deliveries, title }) {
  if (!deliveries.length) {
    return <h2 style={{ textAlign: "center" }}>List is empty</h2>;
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        {deliveries.map((delivery, index) => {
          return (
            <div key={delivery.companyId}>
              <DeliveryItem delivery={delivery}></DeliveryItem>
            </div>
          );
        })}
      </div>
    );
  }
}
