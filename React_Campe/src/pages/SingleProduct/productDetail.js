import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Rating } from "../../helper";
import "./ReviewRedux/style.css";
import Slider from "./products_slider/products_slider";

const ProductDetails = ({ id }) => {
  const [details, setDetails] = useState([]);
  const [rating, setRating] = useState([]);
  const [averageRating, setAverageRating] = useState(2);
  console.log('idddddddddddddddddddddddddd');
console.log(id);
  useEffect(() => {
    const getProductDetails = () => {
      axios
        .get(`http://127.0.0.1:8000/api/packages/${id}`) 
        .then((response) => {
          setDetails(response.data[0]);
          console.log(response.data[0].name);
        })
        .catch((error) => console.error(error));
    };

    getProductDetails();
  }, [id]);

// rate 
useEffect(() => {
  const getReviews = () => {
    axios
      .get(`http://127.0.0.1:8000/api/reviews/${id}`)
      .then((response) => {
        console.log('in detaillsss');
        console.log(response);
        const reviews = response.data;
        setRating(reviews);

          // Calculate the average rating
          const totalRating = reviews.reduce(
            (acc, review) => acc + review.rate,
            0
          );
          const averageRating = totalRating / reviews.length;
          setAverageRating(averageRating);
        })
        .catch((error) => console.error(error));
    };

    getReviews();
  }, [id]);

  //

  let package_id = 1;

  return (
    <div className="sigma_team style-17 mb-0">
      <div className="row no-gutters">
        <div className="col-md-6">
          <div className="sigma_team-thumb">
            <Slider package_id={package_id} />

            {/* <img
              src={"http://127.0.0.1:8000/photo/" + details.image}
              alt="Selected Image"
              width="170"
              height="170"
              className="rounded-circle mt-2"
            /> */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="sigma_team-body">
            <h5>{details.name}</h5>
            <div className="sigma_rating">
              {Rating(averageRating.toFixed(2))}
              <span className="ml-3">({averageRating.toFixed(2)})</span>
            </div>
            <div className="sigma_team-categories">{details.description}</div>
            <div className="sigma_team-info mt-4">
              <span>
                <i className="fas fa-user" /> {details.number_of_person} Persons
              </span>

              <span>
                {/* <FontAwesomeIcon icon={faMoneyBill} /> */}
                <i className="fas fa-dollar-sign" /> Rent Price: {details.price}{" "}
                JOD per day
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Rating } from "../../helper";
// import "./ReviewRedux/style.css";
// import Slider from "./products_slider/products_slider";

// const ProductDetails = ({ id }) => {
//   const [details, setDetails] = useState([]);
//   const [rating, setRating] = useState([]);
//   const [averageRating, setAverageRating] = useState(2);

//   useEffect(() => {
//     const getProductDetails = ({ id }) => {
//       axios
//         .get(`http://127.0.0.1:8000/api/packages/${id}`)
//         .then((response) => {
//           setDetails(response.data[0]);
//           console.log(response.data[0].name);
//         })
//         .catch((error) => console.error(error));
//     };

//     getProductDetails();
//   }, [id]);

//   useEffect(() => {
//     const getReviews = ({ id }) => {
//       axios
//         .get(`http://127.0.0.1:8000/api/reviews/${id}`)
//         .then((response) => {
//           const reviews = response.data;
//           setRating(reviews);

//           // Calculate the average rating
//           const totalRating = reviews.reduce(
//             (acc, review) => acc + review.rate,
//             0
//           );
//           const averageRating = totalRating / reviews.length;
//           setAverageRating(averageRating);
//         })
//         .catch((error) => console.error(error));
//     };

//     getReviews();
//   }, [id]);

//   // Check if details is defined before accessing its properties
//   if (!details) {
//     return <div>Loading...</div>;
//   }

//   let package_id = 1;

//   return (
//     <div className="sigma_team style-17 mb-0">
//       <div className="row no-gutters">
//         <div className="col-md-6">
//           <div className="sigma_team-thumb">
//             <Slider package_id={package_id} />
//             <img
//               src={"http://127.0.0.1:8000/photo/" + details.image}
//               alt="Selected Image"
//               width="170"
//               height="170"
//               className="rounded-circle mt-2"
//             />
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="sigma_team-body">
//             <h5>{details.name}</h5>
//             <div className="sigma_rating">
//               {Rating(averageRating.toFixed(2))}
//               <span className="ml-3">({averageRating.toFixed(2)})</span>
//             </div>
//             <div className="sigma_team-categories">{details.description}</div>
//             <div className="sigma_team-info mt-4">
//               <span>
//                 <i className="fas fa-user" /> {details.number_of_person} Persons
//               </span>
//               <span>
//                 <i className="fas fa-dollar-sign" /> Rent Price: {details.price}{" "}
//                 JOD per day
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
