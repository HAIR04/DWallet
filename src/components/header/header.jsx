import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../header/headerPC.css';
import logo from '../../assets/images/android-chrome-192x192.png';
import logo_1 from '../../assets/images/dollar.svg';
import logo_2 from '../../assets/images/twitter.svg';
import logo_3 from '../../assets/images/discord.svg';
import logo_4 from '../../assets/images/telegram.svg';
import logo_5 from '../../assets/images/docs-icon.svg';
import logo_dl from '../../assets/images/logo_owallet_gateway_dark.svg'
import qr_dl from '../../assets/images/tải xuống.png'
import close from '../../assets/images/xmark-solid.svg'
import chorme from '../../assets/images/chrome_store.webp'
import chplay from '../../assets/images/google_play.webp'
import appstore from '../../assets/images/app_store.webp'

const Header = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <>
      <div className="bg-custom-bgr-hd border-b border-custom-bd z-20 fixed w-full">
        <div className="flex w-4/5 m-auto">
          <Link to="/" className="flex py-4 ml-12 w-2/6">
            <img src={logo} className="w-10 pb-4 cursor-pointer" alt="Logo" />
            <div className="text-2xl font-bold flex items-center ml-3 cursor-pointer">DWallet</div>
          </Link>

          <ul className="flex w-4/5 ml-3">
          <li className="flex my-auto">
              <Link to="/stake" className="flex">
                <span className="text-sm">Stake with OWallet</span>
                <img src={logo_1} className="w-5 ml-1" alt="Stake" />
              </Link>
            </li>

            <li href="da" className="flex my-auto ml-6 cursor-pointer">
              <span className="text-sm">Twitter</span>
              <img src={logo_2} className="w-5 ml-1" alt="Twitter" />
            </li>

            <li href="da" className="flex my-auto ml-6 cursor-pointer">
              <span className="text-sm">Discord</span>
              <img src={logo_3} className="w-5 ml-1" alt="Discord" />
            </li>

            <li href="da" className="flex my-auto ml-6 cursor-pointer">
              <span className="text-sm">Telegram</span>
              <img src={logo_4} className="w-5 ml-1" alt="Telegram" />
            </li>

            <li href="da" className="flex my-auto ml-6 cursor-pointer">
              <span className="text-sm">Docs</span>
              <img src={logo_5} className="w-5 ml-1" alt="Docs" />
            </li>

            <div
              onClick={toggleOverlay}
              className="flex bg-custom-dl items-center my-5 px-6 ml-11 text-base font-bold rounded-3xl cursor-pointer"
            >
              Download OWallet
            </div>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOverlayVisible && (
        <div className="fixed inset-0 bg-bgr-download bg-opacity-70 flex items-center justify-center z-30">
         
          <div className= "w-3/5  bg-custom-bgr rounded-xl max-w-md mx-auto box-content p-4">
            <div className=' flex  justify-between'>
            <h2 className="text-xl font-bold">Download OWallet</h2>
            <button>
            <img src={close} onClick={toggleOverlay} className="w-5 filter invert" alt="Close Icon" />

            </button>
            </div>
            
            <img src={logo_dl} className='w-2/5 mx-auto my-5`'></img>
            <img src={qr_dl} className='w-3/6 mx-auto mb-5'></img>
            <p className="mb-4 text-center">Scan QR for mobile download link</p>

                <div className='flex flex-wrap justify-center gap-5 '>
                <img src={appstore} className='w-2/5'></img>
                 <img src={chplay} className='w-2/5'></img>
                <img src={chorme} className='w-2/5'></img>
                </div>
           
            

          </div>

        </div>
      )}
    </>
  );
};

export default Header;
