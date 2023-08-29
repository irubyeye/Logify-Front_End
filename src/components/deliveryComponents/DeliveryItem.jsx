import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDateTime, simpleDate } from "../../utils/dateConverter";
import MyButton from "../UI/button/MyButton";

export default function DeliveryItem(props) {
  const router = useNavigate();

  const createdDateTime = formatDateTime(props.delivery.creatingDate);
  const loadingFromDate = simpleDate(props.delivery.loadingFromDate);
  const loadingToDate = simpleDate(props.delivery.loadingToDate);
  return (
    <div className="post">
      <div className="post__content">
        <h4>{}</h4>
        <div style={{ display: "flex" }}>
          <div>🕒 {createdDateTime}</div> &nbsp;
          <div>🚛 {props.delivery.trucks.trailerType}</div>&nbsp;
          <div>📦 {props.delivery.trucks.truckSpace} m3</div>&nbsp;
          <div>⚖️ {props.delivery.trucks.truckSpace} m3</div>
        </div>
        <div style={{ display: "flex" }}>
          <div>🚀 From {props.delivery.departureLocation.join("")}</div>&nbsp;
          <div>🏁 To {props.delivery.destination.join("")}</div>
        </div>
        <MyButton
          style={{ marginTop: "10px" }}
          onClick={() => router(`/deliveries/${props.delivery.deliveryId}`)}
        >
          Details
        </MyButton>
      </div>
    </div>
  );
}
