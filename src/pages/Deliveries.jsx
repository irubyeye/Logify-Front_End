import React from "react";
import { useState } from "react";
import "../styles/App.css";
import { useEffect } from "react";
import PostService from "../API/postService";
import { useFetch } from "../hooks/useFetch";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import ResultsAmount from "../components/UI/resultsPicker/ResultsAmount";
import Loader from "../components/UI/loader/Loader";
import DeliveryList from "../components/deliveryComponents/DeliveryList";

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchDeliveries, isDeliveriesLoading, deliveriesError] = useFetch(
    async () => {
      try {
        const response = await PostService.getActiveDeliveries();
        setDeliveries(response.data.deliveries);

        console.log(deliveries);
        const totalCount = response.data.deliveries.length;
        setTotalPages(getPageCount(totalCount, limit));
      } catch (e) {
        console.log(deliveriesError);
      }
    }
  );

  useEffect(() => {
    fetchDeliveries();
  }, []);

  return (
    <div>
      {deliveriesError && <h1>Something went wrong</h1>}
      {isDeliveriesLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div>
          <DeliveryList
            deliveries={deliveries}
            title={"List of active deliveries"}
          />
        </div>
      )}{" "}
    </div>
  );
}
