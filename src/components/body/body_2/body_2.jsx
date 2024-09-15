import '../body_2/body_2.css'
import img_bd_2_1 from '../../../assets/images/box-universal-wallet1.webp'
import img_bd_2_2 from '../../../assets/images/box-universal-wallet2.webp'
import '../../../assets/aos-master/dist/aos.css';
import AOS from '../../../assets/aos-master/dist/aos.js';
import React, { useEffect } from 'react';

const Body_2 = () =>{

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Khởi tạo AOS
      }, []);
    
    return(
        <>
        
     
        <p className='text-6xl font-semibold text-center pb-14' data-aos="flip-down">Universal Wallet</p>
        <div className='flex justify-between custom-w mx-auto pb-40'>
           <div className='custom-w-body-2 h-custom-body-2 bg-custom-color-body-2 rounded-3xl '>
            <p className='text-3xl text-center font-medium w-3/4 mx-auto mt-7  mb-14   ' data-aos="fade-right">Bitcoin × EVM × Oraichain × Cosmos-SDK Blockchains</p>
            <img src={img_bd_2_1}  data-aos="fade-up"></img>
           </div>

           <div className='custom-w-body-2 h-custom-body-2 bg-custom-color-body-2 rounded-3xl'>
            <p className='text-3xl text-center font-medium w-3/4 mx-auto mt-7 mb-14   ' data-aos="fade-right">Universal Swap Powered By OBridge Technologies</p>
            <img src={img_bd_2_2}  data-aos="fade-up"></img>
           </div>
        </div>
       
        </>
    )
}

export default Body_2