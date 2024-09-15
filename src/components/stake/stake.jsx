import React , { useEffect } from "react";
import '../stake/stake.css'
import img_stake_1 from '../../assets/images/owallet-banner.svg';
import img_stake_2 from '../../assets/images/hero-banner.svg';
import logo_1_stake from '../../assets/images/Oraichain.webp';
import logo_2_stake from '../../assets/images/Osmosis.webp';
import logo_3_stake from '../../assets/images/ic_affiliate_sub.svg';
import logo_4_stake from '../../assets/images/ic_high.svg';
import logo_5_stake from '../../assets/images/ic_security_check.svg';
import logo_6_stake from '../../assets/images/raking-star.svg';
import '../../assets/aos-master/dist/aos.css';
import AOS from '../../assets/aos-master/dist/aos.js';

const Stake = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);
  return (
    <>
      <div className="w-full bg-custom-bgr pt-52 relative"> 
        <img
          src={img_stake_1}
          className="absolute top-52 left-0 z-0 "  
          alt="Stake Banner 1"
        />
        <img
          src={img_stake_2}
          className="absolute top-36 right-0 z-0 "  
          alt="Stake Banner 2"
        />
        <div className="pb-40 relative z-10"> 
          <p className="text-6xl text-center font-semibold z-30 w-3/5 mx-auto leading-tight" data-aos="flip-up">
            Your Trusted Blockchain Validator.
          </p>
          <p className="text-center font-medium text-xl my-5 w-3/5 mx-auto leading-loose opacity-70" data-aos="flip-down">Stake with our validators and boost Oraichain open-source</p>
                <div className="flex w-bgr justify-center gap-5 mx-auto my-10" data-aos="fade-up">
                <div className="w-img px-6 py-4  box-content  bg-custom border border-custom-bd  rounded-full flex justify-between items-center cursor-pointer">
                    <img src={logo_1_stake} className="w-[11%] h-[80%]"></img>
                    <div>
                    <p className="text-base font-semibold">Stake ORAI (Oraichain)</p>
                    <p className="text-xs opacity-90">Earn max 10% APR</p>
                    </div>
                    <p className="opacity-40 ml-10">&#8250;</p>
                </div>
                <div className="w-img px-6 py-4  box-content bg-custom border border-custom-bd rounded-full flex justify-between items-center cursor-pointer">
                    
                    <img src={logo_2_stake} className="w-[11%] h-[80%]"></img>
                    <div>
                    <p className="text-base font-semibold">Stake OSMO (Oraichain)</p>
                    <p className="text-xs opacity-90">Earn max 25% APR</p>
                    </div>
                    <p className="opacity-40 ml-10">&#8250;</p>
                </div>
                </div>
          
        </div>
      </div>
      <p className="text-center font-bold text-4xl mb-10" data-aos="flip-up">Privacy And Benefits</p>

      <div className="flex flex-wrap w-4/6 mx-auto justify-center gap-10">
          <div className="w-[47%] border rounded-4xl border-custom-bd border-opacity-30 p-5 hover:bg-custom-color-body-2" data-aos="fade-up">
            <img src={logo_3_stake}></img>
            <p className="text-2xl font-semibold pt-20 pb-5">Elite Tools for Devs & Nodes</p>
            <p className="font-medium opacity-70 pb-5">Awesome community tools for developers and node operators</p>
          </div>
          <div className="w-[47%] border rounded-4xl border-custom-bd border-opacity-30 p-5 hover:bg-custom-color-body-2" data-aos="fade-up">
            <img src={logo_4_stake}></img>
            <p className="text-2xl font-semibold pt-20 pb-5">Low Fees, No Slashing!</p>
            <p className="font-medium opacity-70 pb-5">High commission rate and zero slashing since inception</p>
          </div>
          <div className="w-[47%] border rounded-4xl border-custom-bd border-opacity-30 p-5 hover:bg-custom-color-body-2" data-aos="fade-up">
            <img src={logo_5_stake}></img>
            <p className="text-2xl font-semibold pt-20 pb-5">Enterprise Security, Zero Downtime</p>
            <p className="font-medium opacity-70 pb-5">Enterprise-grade security with zero downtime upgrade</p>
          </div>
          <div className="w-[47%] border rounded-4xl border-custom-bd border-opacity-30 p-5 hover:bg-custom-color-body-2" data-aos="fade-up">
            <img src={logo_6_stake}></img>
            <p className="text-2xl font-semibold pt-20 pb-5">Compliant & Active Governance</p>
            <p className="font-medium opacity-70 pb-5">Fully compliant with chain protocol and actively participating in chain governance</p>
          </div>
      </div>
    </>
  );
};

export default Stake;
