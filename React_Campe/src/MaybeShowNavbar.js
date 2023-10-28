// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const MaybeShowNavbar = () => {
//   const location = useLocation();
//   const [showNavBar, setShowNavBar] = useState(true); // Default to true

//   useEffect(() => {
//     if (location.pathname === '/login') {
//       setShowNavBar(false);
//     } else {
//       setShowNavBar(true);
//     }
//   }, [location.pathname]);

//   return <div>{showNavBar}</div>;
// };

// export default MaybeShowNavbar;
