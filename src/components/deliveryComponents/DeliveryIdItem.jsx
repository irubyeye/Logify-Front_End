import React from "react";
import "../../styles/App.css"; // Подключение файла со стилями
import { formatDateTime, simpleDate } from "../../utils/dateConverter";

const DeliveryIdItem = ({ delivery }) => {
  const {
    companyName,
    creatingDate,
    deliveryId,
    departureLocation,
    destination,
    loadingFromDate,
    loadingToDate,
    trucks,
  } = delivery;
  return (
    <article>
      <div className="delivery-details">
        <h2>Delivery Details</h2>
        <div className="delivery-param">
          <strong>Creating Date:</strong> {formatDateTime(creatingDate)}
        </div>
        <div className="delivery-param">
          <strong>Company Name:</strong> {companyName}
        </div>
        <div className="delivery-param">
          <strong>Delivery ID:</strong> {deliveryId}
        </div>
        <div className="delivery-param">
          <strong>Departure Location:</strong> {departureLocation?.join(", ")}
        </div>
        <div className="delivery-param">
          <strong>Destination:</strong> {destination?.join(", ")}
        </div>
        <div className="delivery-param">
          <strong>Loading Date:</strong> {simpleDate(loadingFromDate)} -{" "}
          {simpleDate(loadingToDate)}
        </div>
        <div className="delivery-param">
          <div className="truck-info">
            <h2>Truck Info:</h2>
            <div className="truck-param">
              <div>
                <strong>Trailer Type:</strong> {trucks?.trailerType}
              </div>
              <div className="truck-param">
                <strong>Transport Type:</strong> {trucks?.transportType}
              </div>
              <div className="truck-param">
                <strong>Truck Payload:</strong> {trucks?.truckPayload} kg
              </div>
              <div className="truck-param">
                <strong>Truck Space:</strong> {trucks?.truckSpace} m³
              </div>
              <div className="truck-param">
                <strong>VIN Number:</strong> {trucks?.vinNum}
              </div>
              <div className="truck-param">
                <strong>Is Available:</strong>{" "}
                {trucks?.isAvailable ? "Yes" : "No"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DeliveryIdItem;
