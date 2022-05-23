import "./itemDetail.css";
import { Link } from "react-router-dom";
import Icon from "../../assets/appliances.svg";

const ItemDetail = ({ pg }) => {
  console.log(pg);
  return (
    <div className='item-detail-main'>
      <p>{pg.standard}</p>
      <Link to='/pgExplore/1'>
        <img
          className='pg-image'
          src={`/img/tours/${pg.imageCover}`}
          alt='room'
        />
      </Link>

      <div className='info-section'>
        <div className='text'>
          <div>
            <h4 className='heading-sm'>{pg.pgName}</h4>

            <h5 className='heading-ls'>
              {pg.location.address} , {pg.location.city}
            </h5>

            <p className='p-ls'>contact : {pg.phone}</p>
          </div>

          <h5 className='heading-ls'>
            <span
              style={{
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: "1.6rem",
              }}
            >
              ₹{pg.priceRange[0]} - ₹{pg.priceRange[1]}
            </span>
            /room |
            <span style={{ color: "grey", fontSize: "1.2rem" }}>
              {" "}
              Deposit :{" "}
            </span>
            <span style={{ fontFamily: "sans-serif", color: "grey" }}>
              ₹{pg.deposit}
            </span>
          </h5>
        </div>
        <div className='facilities'>
          <img src={Icon} alt='1' />
          <img src={Icon} alt='2' />
          <img src={Icon} alt='3' />
          <img src={Icon} alt='1' />
          <img src={Icon} alt='2' />
          <img src={Icon} alt='3' />
        </div>
      </div>
      <div className='buttons'>
        <button
          className='view-map'
          // onClick={() => setMapLocation(latitude, longitude)}
        >
          View in Map
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
