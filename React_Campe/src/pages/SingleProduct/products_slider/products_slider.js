// import React, { useState, useEffect, useLayoutEffect } from 'react';
// import axios from "axios";

// import './style.css'
// // import test from './boat1.jpg'

// function ImageGallery({ package_id }) {
//     const [slideIndex, setSlideIndex] = useState(1);
//     const [images, setImages] = useState([]);

//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         const fetchProductDetails = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:8000/api/products/${package_id}`);
//                 setProducts(response.data);
//                 console.log('in the slide');
//                 // console.log(response.data);
//                 // console.log(response.data[0].image);
//             } catch (error) {
//                 console.error('Error fetching product details:', error);
//             }
//         };

//         if (package_id) {
//             fetchProductDetails();
//         }
//     }, [package_id]);

//     // Define your image data
//     // const images = [
//     //     { src: process.env.PUBLIC_URL + '/boat1.jpg', alt: 'The Woods tttt' },
//     //     { src: process.env.PUBLIC_URL + '/boat2.jpg', alt: 'Cinque Terre' },
//     //     { src: process.env.PUBLIC_URL + '/boat3.jpg', alt: 'Mountains and fjords' },
//     //     { src: process.env.PUBLIC_URL + '/boat4.jpg', alt: 'Northern Lights' },
//     //     { src: process.env.PUBLIC_URL + '/boat1.jpg', alt: 'Nature and sunrise' },
//     //     { src: process.env.PUBLIC_URL + '/boat2.jpg', alt: 'Snowy Mountains' },
//     // ];
//     // if (products) {
//     //     setImages(products.map(product => ({
//     //         src: process.env.PUBLIC_URL + product.image,
//     //         alt: product.name, // You can update this as needed
//     //     })))
//     // }
//     useEffect(() => {
//         console.log(products);
//         if (products && products.length > 0) {
//             const productImages = products.map(product => ({
//                 src: process.env.PUBLIC_URL + product.image,
//                 alt: product.name,
//             }))
//             setImages(productImages);
//             console.log('wwwwwwwwwwwwwwwwwwwww');
//             console.log(productImages);
//         }
//     }, [products]);

//     useEffect(() => {
//         showSlides(slideIndex);
//     }, [slideIndex]);

//     // Next/previous controls
//     function plusSlides(n) {
//         setSlideIndex(slideIndex + n);
//     }

//     // Thumbnail image controls
//     function currentSlide(n) {
//         setSlideIndex(n);
//     }

//     // function showSlides(n) {
//     //     const slides = document.getElementsByClassName('mySlides');
//     //     const dots = document.getElementsByClassName('demo');
//     //     const captionText = document.getElementById('caption');

//     //     if (n > slides.length) setSlideIndex(1);
//     //     if (n < 1) setSlideIndex(slides.length);

//     //     for (let i = 0; i < slides.length; i++) {
//     //         slides[i].style.display = 'none';
//     //     }
//     //     for (let i = 0; i < dots.length; i++) {
//     //         dots[i].classList.remove('active');
//     //     }
//     //     slides[slideIndex - 1].style.display = 'block';
//     //     dots[slideIndex - 1].classList.add('active');
//     //     captionText.innerHTML = dots[slideIndex - 1].alt;
//     // }

//     function showSlides(n) {
//         const slides = document.getElementsByClassName('mySlides');
//         const dots = document.getElementsByClassName('demo');
//         const captionText = document.getElementById('caption');

//         if (n > slides.length) {
//             setSlideIndex(1);
//             n = 1;
//         }

//         if (n < 1) {
//             setSlideIndex(slides.length);
//             n = slides.length;
//         }

//         // Use state to manage the visibility of slides and dots
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = i === (n - 1) ? 'block' : 'none';
//             dots[i].classList.remove('active');
//         }

//         dots[n - 1].classList.add('active');
//         captionText.innerHTML = dots[n - 1].alt;
//     }

//     return (
//         <div className="container2">
//             {products && products.map((image, index) => (
//                 <div key={index} className={`mySlides ${slideIndex === index + 1 ? 'active' : ''}`}>
//                     <div className="numbertext">{index + 1} / {products.length}</div>
//                     <img src={image.image} style={{ width: '100%' }} alt={image.name} />
//                 </div>
//             ))}

//             <a className="prev" onClick={() => plusSlides(-1)}>
//                 &#10094;
//             </a>
//             <a className="next" onClick={() => plusSlides(1)}>
//                 &#10095;
//             </a>

//             <div className="caption-container">
//                 <p id="caption"></p>
//             </div>

//             <div className="row">
//                 {products && products.map((image, index) => (
//                     <div key={index} className="column">
//                         <img
//                             className={`demo cursor ${slideIndex === index + 1 ? 'active' : ''}`}
//                             src={image.image.replace('_wide', '')}
//                             style={{ width: '100%' }}
//                             onClick={() => currentSlide(index + 1)}
//                             alt={image.name}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>

//     );
// }

// export default ImageGallery;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function ImageGallery({ package_id }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //     // Show the slides when slideIndex changes
  //     showSlides(slideIndex);
  // }, [slideIndex]);

  useEffect(() => {
    // Fetch data when package_id changes
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/products/${package_id}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (package_id) {
      fetchProductDetails();
    }
  }, [package_id]);

  useEffect(() => {
    showSlides(slideIndex);
  }, [products, slideIndex]);

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");

    // Ensure that the DOM elements are available
    if (slides.length > 0 && dots.length > 0) {
      if (n > slides.length) {
        setSlideIndex(1);
        n = 1;
      }

      if (n < 1) {
        setSlideIndex(slides.length);
        n = slides.length;
      }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }

      slides[n - 1].style.display = "block";
      dots[n - 1].classList.add("active");
      captionText.innerHTML = dots[n - 1].alt;
    }
  };

  function plusSlides(n) {
    setSlideIndex(slideIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  return (
    <div className="container2">
      {products &&
        products.map((image, index) => (
          <div
            key={index}
            className={`mySlides ${slideIndex === index + 1 ? "active" : ""}`}
          >
            <div className="numbertext">
              {index + 1} / {products.length}
            </div>

            <img
              src={"http://127.0.0.1:8000/photo/" + image.image}
              style={{ width: "100%" }}
              alt={image.name}
            />
          </div>
        ))}

      <a className="prev1" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next1" onClick={() => plusSlides(1)} style={{right:'10px'}}>
        &#10095;
      </a>

      <div className="caption-container">
        <p id="caption"></p>
      </div>

      <div className="row">
        {products &&
          products.map((image, index) => (
            <div key={index} className="column">
              <img
                className={`demo cursor ${
                  slideIndex === index + 1 ? "active" : ""
                }`}
                src={"http://127.0.0.1:8000/photo/" + image.image}
                // src={image.image.replace('_wide', '')}
                style={{ width: "100%" }}
                onClick={() => currentSlide(index + 1)}
                alt={image.name}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ImageGallery;
