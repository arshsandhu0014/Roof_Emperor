import "./facilities.css";
// import { connect } from 'react-redux';
// import { selectCurrentPgFacilities } from '../../redux/pgInfo/pginfo.selectors';
import ac from "../../assets/icons/ac.png";
import battery from "../../assets/icons/battery.png";
import bed from "../../assets/icons/bed.png";
import chair from "../../assets/icons/chair.png";
import cooler from "../../assets/icons/cooler.png";
import parking from "../../assets/icons/parking.png";
import purifier from "../../assets/icons/purifier.png";
import table from "../../assets/icons/table.png";
import tv from "../../assets/icons/tv.png";
import wifi from "../../assets/icons/wifi.png";

const Facilities = () => {
  const facilities = [
    "tv",
    "ac",
    "battery",
    "bed",
    "chair",
    "cooler",
    "parking",
    "purifier",
    "table",
    "wifi",
  ];

  const mapStringToIcon = (facilityString) => {
    switch (facilityString) {
      case "tv":
        return tv;
      case "ac":
        return ac;
      case "battery":
        return battery;
      case "bed":
        return bed;
      case "chair":
        return chair;
      case "cooler":
        return cooler;
      case "parking":
        return parking;
      case "purifier":
        return purifier;
      case "table":
        return table;
      case "wifi":
        return wifi;

      default:
        return;
    }
  };

  return (
    <div className='facilities-main'>
      <h4 className='heading-sm'>Facilities &#38; Amnities</h4>
      <div className='facility'>
        {facilities.map((facility, index) => (
          <div className='icons' key={index}>
            <img src={mapStringToIcon(facility)} alt={facility} />
            <h6 className='heading-ls'>{facility}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
