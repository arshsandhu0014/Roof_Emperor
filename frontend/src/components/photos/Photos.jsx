import "./photos.css";
import { useState } from "react";

const Photos = ({ changePhotoLeft, changePhotoRight, currentPhotoIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  return (
    <div className='photos-main'>
      <div onClick={changePhotoLeft} className='left-arrow'>
        {"<"}
      </div>
      <img
        src={
          currentPhotoIndex === 0
            ? "https://image.shutterstock.com/image-photo/high-resolution-low-angle-close-260nw-794003098.jpg"
            : "https://us.123rf.com/450wm/lenlensphoto/lenlensphoto1804/lenlensphoto180400037/99623959-low-angle-close-up-macro-photo-of-red-cosmos-flowers-in-morning-sun-warm-solar-in-winter-behind-cosm.jpg"
        }
        alt='room'
      />
      <div onClick={changePhotoRight} className='right-arrow'>
        {">"}
      </div>
    </div>
  );
};

export default Photos;
