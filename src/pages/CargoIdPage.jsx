import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import PostService from "../API/postService";
import Loader from "../components/UI/loader/Loader";
import CargoItem from "../components/cargoComponents/CargoItem";
import CargoIdItem from "../components/cargoComponents/CargoIdItem";

export default function CargoIdPage() {
  const params = useParams();
  const [cargo, setCargo] = useState({});

  const [fetchCargoById, isLoading, error] = useFetch(async (id) => {
    const response = await PostService.getCargoById(id);
    console.log(response.data.cargo);

    setCargo(response.data.cargo);
  });

  useEffect(() => {
    fetchCargoById(params.id);
  }, []);
  return (
    <div className="App">
      <CargoIdItem cargo={cargo} />
    </div>
  );
}
