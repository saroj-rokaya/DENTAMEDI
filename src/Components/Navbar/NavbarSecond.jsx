import React from 'react'
import { IoBagOutline } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";


const NavbarSecond = () => {
    return (
        <>
            <div className='hidden xl:flex justify-between items-center px-10 h-14 border-t border-b border-blue-200'>

                <div className='flex justify-center items-center gap-10'>
                    <div className='h-14 border-4 border-transparent flex justify-center items-center hover:border-b-4 hover:border-b-blue-300 cursor-pointer'>Home</div>
                    <div className='h-14 border-4 border-transparent flex justify-center items-center hover:border-b-4 hover:border-b-blue-300 cursor-pointer'>Pages</div>
                    <div className='h-14 border-4 border-transparent flex justify-center items-center hover:border-b-4 hover:border-b-blue-300 cursor-pointer'>Blog</div>
                    <div className='h-14 border-4 border-transparent flex justify-center items-center hover:border-b-4 hover:border-b-blue-300 cursor-pointer'>Shop</div>
                    <div className='h-14 border-4 border-transparent flex justify-center items-center hover:border-b-4 hover:border-b-blue-300 cursor-pointer'>Landing</div>
                </div>
                <div className='flex justify-center items-center gap-10'>
                    <div className='flex justify-center items-center gap-2 cursor-pointer'><BsGlobe className='text-xl '/><span>English</span></div>
                    <div className='relative cursor-pointer'><IoBagOutline className=' text-xl' /> 
                    <span className='h-5 w-5 rounded-full bg-blue-20-0 absolute top-[-6px] right-[-10px] text-white flexCenter text-[15px]'>0</span>
                     </div>
                    <div className='underline cursor-pointer'>Book free appointment</div>
                </div>


            </div>
        </>
    )
}

export default NavbarSecond
