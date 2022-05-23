import "./customButton.css";

const CustomButton = ({ width, height, text, customClickEvent }) => {
  return (
    <div className='custom-button-main' onClick={customClickEvent}>
      <button style={{ width: `${width}`, height: `${height}` }}>{text}</button>
    </div>
  );
};

export default CustomButton;
