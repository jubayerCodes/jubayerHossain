
import React from 'react';
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-black py-10 xl:py-20 px-5'>
            <div className="my-container grid grid-cols-1 xl:grid-cols-4 justify-between items-start gap-6 xl:gap-10">
                <div>
                    <h3 className='text-white uppercase font-semibold text-xl mb-3 xl:mb-5'>
                        Jubayer
                    </h3>
                    <p className='text-white text-[14px]'>
                        Motivated MERN Stack developer with a passion for creating seamless web applications.
                    </p>
                </div>
                <div>
                    <h3 className='text-white capitalize font-semibold text-base mb-3 xl:mb-5'>
                        Address
                    </h3>
                    <p className='text-white text-base'>
                        Pabna, Rajshahi Division, <br /> Bangladesh
                    </p>
                </div>
                <div>
                    <h3 className='text-white capitalize font-semibold text-base mb-3 xl:mb-5'>
                        Contact
                    </h3>
                    <p className='text-white text-base'>
                        jubayerhossain111220@gmail.com
                    </p>
                    <p className='text-white text-base mt-1'>
                        +880 1762278148
                    </p>
                </div>
                <div>
                    <h3 className='text-white capitalize font-semibold text-base mb-3 xl:mb-5'>
                        Social Links
                    </h3>
                    <div className='flex justify-start items-center gap-3'>
                        <Link target='_blank' href={'https://www.linkedin.com/in/jubayer-hossain-6b866723b/'}>
                            <button className='text-white border rounded-full p-2 hover:bg-white hover:text-black duration-200'>
                                <FaLinkedinIn />
                            </button>
                        </Link>
                        <Link target='_blank' href={'https://github.com/mdsaif1112'}>
                            <button className='text-white border rounded-full p-2 hover:bg-white hover:text-black duration-200'>
                                <FaGithub />
                            </button>
                        </Link>
                        <Link target='_blank' href={'https://www.facebook.com/jhs.saif/'}>
                            <button className='text-white border rounded-full p-2 hover:bg-white hover:text-black duration-200'>
                                <FaFacebookF />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;