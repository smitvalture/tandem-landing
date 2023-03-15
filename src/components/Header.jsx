import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/tandem_logo.svg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {

    const [toggle, setToggle] = useState(false);


    return (
        <div className=''>
            <nav className={`fixed w-screen p-5 lap:flex lap:justify-between lap:items-center duration-300 lap:transition-none hero_bg2`} id="navbar">
                <div className='max-w-[1240px]'>
                    <div className="flex justify-between items-center">
                        <Link to={"#mission"}><img className="inline mx-2 h-7 w-auto tab:h-8 lap:h-auto" href="#" src={logo} alt="tandem-img" /></Link>

                        {toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-2xl cursor-pointer mx-2 lap:hidden block" /> : <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-2xl cursor-pointer mx-2 lap:hidden block" />}


                        {/* List       */}
                        <div id="menu" className={`hidden lap:block`}>
                            <ul className="lap:inline-flex lap:flex-row lap:items-center lap:space-x-4">
                                {/* <li className="my-6 lap:my-0 lap:ml-4">
                                    <Link to={"#mission"} className="text-lg font-medium hover:text-cyan-500 duration-500 lap:transition-none" onClick={() => setToggle(!toggle)}>Our mission</Link>

                                </li> */}
                                <li className="my-6 lap:my-0 lap:ml-4">
                                    <a href="#demo" className="text-lg font-medium hover:text-cyan-500 duration-500 lap:transition-none" onClick={() => setToggle(!toggle)}>Live
                                        demo</a>
                                </li>
                                <li className="my-6 lap:my-0">
                                    <a href="#contact" className="text-lg font-medium hover:text-cyan-500 duration-500 lap:transition-none" onClick={() => setToggle(!toggle)}>Contact us</a>
                                </li>
                            </ul>
                            <div className="lap:flex lap:items-center mt-10 lap:bottom-5 space-x-4 lap:absolute lap:right-5">
                                <Link onClick={() => setToggle(!toggle)} to={"/signup"} rel="noopener noreferrer">
                                    <button className="duration-300 w-28 h-9 font-medium text-white lap:text-black bg-[#1F3C88] lap:bg-transparent hover:bg-[#23459a] lap:hover:bg-transparent lap:hover:text-cyan-500 border border-1 border-[#1F3C88] hover:border-cyan-500 lap:border-0 rounded-full" name="login" type="submit">
                                        Get started
                                    </button>
                                </Link>
                                <Link onClick={() => setToggle(!toggle)} to={"/login"} rel="noopener noreferrer">
                                    <button className="duration-300 w-28 h-9 font-medium text-[#1F3C88] hover:text-cyan-500 border border-1 border-[#1F3C88] hover:border-cyan-500 lap:transition-none rounded-full" name="login" type="submit">
                                        Log in
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Responsive Menu    */}
                <div className={`text-center lap:hidden block absolute w-full duration-300 left-0 ${toggle ? 'top-[68px]' : 'top-[-340px]'}`}>
                    <div className={`p-10 flex flex-col justify-center items-center bg-cyan-300 shadow-lg rounded-3xl rounded-t-none`}>
                        <ul className="space-y-4">
                            {/* <li className="">
                                <a href="#mission" className="text-lg font-medium hover:text-cyan-500 duration-500" onClick={() => setToggle(!toggle)}>Our mission</a>
                            </li> */}
                            <li className="">
                                <a href="#demo" className="text-lg font-medium hover:text-cyan-500 duration-500" onClick={() => setToggle(!toggle)}>Live
                                    demo</a>
                            </li>
                            <li className="">
                                <a href="#contact" className="text-lg font-medium hover:text-cyan-500 duration-500" onClick={() => setToggle(!toggle)}>Contact us</a>
                            </li>
                        </ul>
                        <div className="mt-10 space-x-4">
                            <Link onClick={() => setToggle(!toggle)} to={"/signup"} target="_blank" rel="noopener noreferrer">
                                <button className="w-28 h-9 font-medium text-white bg-[#1F3C88] hover:bg-[#23459a] border border-1 border-[#1F3C88] hover:border-cyan-500 rounded-full" name="login" type="submit">
                                    Get started
                                </button>
                            </Link>
                            <Link onClick={() => setToggle(!toggle)} to={"/login"} target="_blank" rel="noopener noreferrer">
                                <button className="w-28 h-9 font-medium text-[#1F3C88] hover:text-cyan-500 border border-1 border-[#1F3C88] hover:border-cyan-500 duration-500 rounded-full" name="login" type="submit">
                                    Log in
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Header
