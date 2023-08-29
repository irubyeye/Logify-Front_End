import { useState } from "react";
import "../styles/App.css";

import { useEffect } from "react";
import PostService from "../API/postService";
import Loader from "../components/UI/loader/Loader";
import { useFetch } from "../hooks/useFetch";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import CargoList from "../components/cargoComponents/CargoList";
import ResultsAmount from "../components/UI/resultsPicker/ResultsAmount";

export default function Cargos({ token }) {
  const [cargos, setCargos] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchCargos, isCargosLoading, cargosError] = useFetch(
    async (limit, page) => {
      try {
        if (!token) {
          const response = await PostService.getAllCargos(limit, page);
          setCargos(response.data.cargos);

          const totalCount = response.data.totalResults;
          setTotalPages(getPageCount(totalCount, limit));
        } else {
          const response = await PostService.getCurrentUserCargos(
            limit,
            page,
            null,
            null,
            token
          );
          setCargos(response.data.cargos);

          const totalCount = response.data.totalResults;
          setTotalPages(getPageCount(totalCount, limit));
        }
      } catch (e) {
        console.log(cargosError);
      }
    }
  );

  useEffect(() => {
    fetchCargos(limit, page);
  }, [limit, page]);

  const changePage = (page) => {
    setPage(page);
    fetchCargos(limit, page);
  };

  const changeLimit = (newLimit) => {
    setLimit(newLimit);
    setPage(1);
    fetchCargos(newLimit, page);
  };

  return (
    <div>
      {cargosError && <h1>Something went wrong</h1>}
      {isCargosLoading ? (
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
          <CargoList
            cargos={cargos}
            title={!token ? "List of current available cargos" : "Your cargos"}
          />
        </div>
      )}
      <Pagination totalPages={totalPages} changePage={changePage} page={page} />
    </div>
  );
}
