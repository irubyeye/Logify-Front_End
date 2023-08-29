import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDateTime, simpleDate } from "../../utils/dateConverter";
import MyButton from "../UI/button/MyButton";

export default function TruckItem(props) {
  console.log(props);
  return (
    <div className="post">
      <div className="post__content">
        <div>{props.truck.vinNum}</div>
      </div>
    </div>
  );
}
