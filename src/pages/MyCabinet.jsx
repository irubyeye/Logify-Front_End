import React, { useEffect, useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import PostService from "../API/postService";
import MyData from "../components/userCabinetComponent/MyData";
import MyCompanyData from "../components/userCabinetComponent/MyCompanyData";

export default function MyCabinet(props) {
  const router = useNavigate();
  const [myData, setMyData] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasCompany, setHasCompany] = useState(false);
  const [companyData, setCompanyData] = useState({});
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [fetchMyData, isMyDataLoading, myDataError] = useFetch(async (id) => {
    try {
      const response = await PostService.getMyData(id);
      setMyData(response.data.user);
      const adminResponse = await PostService.isAdmin(token);
      setIsAdmin(adminResponse);
      const companyResponse = await PostService.hasCompany(id);
      setHasCompany(companyResponse.data);

      if (companyResponse.data.has) {
        const companyData = await PostService.companyData(
          companyResponse.data.company
        );
        setCompanyData(companyData.data.company);
        localStorage.setItem("companyId", companyData.data.company._id);
      }
    } catch (e) {
      console.log(myDataError);
    }
  });

  useEffect(() => {
    fetchMyData(userId);
  }, []);

  return (
    <div>
      <MyData user={myData} />
      {hasCompany.has ? <MyCompanyData company={companyData} /> : null}
      {isAdmin ? (
        <a href="http://localhost:7171/admin/resources/User">
          <MyButton style={{ marginTop: "10px" }}>Admin Panel</MyButton>
        </a>
      ) : null}
    </div>
  );
}
