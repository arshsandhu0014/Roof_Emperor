import "./dropdown.css";

const Dropdown = ({
  toggleDropdown,
  phoneNumberExists,
  tokenExists,
  currentUserId,
  currentUserName,
  currentPgName,
}) => {
  return (
    <div className='dropdown-main'>
      <div className='visitpage-main'>
        <h3>We will contact you within 24 hours</h3>
        <input type='number' placeholder='Enter your phone number' min='0' />
        <button>SUBMIT REQUEST</button>
      </div>
    </div>
  );
};

export default Dropdown;
