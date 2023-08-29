import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import PostService from "../API/postService";
import Loader from "../components/UI/loader/Loader";
import CargoItem from "../components/cargoComponents/CargoItem";
import CargoIdItem from "../components/cargoComponents/CargoIdItem";
import DeliveryIdItem from "../components/deliveryComponents/DeliveryIdItem";

export default function DeliveryIdPage() {
  const params = useParams();
  const [delivery, setDelivery] = useState({});

  const [fetchDeliveryById, isDeliveryIdLoading, error] = useFetch(async () => {
    const response = await PostService.getActiveDeliveries();
    const deliveries = response.data.deliveries;

    const delivery = deliveries.filter(
      (delivery) => params.id === delivery.deliveryId
    );

    setDelivery(...delivery);
  });

  useEffect(() => {
    fetchDeliveryById();
  }, []);
  return (
    <div>
      {isDeliveryIdLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div className="App">
          <DeliveryIdItem delivery={delivery} />
        </div>
      )}
    </div>
  );
}
