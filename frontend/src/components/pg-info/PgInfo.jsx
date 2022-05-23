import "./pgInfo.css";

const PgInfo = ({ currentPgData }) => {
  return (
    <div className='pginfo-main'>
      <h4 className='heading-md'>Home Society</h4>
      <h5 className='heading-ls'>
        Address -{" "}
        <span>
          <h6 className='heading-ls'>Tilak Nagar , Delhi</h6>
        </span>
      </h5>
      <h5 className='heading-ls'>
        Rent -{" "}
        <span>
          <h6 className='heading-ls'>$500 / room per month</h6>
        </span>
      </h5>
      <h5 className='heading-ls'>
        Electricity -{" "}
        <span>
          <h6 className='heading-ls'>$8/unit</h6>
        </span>
      </h5>
      <h5 className='heading-ls'>
        Security Deposit -{" "}
        <span>
          <h6 className='heading-ls'>$100</h6>
        </span>
      </h5>
    </div>
  );
};

export default PgInfo;
