import React from 'react'
import visitImg from '../../assets/visitImg.jpg'

const Visit = () => {
    return (
        <>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center p-4 sm:p-6 lg-p-10">
                <div className="w-full px-4 h-full py-12 bg-[#e3f2e7] sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="container-size text-start">
                        <h1 className="text-[57px] font-semibold ">Book Your Visit</h1>

                        <p className="mt-4 text-[20px] text-gray-500">
                            In ornare quam viverra orci sagittis
                        </p>
                    </div>

                    <form action="#" className="container-size space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Name</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Name*"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Phone</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Phone*"
                                />
                                
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Select Your Dentist</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Select Your Dentist**"
                                />
                                
                            </div>
                        </div>                    


                        <div className="flex items-center justify-between">

                            <button className='btn-dark-blue mt-10 md:mt-0 px-14'>BOOK NOW</button>

                        </div>
                    </form>
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img src={visitImg} alt="img"
                        className="absolute  h-full w-full object-cover"
                    />
                </div>
            </section>

        </>
    )
}

export default Visit
