import { useState } from "react";
import "../styles/App.css";

import { useEffect } from "react";
import PostService from "../API/postService";
import Loader from "../components/UI/loader/Loader";
import { useFetch } from "../hooks/useFetch";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import ResultsAmount from "../components/UI/resultsPicker/ResultsAmount";
import TruckList from "../components/truckComponents/TruckList";

export default function Trucks() {
  const [trucks, setTrucks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchTrucks, isTrucksLoading, trucksError] = useFetch(
    async (limit, page) => {
      try {
        const response = await PostService.getAllTrucks(limit, page);
        setTrucks(response.data.trucks);
        const totalCount = response.data.totalResults;
        setTotalPages(getPageCount(totalCount, limit));
      } catch (e) {
        console.log(trucksError);
      }
    }
  );

  useEffect(() => {
    fetchTrucks(limit, page);
  }, [limit, page]);

  const changePage = (page) => {
    setPage(page);
    fetchTrucks(limit, page);
  };

  const changeLimit = (newLimit) => {
    setLimit(newLimit);
    setPage(1);
    fetchTrucks(newLimit, page);
  };

  return (
    <div>
      {trucksError && <h1>Something went wrong</h1>}
      {isTrucksLoading ? (
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
          <ResultsAmount limit={limit} changeLimit={changeLimit} />
          <TruckList
            trucks={trucks}
            title={"List of current available trucks"}
          />
        </div>
      )}
      <Pagination totalPages={totalPages} changePage={changePage} page={page} />
    </div>
  );
}
