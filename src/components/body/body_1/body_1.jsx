// src/components/body_1/body_1.jsx
import React, { useEffect } from 'react';
import '../body_1/body_1.css';
import bg_body_1 from '../../../assets/images/bg_header.webp';
import bg_body_2 from '../../../assets/images/Polygon_1.webp';
import bg_body_3 from '../../../assets/images/Polygon_3.webp';
import body_banner from '../../../assets/images/header_banner.webp';
import chorme from '../../../assets/images/chrome_store.webp';
import chplay from '../../../assets/images/google_play.webp';
import appstore from '../../../assets/images/app_store.webp';
import '../../../assets/aos-master/dist/aos.css';
import AOS from '../../../assets/aos-master/dist/aos.js';

const Body_1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Khởi tạo AOS
  }, []);

  return (
    <div className='pt-20 bg-custom-bgr pb-20'>
      <img src={bg_body_1} className='w-3/6 absolute right-0 top-0' alt="Background 1" />
      <img src={bg_body_2} className='w-36 absolute custom-bottom-first' alt="Background 2" />
      <img src={bg_body_3} className='w-28 absolute right-0 bottom-0 custom-bottom-second' alt="Background 3" />

      <div className='flex m-auto custom-w'>
        <div className='custom-w-1 mt-8' data-aos="fade-right">
          <p className='size_text font-semibold leading-tight tracking-tight'>
            Start Your Web3 Journey Today With OWallet
          </p>
          <p className='text-custom-text text-xl leading-tight'>
            OWallet is a secure, easy-to-use Web3 crypto wallet that puts you in control of your digital assets.
          </p>
          <div className='download flex flex-wrap pt-10 gap-3'>
            <a href='' className='w-download'>
              <img src={appstore} alt="App Store" />
            </a>
            <a href='' className='w-download'>
              <img src={chplay} alt="Google Play" />
            </a>
            <a href='' className='w-download'>
              <img src={chorme} alt="Chrome Store" />
            </a>
          </div>
        </div>

        <div className='custom-w-2 z-10' data-aos="fade-up" >
          <img src={body_banner} className='w-full' alt="Body Banner" />
        </div>
      </div>
    </div>
  );
};

export default Body_1;
