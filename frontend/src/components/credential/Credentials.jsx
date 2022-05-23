import "./credentials.css";

const Credential = ({ name, type, onChange }) => {
  return (
    <div className='credential-main'>
      <div className='form'>
        <input
          autoComplete='off'
          spellCheck='false'
          type={type}
          id={name}
          onChange={onChange}
        />
        <label htmlFor={name} className='label-name'>
          <span className='content-name'>{name}</span>
        </label>
      </div>
    </div>
  );
};

export default Credential;
