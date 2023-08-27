import React from "react";
import "../../styles/App.css"; // Подключение файла со стилями

const CargoIdItem = ({ cargo }) => {
  const {
    _id,
    cargoHolder,
    loadingFromDate,
    loadingToDate,
    pickUpLocation,
    dropOffLocation,
    cargoType,
    cargoWeight,
    cargoVolume,
    transportType,
    isHumanitarian,
    supposedPrice,
    paymentDetails,
    cargoStatus,
    creatingDate,
  } = cargo;

  return (
    <article>
      <div className="cargo-details">
        <h2>Cargo Details</h2>
        <div className="cargo-param">
          <strong>ID:</strong> {_id}
        </div>
        <div className="cargo-param">
          <strong>Cargo Holder:</strong> {cargoHolder}
        </div>
        <div className="cargo-param">
          <strong>Loading Date:</strong> {loadingFromDate} - {loadingToDate}
        </div>
        <div className="cargo-param">
          <strong>Pick Up Locations:</strong>
          <ul>
            {pickUpLocation &&
              pickUpLocation.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
          </ul>
        </div>
        <div className="cargo-param">
          <strong>Drop Off Locations:</strong>
          <ul>
            {dropOffLocation &&
              dropOffLocation.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
          </ul>
        </div>
        <div className="cargo-param">
          <strong>Cargo Type:</strong> {cargoType}
        </div>
        <div className="cargo-param">
          <strong>Cargo Weight:</strong> {cargoWeight} kg
        </div>
        <div className="cargo-param">
          <strong>Cargo Volume:</strong> {cargoVolume} cubic meters
        </div>
        <div className="cargo-param">
          <strong>Transport Type:</strong> {transportType}
        </div>
        <div className="cargo-param">
          <strong>Is Humanitarian:</strong> {isHumanitarian ? "Yes" : "No"}
        </div>
        <div className="cargo-param">
          <strong>Supposed Price Range:</strong>{" "}
          {supposedPrice && supposedPrice.join(" - ")}
        </div>
        <div className="cargo-param">
          <strong>Payment Details:</strong>
          <ul>
            {paymentDetails &&
              paymentDetails.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
          </ul>
        </div>
        <div className="cargo-param">
          <strong>Cargo Status:</strong> {cargoStatus}
        </div>
        <div className="cargo-param">
          <strong>Creating Date:</strong> {creatingDate}
        </div>
      </div>
    </article>
  );
};

export default CargoIdItem;
