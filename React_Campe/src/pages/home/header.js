 

import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const itemStyle = {
  width: "100%",
  height: "100vh",
  objectFit: "cover",
};

export default function Header() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ZJM4YYWEKFD7NJ3JI22Y2NUAZQ.jpg"
        alt="..."
        style={itemStyle}
      >
        <h2>Outdoor, friends, camping, memories</h2>
        <h5>Camping: Nature's embrace, starlit skies, crackling fires, serenity found, a world disconnected, memories made, adventure in simplicity.</h5>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://images.prismic.io/visiticeland/79c03ed5-6fc3-424c-be29-8f0150211aad_Glamping_AsaSteinars.jpg?auto=compress,format"
        alt="..."
        style={itemStyle}
      >
        <h2>Campfire, stars, wilderness, serenity.</h2>
        <h5>Camping: Escape to wild beauty, under canvas, the great outdoors, tales by firelight, where tranquility meets adventure.</h5>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://lp-cms-production.imgix.net/2020-11/wildcamping.jpg"
        alt="..."
        style={itemStyle}
      >
        <h2>Nature, adventure, peace, relaxation.</h2>
        <h5>Camping: Rustic retreat, natural wonders, peaceful nights, outdoor harmony, soulful solitude, adventure's doorstep, fireside stories, unforgettable moments.</h5>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

// export default Header;
