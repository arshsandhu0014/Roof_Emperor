import React, { useEffect, useState } from "react";
import Facilities from "./../../components/facilities/Facilities";
import ItemsList from "./../../components/items-list/ItemsList";
import axios from "axios";
import PgInfo from "./../../components/pg-info/PgInfo";
import RecommendedRooms from "../../components/recommenedRooms/RecommendedRooms";

const PgExplore = () => {
  const [pgList, setPgList] = useState([]);

  useEffect(() => {
    const fetchPgs = async () => {
      const { data } = await axios.get("/api/v1/pgs");

      setPgList(data.data.docs);
    };
    fetchPgs();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <ItemsList pgList={pgList} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <PgInfo />
        <RecommendedRooms />
      </div>
    </div>
  );
};

export default PgExplore;
