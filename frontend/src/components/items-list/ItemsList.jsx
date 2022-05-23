import ItemDetail from "../item-detail/ItemDetail";
import PgFilter from "../../components/Pgfilter/PgFilter";
import "./itemsList.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ItemsList = () => {
  const [pgList, setPgList] = useState([]);

  useEffect(() => {
    const fetchPgs = async () => {
      const { data } = await axios.get("/api/v1/pgs");

      setPgList(data.data.docs);
    };
    fetchPgs();
  }, []);

  return (
    <div className='item-list-main'>
      <div className='title'>
        <div className='title-sub'>
          <h3 className='heading-sm'>Explore All PGs Near You</h3>
        </div>
        <PgFilter />
        <hr />
      </div>

      {pgList && pgList.map((pg) => <ItemDetail pg={pg} />)}
    </div>
  );
};
export default ItemsList;
