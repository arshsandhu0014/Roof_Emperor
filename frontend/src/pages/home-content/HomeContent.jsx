import "./homeContent.css";
import HomeImg from "../../assets/home-image.jpg";
import Youtube from "../../assets/youtube.svg";
import Facebook from "../../assets/facebook.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Instagram from "../../assets/instagram.svg";
import CustomButton from "../../components/custom-button/CustomButton";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className='home-content-main'>
      <div className='home-content'>
        <div className='home-text'>
          <h1>ROOF EMPEROR</h1>
          <h2>500+ PGs</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            harum tenetur reiciendis at quia
          </p>
          <Link to='/list'>
            <CustomButton width='22rem' height='5rem' text='EXPLORE NOW' />
          </Link>
          <div className='icons'>
            <img src={Youtube} alt='youtube' />
            <img src={Facebook} alt='facebook' />
            <img src={Whatsapp} alt='whatsapp' />
            <img src={Instagram} alt='instagram' />
          </div>
        </div>

        <img className='home-image' src={HomeImg} alt='Home' />
      </div>
    </div>
  );
};

export default HomeContent;
