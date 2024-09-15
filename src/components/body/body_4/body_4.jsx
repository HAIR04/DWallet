import '../body_4/body_4.css'
import img_bd_1_4 from '../../../assets/images/defi-len-ic.svg'
import img_bd_2_4 from '../../../assets/images/img_leverage.webp'
import img_bd_3_4 from '../../../assets/images/defi-lens.webp'
import logo_bd_1_4 from '../../../assets/images/tdesign_chart-line-data.svg'
import logo_bd_2_4 from '../../../assets/images/tdesign_user-arrow-up.svg'
import logo_bd_3_4 from '../../../assets/images/TablerAlpha.svg'
import '../../../assets/aos-master/dist/aos.css';
import AOS from '../../../assets/aos-master/dist/aos.js';
import React, { useEffect } from 'react';

const Body_4 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);
    return(
        <>
        <div className='custom-w mt-52 mx-auto flex'>
            <div className='w-2/4' data-aos="fade-right"> 
            <div className=' flex justify-between mb-5'>
             <div className='flex items-center'>
             <img src={img_bd_1_4} className='ml-10 w-1/5'></img>
             <p className='text-6xl font-semibold ml-5'>DeFi Lens</p>
             </div>
            <img src={img_bd_2_4} className='w-24'></img>

           
            </div>
            <img src={img_bd_3_4} ></img>
            </div>
             
            <div className='w-2/4' data-aos="fade-up">
            <p className='text-6xl font-semibold text-right leading-tight'>Simplify</p>
            <p className='text-6xl font-semibold text-right leading-tight'>DeFi Activities</p>
            <p className='text-6xl font-semibold text-right leading-tight text-custom-color-body-3'>With AI</p>

            <div className='w-full flex justify-end'>
               <div className='w-4/6 flex flex-wrap justify-end gap-5'>
               <div className=' bg-custom-color-body-2 rounded-4xl flex p-4  border border-custom-bd'>
                    <img src={logo_bd_1_4}></img>
                    <p className='ml-2'>AI Position</p>
                </div>

                <div className='bg-custom-color-body-2 rounded-4xl flex p-4 border border-custom-bd'>
                    <img src={logo_bd_2_4}></img>
                    <p className='ml-2'>Mock Trading</p>
                </div>

                <div className='bg-custom-color-body-2 rounded-4xl flex p-4 border border-custom-bd'>
                    <img src={logo_bd_3_4}></img>
                     <p className='ml-2'>DeFi Search by Lens</p>
                </div>

                <div className='bg-custom-color-body-2 rounded-4xl flex p-4 border border-custom-bd'>
                    
                     <p>...</p>
                </div>
               </div>
            </div>

            </div>
        </div>
        
        </>
    )
}

export default Body_4
