import '../body_5/body_5.css'
import img_1_body5 from '../../../assets/images/img_coin.png'
import img_2_body5 from '../../../assets/images/lock.png'
import img_3_body5 from '../../../assets/images/dapp.png'
import '../../../assets/aos-master/dist/aos.css';
import AOS from '../../../assets/aos-master/dist/aos.js';
import React, { useEffect } from 'react';

const Body_5 = () =>{
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);
    return(
        <>
        <p className='mt-56 mb-16 text-6xl text-center font-semibold' data-aos="flip-down">
        OWallet offers you
        </p>

        <div className='custom-w flex m-auto justify-between bg-custom-bgr' data-aos="fade-up">
            <div  className='bg-custom-color-body-2 w-w-custom rounded-4xl relative overflow-hidden h-96'>
            <div className='px-5 py-8'>
                <p className='text-3xl font-semibold'>Stake and earn rewards</p>
                <p className='text-lg  font-normal leading-snug tracking-normal '>OWallet empowers you to own and manage your digital assets securely.</p>
            <img src={img_1_body5} className='w-64 absolute bottom-0 right-0 '></img> 
            </div>
           
            </div>
            <div  className='bg-custom-color-body-2 w-w-custom rounded-4xl relative overflow-hidden h-96'>
            <div className='px-5 py-8'>
                <p className='text-3xl font-semibold'>Maximum security</p>
                <p className='text-lg  font-normal leading-snug tracking-normal'>Private keys are stored securely on your device, ensuring no one can access them without your permission.</p>
            <img src={img_2_body5} className='w-64 absolute bottom-0 right-0 '></img> 
            </div>
           
            </div>

            <div  className='bg-custom-color-body-2 w-w-custom rounded-4xl relative overflow-hidden h-96'>
            <div className='px-5 py-8'>
                <p className='text-3xl font-semibold'>Seamless Web3 access</p>
                <p className='text-lg  font-normal leading-snug tracking-normal'>Easily connect to Decentralized Applications dApps.</p>
            <img src={img_3_body5} className='w-64 absolute bottom-0 right-0 '></img> 
            </div>
           
            </div>
        </div>
        </>
    )
}
export default Body_5