import React, { useState } from 'react'
import image from '../../assets/dentalogo.png'
import tooth from '../../assets/tooth.png'
import { FaClock, FaPhone, FaLocationDot, FaAngleRight } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import NavbarSecond from './NavbarSecond';


const Navbar = () => {

    const [isopen, setIsopen] = useState(false)
    return (
        <>
            <div className='hidden px-10 xl:flex justify-between items-center py-5 h-24 text-[15px]'>
                <div>
                    <img src={image} alt="Logo" className='h-12' />
                </div>
                <div className='flex justify-between items-center divide-x divide-gray-500 '>
                    <div className='pr-10 flex gap-2 items-start '>
                        <FaClock className='m-1 text-xl text-[#5eb2f2]' />
                        <div>
                            <span>Monday-Friday 08:00 - 20:00</span>
                            <p className='text-[#5eb2f2]'>Saturday and Sunday - CLOSED</p>
                        </div>
                    </div>
                    <div className='px-10 flex gap-2 items-start '>
                        <FaPhone className='m-1 text-xl text-[#5eb2f2]' />
                        <div>
                            <span>+ 0800 2466 7921</span>
                            <p className='text-[#5eb2f2] cursor-pointer'>dentamedi@example.com</p>
                        </div>
                    </div>
                    <div className='pl-10 flex gap-2 items-start '>
                        <FaLocationDot className='m-1 text-xl text-[#5eb2f2]' />
                        <div>
                            <span>24th Avenue</span>
                            <p className='text-[#5eb2f2] cursor pointer'>New York, W2 3XE</p>
                        </div>
                    </div>


                </div>
            </div>
            <NavbarSecond />
            {/* responsive design */}

            <div className='xl:hidden h-20'>
                <div className='h-[70px] flex justify-between items-center p-10 '>
                    <img src={tooth} alt="logo" className='h-10' />
                    {isopen
                        ? <MdClose className='text-[40px]' onClick={() => setIsopen(!isopen)} />
                        : <FiMenu className='text-[40px]' onClick={() => setIsopen(!isopen)} />
                    }

                </div>
                <div className={`fixed flex flex-col justify-start bg-gray-100 w-full duration-1000 h-60
                    ${isopen ? "h-60" : "h-0 top-[-100]"}`}>
                    <div className='flex w-full justify-between items-center px-[7%] lg:px-20 h-10 cursor-default hover:underline decoration-[#5eb2f2]'>
                        <p>Home</p>
                        <FaAngleRight />
                    </div>
                    <div className='flex w-full justify-between items-center lg:px-20 px-[7%] h-10 cursor-default hover:underline decoration-[#5eb2f2]'>
                        <p>Pages</p>
                        <FaAngleRight />
                    </div>
                    <div className='flex w-full justify-between items-center lg:px-20 px-[7%] h-10 cursor-default hover:underline decoration-[#5eb2f2]'>
                        <p>Blog</p>
                        <FaAngleRight />
                    </div>
                    <div className='flex w-full justify-between items-center lg:px-20 px-[7%] h-10 cursor-default hover:underline decoration-[#5eb2f2]'>
                        <p>Shop</p>
                        <FaAngleRight />
                    </div>
                    <div className='flex w-full justify-between items-center lg:px-20 px-[7%] h-10 cursor-default hover:underline decoration-[#5eb2f2]'>
                        <p>Landing</p>
                        <FaAngleRight />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar