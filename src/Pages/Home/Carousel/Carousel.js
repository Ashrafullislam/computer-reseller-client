import React from 'react';
import banner1 from '../../../Image/banner1.jpg'
import banner2 from '../../../Image/banner2.png'
import banner3 from '../../../Image/banner3.png'
import banner4 from '../../../Image/banner4.jpeg'
import banner5 from '../../../Image/banner5.jpg'

const Carousel = () => {
    return (
<div>
     <div className="carousel h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[90vh] w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner3} alt = '' className="w-full" />
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 mb-5 mr-5 ">
      <a href="#slide4" className="btn btn-circle mr-2 hover:bg-primary">❮</a> 
      <a href="#slide2" className="btn btn-circle mr-2 hover:bg-primary">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} alt = '' className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mb-5 mr-5">
      <a href="#slide1" className="btn btn-circle mr-2 hover:bg-primary">❮</a> 
      <a href="#slide3" className="btn btn-circle mr-2 hover:bg-primary">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner1}  alt = '' className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mb-5 mr-5">
      <a href="#slide2" className="btn btn-circle mr-2 hover:bg-primary ">❮</a> 
      <a href="#slide4" className="btn btn-circle mr-2 hover:bg-primary ">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={banner4} alt = '' className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mb-5 mr-5">
      <a href="#slide3" className="btn btn-circle mr-2 hover:bg-primary">❮</a> 
      <a href="#slide1" className="btn btn-circle mr-2 hover:bg-primary">❯</a>
    </div>
  </div>
     </div>
            
 </div>
    );
};

export default Carousel;