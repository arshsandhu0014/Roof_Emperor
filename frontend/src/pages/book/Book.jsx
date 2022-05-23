import { useState } from "react";
import "./book.css";
import GreenTick from "../../assets/icons/green_tick.png";
import { withRouter } from "react-router-dom";

const Book = () => {
  const [paid, setpaid] = useState(false);
  const [isAgreed, setisAgreed] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  return (
    <div className='book-main'>
      {!this.state.paid ? (
        <div className='book-content'>
          <p className='terms'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            nemo voluptatibus nam modi incidunt recusandae voluptatem, eaque
            quis tenetur omnis quisquam temporibus qui necessitatibus sequi
            tempora dignissimos asperiores in. Alias? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Aliquid nemo voluptatibus nam
            modi incidunt recusandae voluptatem, eaque quis tenetur omnis
            quisquam temporibus qui necessitatibus sequi tempora dignissimos
            asperiores in. Alias? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aliquid nemo voluptatibus nam modi incidunt
            recusandae voluptatem, eaque quis tenetur omnis quisquam temporibus
            qui necessitatibus sequi tempora dignissimos asperiores in. Alias?
          </p>
          {/* <input
							type="checkbox"
							id="agreed"
							name="agreed"
							value="agreed"
							checked={this.state.isAgreed}
							onChange={this.handleAgreed}
						/>
						<label htmlFor="agreed">
							I agree to the terms and conditions
						</label> */}
          <button
            disabled={this.state.isAgreed}
            className='pay'
            onClick={() => this.loadScript("pl_Hb9RjDdmLFJAru")}
          >
            I agree
          </button>
          <br />
          <div className='pay' ref={(el) => (this.instance = el)} />
        </div>
      ) : (
        <img width='200' src={GreenTick} alt='Green Tick' className='paid' />
      )}
    </div>
  );
};

export default Book;
