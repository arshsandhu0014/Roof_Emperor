import { useState } from "react";
import "./bookvisit.css";
import CustomButton from "../custom-button/CustomButton";
import { Link } from "react-router-dom";

const BookVisit = ({ toggleDropdown, id }) => {
  const [visible, setVisible] = useState("book");
  return (
    <div className='book-visit-main'>
      <div className='options'>
        <h4 className='view-book-button' onClick={() => setVisible("book")}>
          Book
        </h4>
        <h4>|</h4>
        <h4 className='view-visit-button' onClick={() => setVisible("visit")}>
          Visit
        </h4>
      </div>

      {visible === "book" ? (
        <div className='view-section'>
          <h5>This accomodation can be yours</h5>
          <Link to={`/info/${id}/book`}>
            <CustomButton width='20rem' height='5rem' text='BOOK NOW' />
          </Link>
        </div>
      ) : (
        <div className='view-section'>
          <h5>Want to checkout first?</h5>
          <CustomButton
            width='20rem'
            height='5rem'
            text='VISIT'
            customClickEvent={toggleDropdown}
          />
        </div>
      )}
    </div>
  );
};

export default BookVisit;
