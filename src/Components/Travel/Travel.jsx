import React from 'react'
import accommodation from '../../assets/accommodation.jpg'
import scheduled from '../../assets/scheduled.png'
import explore from '../../assets/explore.jpg'
import planeTickets from '../../assets/planeTickets.jpg'
import transport from '../../assets/transport.jpg'




const Travel = () => {
    return (
        <>
            <div className='container-size flexCenter flex-col gap-5 py-20 px-4 sm:px-6 lg:px-10'>
                <p className='text-[19px] text-blue-20-0'>Stamatology</p>
                <h1 className='sm:text-[65px] text-[45px] text-blue-30-0 font-semibold'>Your Dental Travel</h1>
                <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 place-items-center gap-10 '>

                    <div className=' flexCenter flex-col'>
                        <img src={accommodation} alt="accommodation" className="rounded-b-full rounded-tl-full " />
                        <p className='text-[22px] text-blue-30-0 font-semibold'>accommodation</p>
                    </div>

                    <div className=' flexCenter flex-col'>
                        <img src={scheduled} alt="scheduled" className="rounded-full" />
                        <p className='text-[22px] text-blue-30-0 font-semibold'>Scheduled</p>
                    </div>

                    <div className=' flexCenter flex-col'>
                        <img src={explore} alt="explore" className="rounded-full" />
                        <p className='text-[22px] text-blue-30-0 font-semibold'>Explore</p>
                    </div>

                    <div className='  flexCenter flex-col'>
                        <img src={planeTickets} alt="planeTickets" className="rounded-bl-full rounded-t-full" />
                        <p className='text-[22px] text-blue-30-0 font-semibold'>Plane Tickets</p>
                    </div>

                    <div className='  flexCenter flex-col'>
                        <img src={transport} alt="transport" className="rounded-full" />
                        <p className='text-[22px] text-blue-30-0 font-semibold'>Transport</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Travel
