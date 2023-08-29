import React, { useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import PostService from "../API/postService";
import { useFetch } from "../hooks/useFetch";

const CreateCargo = () => {
  const transportType = [
    "Flatbed Trailer",
    "Refrigerated Trailer",
    "Dry Van Trailer",
    "Tanker Trailer",
    "Lowboy Trailer",
    "Dump Trailer",
    "Livestock Trailer",
    "Car Carrier Trailer",
    "Container Trailer",
    "Open-Top Trailer",
    "Curtain-Side Trailer",
    "Intermodal Trailer",
    "Logging Trailer",
    "Beverage Trailer",
    "Utility Trailer",
  ];
  const initialCargoData = {
    cargoHolder: localStorage.getItem("userId"), // Replace with the actual user ID
    loadingFromDate: "",
    loadingToDate: "",
    pickUpLocation: [],
    dropOffLocation: [],
    cargoName: "",
    cargoType: "",
    cargoWeight: 0,
    cargoVolume: 0,
    transportType: "",
    certainCargoParams: {
      length: 0,
      width: 0,
      height: 0,
    },
    isHumanitarian: false,
    supposedPrice: [],
    paymentDetails: [],
    cargoStatus: "Created",
  };

  const [cargoData, setCargoData] = useState(initialCargoData);

  const [tryCreateCargo, isLoading, error] = useFetch(async (data) => {
    try {
      const response = await PostService.createCargo(data);
    } catch (e) {
      alert(e.response.data);
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await tryCreateCargo(cargoData);
    console.log(cargoData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const nameParts = name.split(".");
    if (nameParts.length === 2) {
      const parentField = nameParts[0];
      const childField = nameParts[1];

      const updatedParentField = {
        ...cargoData[parentField],
        [childField]: value,
      };

      setCargoData({
        ...cargoData,
        [parentField]: updatedParentField,
      });
    } else {
      setCargoData({
        ...cargoData,
        [name]: value,
      });
    }
  };

  return (
    <div className="create-cargo-container">
      <h2>Create Cargo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cargo Holder:</label>
          <input
            type="text"
            name="cargoHolder"
            value={cargoData.cargoHolder}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Loading From Date: </label>
          <input
            type="datetime-local"
            name="loadingFromDate"
            value={cargoData.loadingFromDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Loading To Date:</label>
          <input
            type="datetime-local"
            name="loadingToDate"
            value={cargoData.loadingToDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Pick Up Locations:</label>
          <input
            type="text"
            name="pickUpLocation"
            value={cargoData.pickUpLocation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Drop Off Locations:</label>
          <input
            type="text"
            name="dropOffLocation"
            value={cargoData.dropOffLocation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Cargo Name:</label>
          <input
            type="text"
            name="cargoName"
            value={cargoData.cargoName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Cargo Type:</label>
          <input
            type="text"
            name="cargoType"
            value={cargoData.cargoType}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Cargo Weight:</label>
          <input
            type="number"
            name="cargoWeight"
            value={cargoData.cargoWeight}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Cargo Volume:</label>
          <input
            type="number"
            name="cargoVolume"
            value={cargoData.cargoVolume}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Transport Type:</label>
          <select
            name="transportType"
            value={cargoData.transportType}
            onChange={handleInputChange}
            required
          >
            {transportType.map((transport, index) => {
              return <option key={index}>{transport}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Certain Cargo Params:</label>
          <div>
            <label>Length:</label>
            <input
              type="number"
              name="certainCargoParams.length"
              value={cargoData.certainCargoParams.length}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Height:</label>
            <input
              type="number"
              name="certainCargoParams.height"
              value={cargoData.certainCargoParams.height}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Width:</label>
            <input
              type="number"
              name="certainCargoParams.width"
              value={cargoData.certainCargoParams.width}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div>
          <label>Is Humanitarian:</label>
          <input
            type="checkbox"
            name="isHumanitarian"
            checked={cargoData.isHumanitarian}
            onChange={(e) =>
              setCargoData((prevData) => ({
                ...prevData,
                isHumanitarian: e.target.checked,
              }))
            }
          />
        </div>
        <div>
          <label>Supposed Price:</label>
          <input
            type="text"
            name="supposedPrice"
            value={cargoData.supposedPrice}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Payment Details:</label>
          <input
            type="text"
            name="paymentDetails"
            value={cargoData.paymentDetails}
            onChange={handleInputChange}
          />
        </div>
        <MyButton type="submit">Create Cargo</MyButton>
      </form>
    </div>
  );
};

export default CreateCargo;
