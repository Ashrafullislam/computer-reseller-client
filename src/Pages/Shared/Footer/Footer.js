import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import footer from '../../../Image/Footer.svg';

const Footer = () => {
    const footerBg = {
        background:`url(${footer})`,
        backgroundSize:'cover',
        width:'100vw',
        hight:'80vh',
        backgroundColor:'navy',
        borderTop: '4px solid gold' 
    
    }
    return (
 <section className='mt-20 mx-auto  ' style={footerBg}>
 <footer className="footer  p-10  text-white">
  <div className='flex flex-col items-center w-full'>
    <span className="footer-title">Services</span> 
    <Link to = " /" className="link link-hover">Branding</Link>
    <Link to = " /" className="link link-hover">Design</Link>
    <Link to = " /" className="link link-hover">Marketing</Link>
    <Link to = " /" className="link link-hover">Advertisement</Link>
  </div> 

  <div className='flex flex-col items-center w-full'>
    <span className="footer-title">Company</span> 
    <Link to = " /" className="link link-hover">About us</Link>
    <Link to = " /" className="link link-hover">Contact</Link>
    <Link to = " /" className="link link-hover">Jobs</Link>
    <Link to = " /" className="link link-hover">Press kit</Link>
    <div className='flex  gap-2 mt-3'>
    <Link to = " /" className="link link-hover "> <FaFacebook className=' text-2xl' /> </Link>
    <Link to = " /" className="link link-hover ">  <FaTwitter className=' text-2xl'/>  </Link>
    <Link to = " /" className="link link-hover "> <FaInstagram className='text-2xl' />  </Link>
    <Link to = " /" className="link link-hover "> <FaLinkedin className=' text-2xl' /> </Link>
    </div>
  </div> 

  <div className='flex flex-col items-center w-full'>
    <span className="footer-title text-start">Legal</span> 
    <Link to = " /" className="link link-hover ">Terms of use</Link>
    <Link to = " /" className="link link-hover">Privacy policy</Link>
    <Link to = " /" className="link link-hover">Cookie policy</Link>
  </div>

</footer>

 <div className='text-center mt-32 pb-4'>
 <p>Copyright ?? 2022 - All right reserved Doctors Portal </p>

   </div>
</section>
    );
};

export default Footer;