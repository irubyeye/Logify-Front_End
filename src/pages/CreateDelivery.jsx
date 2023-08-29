import React, { useState } from "react";
import axios from "axios";
import "../styles/App.css";
import { useFetch } from "../hooks/useFetch";
import PostService from "../API/postService";

export default function CreateDelivery() {
  const [loadingFromDate, setLoadingFromDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [departureLocation, setDepartureLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [requireHumanitarian, setRequireHumanitarian] = useState(false);
  const companyId = localStorage.getItem("companyId");

  const [tryCreateDelivery, isLoading, error] = useFetch(
    async (companyId, data) => {
      try {
        const response = await PostService.createDelivery(companyId, data);
        alert("Succesfully created!");
      } catch (e) {
        alert(e.response.data);
      }
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const deliveryData = {
      loadingFromDate,
      startDate,
      departureLocation: [departureLocation],
      destination: [destination],
      requireHumanitarian,
    };

    tryCreateDelivery(companyId, deliveryData);
  };

  return (
    <div className="create-cargo-container">
      <h2>Create Delivery</h2>
      <form className="create-cargo-form" onSubmit={handleSubmit}>
        <label className="create-cargo-label">
          Loading From Date:
          <input
            className="create-cargo-input"
            type="datetime-local"
            value={loadingFromDate}
            onChange={(e) => setLoadingFromDate(e.target.value)}
            required
          />
        </label>
        <label className="create-cargo-label">
          Start Date:
          <input
            className="create-cargo-input"
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label className="create-cargo-label">
          Departure Location:
          <input
            className="create-cargo-input"
            type="text"
            value={departureLocation}
            onChange={(e) => setDepartureLocation(e.target.value)}
            required
          />
        </label>
        <label className="create-cargo-label">
          Destination:
          <input
            className="create-cargo-input"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </label>
        <label className="create-cargo-label">
          Require Humanitarian:
          <input
            className="create-cargo-checkbox"
            type="checkbox"
            checked={requireHumanitarian}
            onChange={(e) => setRequireHumanitarian(e.target.checked)}
          />
        </label>
        <button className="create-cargo-button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
