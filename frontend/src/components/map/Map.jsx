import "./map.css";
import GoogleMapReact from "google-map-react";
import Marker from "../../assets/icons/marker.png";

const AnyReactComponent = () => (
  <img src={Marker} alt='marker' width='40px' height='65px' />
);

const Map = ({ infopage, location, currentPgLocation }) => {
  // const defaultProps = {
  //   center: {
  //     lat: !infopage ? location.lat : currentPgLocation.lat,
  //     lng: !infopage ? location.lon : currentPgLocation.lon,
  //   },3
  //   zoom: 19,
  // }

  return (
    <div className={`map-main${infopage ? " infopage-map" : ""}`}>
      {infopage ? (
        <div className='map'>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCfQL-GnKbGo80EYFfB68VY5ZZyNFcJFnk",
            }}
            defaultCenter={{
              lat: 31.334485,
              lng: 75.608649,
            }}
            defaultZoom={19}
          >
            <AnyReactComponent lat={31.334485} lng={75.608649} />
          </GoogleMapReact>
        </div>
      ) : 31.334485 ? (
        <div className='map'>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCfQL-GnKbGo80EYFfB68VY5ZZyNFcJFnk",
            }}
            defaultCenter={{
              lat: 31.334485,
              lng: 75.608649,
            }}
            defaultZoom={19}
          >
            <AnyReactComponent lat={31.334485} lng={75.608649} />
          </GoogleMapReact>
        </div>
      ) : (
        <iframe
          width='100%'
          title='map'
          height='100%'
          style={{ border: 0, borderRadius: "5rem" }}
          loading='lazy'
          src='https://www.google.com/maps/embed/v1/place?zoom=15&q=Lovely+Professional+University,Punjab&key=AIzaSyCfQL-GnKbGo80EYFfB68VY5ZZyNFcJFnk'
        ></iframe>
      )}
    </div>
  );
};

export default Map;
