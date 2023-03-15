import React from 'react'
import logo_white from '../assets/images/tandem_logo_white.svg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#1F3C88] pt-20 lap:pt-10 pb-2 text-white">
                <div className="flex flex-col lap:flex-row lap:justify-center lap:items-center">
                    <div className="flex lap:flex-row justify-center items-center lap:justify-between lap:space-x-56">
                        <div className="hidden lap:block">
                            <div className="left flex flex-col lap:flex lap:flex-col">
                                <img
                                    className="w-32 mb-4"
                                    src={logo_white}
                                    alt="tandem-img"
                                />
                                <a href="#" className="text-[15px] font-medium">
                                    company
                                </a>
                                <a href="#" className="text-sm font-normal">
                                    Home
                                </a>
                                <a href="#" className="text-sm font-normal">
                                    Contact us
                                </a>
                                <a href="#" className="text-sm font-normal">
                                    Terms &amp; Aggrement
                                </a>
                                <a href="#" className="text-sm font-normal">
                                    Privacy
                                </a>
                            </div>
                        </div>
                        <div className="hidden lap:block">
                            <div className="mid flex flex-col lap:text-center lap:space-y-4">
                                <p className="text-[15px] font-medium">Follow Us</p>
                                <div className="flex space-x-3">
                                    <a href="#">
                                        <FaFacebookSquare className='text-2xl text-gray-400 hover:text-white' />
                                    </a>
                                    <a href="#">
                                        <FaTwitterSquare className='text-2xl text-gray-400 hover:text-white' />
                                    </a>
                                    <a href="#">
                                        <FaInstagramSquare className='text-2xl text-gray-400 hover:text-white' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="right flex flex-col lap:mt-20">
                            <h2 className="text-xl">
                                Join our
                                <br />
                                monthly news letter
                            </h2>
                            <input
                                className="w-[340px] h-10 py-1 px-5 mt-5 rounded-md text-black"
                                type="email"
                                name="email"
                                id=""
                                placeholder="Enter your email"
                            />
                            <button
                                className="text-base text-white font-medium border border-1 border-[#272746] rounded-md w-44 h-10 mt-5 bg-[#272746] hover:bg-[#363662]"
                                type="submit"
                                name="getstart"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>



                    <div className="lap:hidden flex flex-row justify-center mt-24 space-x-24 lap:space-x-[15rem]">
                        <div className="left flex flex-col">
                            <img
                                className="w-32"
                                src={logo_white}
                                alt="tandem-img"
                            />
                            <a href="#" className="text-[15px] font-medium">
                                company
                            </a>
                            <a href="#" className="text-sm font-normal">
                                Home
                            </a>
                            <a href="#" className="text-sm font-normal">
                                Contact us
                            </a>
                            <a href="#" className="text-sm font-normal">
                                Terms &amp; Aggrement
                            </a>
                            <a href="#" className="text-sm font-normal">
                                Privacy
                            </a>
                        </div>
                        <div className="mid flex flex-col">
                            <p className="text-[15px] font-medium">Follow Us</p>
                            <div className="flex space-x-3">
                                <a href="#">
                                    <FaFacebookSquare className='text-2xl text-gray-400 hover:text-white' />
                                </a>
                                <a href="#">
                                    <FaTwitterSquare className='text-2xl text-gray-400 hover:text-white' />
                                </a>
                                <a href="#">
                                    <FaInstagramSquare className='text-2xl text-gray-400 hover:text-white' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-10 text-center w-4/5 mx-auto lap:mt-24">
                    © 2022 Tandem, All rights reserved. Terms and Conditions · Privacy Policy ·
                    Do Not Sell My Personal Information
                </p>
            </footer>

        </div>
    )
}

export default Footer