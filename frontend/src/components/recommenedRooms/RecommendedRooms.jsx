import "./recommendedRooms.css";

const RecommendedRooms = ({ currentPgData }) => {
  return (
    <div className='recommended-main'>
      <h4 className='heading-md'>Recommended Pgs For You</h4>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        }}
      >
        {[1, 2, 3, 4].map(() => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <img
              style={{
                width: "8rem",
                height: "6rem",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
              src='http://localhost:3000/img/tours/tour-4-cover.jpg'
              alt=''
            />
            <h3>
              <h6>4.8 rating </h6>
              <h6>90 reviews </h6>
            </h3>
            <div>
              <h2>Room No 803</h2>
              <h2>&#8377; 3000</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedRooms;
