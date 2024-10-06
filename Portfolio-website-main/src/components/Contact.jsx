import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div name='contact' className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact Me</p>
                    <p className='mt-6'>You can contact me directly via phone or email by clicking the links below.</p>
                </div>

                <div className='flex justify-center items-center flex-col'>
                    {/* First Phone Number */}
                    <a 
                        href="tel:+918805888986" 
                        className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Call Me at +91 8805888986
                    </a>

                    {/* Second Phone Number */}
                    <a 
                        href="tel:+919225519755" 
                        className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Call Me at +91 9225519755
                    </a>

                    {/* Gmail Address */}
                    <a 
                        href="mailto:siddharajmali3@gmail.com?subject=Contact%20from%20Website&body=Hi%20Siddharaj,%20I%20wanted%20to%20get%20in%20touch%20with%20you!" 
                        className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Email Me at siddharajmali3@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
