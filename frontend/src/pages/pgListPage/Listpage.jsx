import ItemsList from "../../components/items-list/ItemsList";
import Map from "../../components/map/Map";
import "./listpage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListPage = () => {
  return (
    <div className='listpage-main'>
      <ItemsList />
      <div className='list-map'>
        <Map />
      </div>
    </div>
  );
};
export default ListPage;
