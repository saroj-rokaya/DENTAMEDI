import React from 'react'
import logo from '../../assets/logo-light.png'

const Footer = () => {
    return (
        <>


            <div className='container-size sm:flex flex md:flex-row flex-col min-h-28 text-white  bg-blue-40-0 justify-between items-center px-6 sm:px-6 lg:px-10'>
                <p className='font-gabarito font-20 text-center'>Ready to get the smile you always deserved?</p>
                <button className='btn-blue mt-10 md:mt-0'>BOOK APPOINTMENT</button>
            </div>
            <footer className=" text-white bg-blue-30-0 font-20">
                <div className="container-size px-4 pt-16 sm:px-6 lg:space-y-16 lg:px-10">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div>
                            <img src={logo} alt="logo" className='h-12' />
                        </div>

                        <div className="grid grid-cols-2 gap-8  sm:grid-cols-3 sm:col-span-2 ">
                            <div>
                                <p className="font-24  text-white">Working Time</p>

                                <ul className=" flex flex-col gap-5 py-5 [&_li]:font-20">
                                    <li>
                                        <a href="#"> Monday-Friday: 8AM - 8PM </a>
                                    </li>

                                    <li>
                                        <a href="#" > Saturday: 9AM - 6PM </a>
                                    </li>
                                    <li>
                                        <a href="#" > Sunday: Closed </a>
                                    </li>

                                </ul>
                            </div>

                            <div>
                                <p className="font-24 text-white ">Our Services</p>

                                <ul className=" flex flex-col gap-5 py-5 [&_li]:font-20">
                                    <li>
                                        <a href="#" className="hover:text-[#5eb2f2] transition"> Whitening </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-[#5eb2f2] transition"> Implantology </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-[#5eb2f2] transition"> Orthodontia </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-[#5eb2f2] transition"> Whitening </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-[#5eb2f2] transition"> Implantology </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-[#5eb2f2] transition"> Orthodontia </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className=" text-white font-24">Our Clinics</p>

                                <ul className=" flex flex-col gap-5 py-5 [&_li]:font-20">
                                    <li>
                                        <a href="#" className="hover:text-[#5eb2f2] transition"> 22-8 Fairview Ave, Lebanon, NH 03766, USA </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-[#5eb2f2] transition"> 22-8 Fairview Ave, Lebanon, NH 03766, USA </a>
                                    </li>

                                </ul>
                            </div>


                        </div>
                    </div>

                    <p className="font-16 text-white">&copy; 2024 Qode Interactive, All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
