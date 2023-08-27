import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDateTime, simpleDate } from "../../utils/dateConverter";
import MyButton from "../UI/button/MyButton";

export default function CargoItem(props) {
  const router = useNavigate();
  const formattedDateTime = formatDateTime(props.cargo.creatingDate);
  const loadingFromDate = simpleDate(props.cargo.loadingFromDate);
  const loadingToDate = simpleDate(props.cargo.loadingToDate);

  return (
    <div className="post">
      <div className="post__content">
        <h4>{props.cargo.cargoName}</h4>
        <div>🕒 Created At: {formattedDateTime}</div>
        <div style={{ display: "flex" }}>
          <div>
            🗓️ {loadingFromDate}-{loadingToDate} &nbsp;
          </div>
          <div>🚛 {props.cargo.transportType}</div> &nbsp;
          <div>⚖️ {props.cargo.cargoWeight} t</div>
        </div>
        {props.cargo.isHumanitarian ? <div>Humanitarian Aid ⛑️</div> : null}
        <div style={{ display: "flex" }}>
          <div>
            🚀 <strong>From</strong> {props.cargo.pickUpLocation.join("--")}
          </div>{" "}
          &nbsp;
          <div>
            🏁<strong>To</strong> {props.cargo.dropOffLocation.join("--")}
          </div>
        </div>
        <div>💵 {props.cargo.supposedPrice.join("--")}</div>
        <div>💳 {props.cargo.paymentDetails.join(" ")}</div>
        <MyButton
          style={{ marginTop: "10px" }}
          onClick={() => router(`/cargos/${props.cargo._id}`)}
        >
          Details
        </MyButton>
      </div>
    </div>
  );
}
