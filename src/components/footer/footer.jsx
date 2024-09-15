import "../footer/footerPC.css";
import img_header from "../../assets/images/footer.webp";
import img_rec from "../../assets/images/rec_ft.svg";
import appstore_footer from "../../assets/images/app_store_ft.webp";
import chplay_footer from "../../assets/images/google_play_ft.webp";
import chorme from "../../assets/images/chrome_ft.webp";
import '../../assets/aos-master/dist/aos.css';
import AOS from '../../assets/aos-master/dist/aos.js';
import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (

    <>
      <div className="pt-40 relative bg-custom-bgr">
        <img src={img_rec} alt="Footer Decoration" />
        <div className="relative">
          <img
            src={img_header}
            className="bg-custom-color-footer object-cover z-0"
            alt="Footer Header"
          />
          <div className="absolute top-14 flex custom-w mx-48">
            <div className="w-3/6" data-aos="fade-right" >
              <p className="text-5.5xl font-semibold leading-tight">
                OWallet:
              </p>
              <p className="text-5.5xl font-semibold leading-tight mb-12">
                Your Gateway To Web3
              </p>
              <div className="flex flex-wrap gap-4">
                <img src={appstore_footer} className="with-img cursor-pointer" alt="App Store" />
                <img src={chplay_footer} className="with-img cursor-pointer" alt="Google Play" />
                <img src={chorme} className="with-img cursor-pointer" alt="Chrome" />
              </div>
            </div>
            <div className="w-3/6" data-aos="fade-left">
              <form className="bg-color-form rounded-2xl p-5 m-auto">
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-5 text-3xl font-semibold text-black">Contact us</label>
                  <input type="email" id="email" className="border border-color-border-form rounded-2xl py-3 px-4 w-full text-black" placeholder="Enter your Email" required />
                </div>
                <div className="mb-5">
                  <input type="text" id="help" className="border border-color-border-form rounded-2xl pt-4 pb-40 px-4 w-full text-black" placeholder="What can we help you?" required />
                </div>
                <button type="submit" className="py-4 px-20 bg-color-submit rounded-3xl text-xs  text-white">Submit</button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-custom-color-footer-end py-4 absolute bottom-0 left-0 w-full z-20">
          <div className="w-5/6 m-auto flex justify-between">
            <p className="text-custom-color-text-footer">
              © 2020 - 2024 Oraichain Labs. All rights reserved.
            </p>
            <div className="flex gap-6 font-medium">
              <a href="" className="text-custom-color-link">
                Term of Service
              </a>
              <a href="" className="text-custom-color-link">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
