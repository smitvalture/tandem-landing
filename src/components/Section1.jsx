import React from 'react'
import { Link } from 'react-router-dom'

const Section1 = () => {

    return (
        <div className='hero_bg bg-[#d4e2f0] px-6' >
            <div className="flex flex-col justify-center items-center pt-[78px]">
                <h1 className="text-[#272746] text-4xl lap:text-7xl font-semibold text-center mt-36 lap:mt-40 w-72 lap:w-[573px]">
                    Save money on your payroll
                </h1>
                <p className="text-[#272746] text-base lap:text-2xl font-normal w-80 lap:w-[730px] text-center mt-12 lap:mt-14">
                    At Tandem, We help businesses - reduce their payroll expense by delivering
                    them a unique payout structure, which not only lets them save money but also
                    makes their workforce satisfied &amp; happy.
                </p>
                <div className="mt-12 mb-36 lap:mb-40">
                    <Link to={"/signup"} rel="noopener noreferrer">
                        <button
                            className="text-base text-white font-medium border border-1 border-[#272746] rounded-full w-40 h-10 bg-[#272746] hover:bg-[#363662] mr-[5px] lap:mr-[10px]"
                            type="submit"
                        >
                            Get started
                        </button>
                    </Link>
                    <button
                        className="text-base font-semibold border border-1 border-[#272746] rounded-full w-40 h-10 ml-[5px] lap:ml-[10px]"
                        type="submit"
                    >
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section1