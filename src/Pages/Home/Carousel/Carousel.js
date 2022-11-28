import React from 'react';
import banner1 from '../../../Image/banner1.jpg'
import banner2 from '../../../Image/banner2.png'
import banner4 from '../../../Image/banner4.jpeg'
import './Carousel.css' ;

 const Carousel = () => {
 return (
   <div>
     <div className="carousel h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] w-full">


  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner4} alt = '' className="w-full" />
    <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 right-5 top-1/3">
        <div>
        <h3 data-aos="fade-down" className=' lg:text-4xl md:text-3xl text-2xl lg:ml-10 font-bold h-4 text-zinc-200' >  Available Wonderfull Desktop <br />
             You can buy or sale Desktop. <br />
             
           </h3>
        </div>
     </div>
     <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
        <h3 data-aos="fade-right" className='lg:text-2xl md:text-xl text-xl mt-5 lg:ml-10 font-bold h-4 text-zinc-200' > Find your favourite computer in our <br /> computer-resell  <br />

           </h3>
        </div>
     </div>
  
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 mb-5 mr-5 ">
      <a href="#slide4" className="btn btn-circle mr-2 hover:bg-primary">❮</a> 
      <a href="#slide2" className="btn btn-circle mr-2 hover:bg-primary">❯</a>
    </div>
  </div> 




  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} alt = '' className="w-full" />
    <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 right-5 top-1/3">
        <div>
        <h3 className='lg:text-4xl md:text-3xl text-2xl lg:ml-10 font-bold h-4 text-zinc-200' >  Available Wonderfull tablet <br />
             You can buy or sale tablet. <br />
           </h3>
        </div>
     </div>
     <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
        <h3 className='lg:text-2xl md:text-xl text-xl mt-5 lg:ml-10 font-bold h-4 text-zinc-200' > Find your favourite tablet in our <br/> computer-resell-shop  
      You can sell  your <br /> old  tablet in computer-resell  <br />
           </h3>
        </div>
     </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mb-5 mr-5">
      <a href="#slide1" className="btn btn-circle mr-2 hover:bg-primary">❮</a> 
      <a href="#slide3" className="btn btn-circle mr-2 hover:bg-primary">❯</a>
    </div>
  </div> 




  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner1}  alt = '' className="w-full" />
    <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 right-5 top-1/3">
        <div>
        <h3 className='lg:text-4xl md:text-3xl text-2xl lg:ml-10 font-bold h-4 text-zinc-200' >  Available Wonderfull Laptop  <br />
             You can buy or sale Laptop . <br />
           </h3>
        </div>
     </div>
     <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
        <h3 className='lg:text-2xl md:text-xl text-xl mt-5 lg:ml-10 font-bold h-4 text-zinc-200' >You will Find your favourite computer in  <br />
        our computer-resell-shop <br />
         or sale Desktop. <br />
           </h3>
        </div>
     </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mb-5 mr-5">
      <a href="#slide2" className="btn btn-circle mr-2 hover:bg-primary ">❮</a> 
      <a href="#slide4" className="btn btn-circle mr-2 hover:bg-primary ">❯</a>
    </div>
  </div> 




  <div id="slide4" className="carousel-item relative w-full">
    <img src={banner4} alt = '' className="w-full" />
    <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 right-5 top-1/3">
        <div>
        <h3 className='lg:text-4xl md:text-3xl text-2xl lg:ml-10 font-bold h-4 text-zinc-200' >  Available Wonderfull Desktop <br />
             You can buy or sale Desktop. <br />
           </h3>
        </div>
     </div>
     <div className="absolute flex justify-start  transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
        <h3 className='lg:text-2xl md:text-xl text-xl mt-5 lg:ml-10 font-bold h-4 text-zinc-200' > Find your favourite computer on  <br />
        computer reseller You can buy <br />
         or sale Desktop. <br />
           </h3>
        </div>
     </div>
  
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