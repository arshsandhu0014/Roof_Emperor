import { useState } from "react";
import "./infopage.css";
import Facilities from "../../components/facilities/Facilities";
import Photos from "../../components/photos/Photos";
import PgInfo from "../../components/pg-info/PgInfo";

import Map from "./../../components/map/Map";

const Infopage = ({ dropdownHidden, match }) => {
  return (
    <div>
      <div className='infopage-main'>
        <div className='detail-photo'>
          <PgInfo />
          <Photos />
        </div>
        <Facilities />
        <div className='map-book-visit'>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Infopage;
