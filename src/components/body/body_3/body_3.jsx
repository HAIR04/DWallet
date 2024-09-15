
import '../body_3/body_3.css';
import img_body3_1 from '../../../assets/images/multi-chain.webp';
import img_body3_2 from '../../../assets/images/multi-accounts.webp';
import logo_body3_1 from '../../../assets/images/tdesign_blockchain.svg';
import logo_body3_2 from '../../../assets/images/tdesign_user-avatar.svg';
import '../../../assets/aos-master/dist/aos.css';
import AOS from '../../../assets/aos-master/dist/aos.js';
import React, { useState, useEffect } from 'react';



const Body_3 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Khởi tạo AOS
      }, []);
    // State để theo dõi phần tử nào đang được chọn
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <>
            <div className='mt-16 mb-10'>
                <p className='text-center text-6xl font-semibold' data-aos="flip-down">Grow Your Wealth with</p>
                <p className='text-center text-6xl font-semibold text-custom-color-body-3 leading-normal' data-aos="flip-down">
                    Strategic Portfolio Management
                </p>
            </div>

            <div className='custom-w bg-custom-color-body-2 border-radius mx-auto flex  p-14' data-aos="fade-up"> 
                <div className='flex flex-col justify-between'>
                    <div
                        className={`firs ${activeTab === 'tab1' ? 'opacity-100' : 'opacity-50'} cursor-pointer`}
                        onClick={() => setActiveTab('tab1')}
                    >
                        <div className='w-40 bg-custom-bd rounded-full flex justify-evenly items-center py-4 box-content'>
                            <img src={logo_body3_1} className='w-1/6' alt='Logo 1' />
                            <p className='font-semibold'>Multi-Chain</p>
                        </div>
                        <p className='text-3xl font-semibold tracking-tighter my-5'> 
                            Seamless Multi-chain Experience
                        </p>
                        <p className='text-xl'>
                            Track and manage your crypto assets across multiple blockchain.
                        </p>
                    </div>
                    <hr className='border-custom-bd' />
                    <div
                        className={`second ${activeTab === 'tab2' ? 'opacity-100' : 'opacity-50'} cursor-pointer`}
                        onClick={() => setActiveTab('tab2')}
                    >
                        <div className='w-40 bg-custom-bd rounded-full flex justify-evenly items-center p-4 box-content'>
                            <img src={logo_body3_2} className='w-1/6' alt='Logo 2' />
                            <p className='font-semibold'>Multi-Accounts</p>
                        </div>
                        <p className='text-3xl font-semibold tracking-tighter my-5'>
                            Manage Multi-Accounts Easily
                        </p>
                        <p className='text-xl'>
                            Conveniently manage multiple accounts from a single interface
                        </p>
                    </div>
                </div>

                <img
                    src={img_body3_1} 
                    className={`w-3/6 pl-5 ${activeTab === 'tab1' ? 'block' : 'hidden'}`}
                    alt='Image 1'
                />
                <img
                    src={img_body3_2} 
                    className={`w-3/6 pl-5 ${activeTab === 'tab2' ? 'block' : 'hidden'}`}
                    alt='Image 2'
                />
            </div>
        </>
    );
};

export default Body_3;
