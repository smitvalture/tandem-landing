import React from 'react'
import { IoIosMail } from 'react-icons/io';

const ContactUs = () => {
    return (
        <div>
            <section id="contact" className="flex flex-col justify-center items-center bg-[#d7e5f2]">
                <h1 className="text-3xl lap:text-5xl font-medium lap:font-semibold mt-24 lap:mt-32">
                    Reach out to Us
                </h1>
                <div className="flex flex-col lap:flex-row justify-center items-center space-y-20 lap:space-y-0 lap:space-x-10 mt-14 lap:mt-28">
                    <div>
                        <p className="text-2xl text-center font-semibold">For General Inquiry</p>
                        <a target="_blank" href="mailto:info@tandempay.co">
                            <div className="left h-24 w-[360px] px-8 mt-2 lap:mt-5 border border-1 border-[#151515] rounded-lg flex items-center justify-start">
                                <IoIosMail className="mr-5 text-6xl bg-white p-2 rounded-full shadow-md" />
                                {/* <img className="mr-5" src="/images/email_icon.svg" alt="mail-img" /> */}
                                <div className="text-left text-xl">
                                    <p>info@tandempay.co</p>
                                    <span className="text-[#737373]">will reply in 24hrs</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <p className="text-2xl text-center font-semibold">For Businesses</p>
                        <a target="_blank" href="mailto:partner@tandempay.co">
                            <div className="left h-24 w-[360px] px-8 mt-2 lap:mt-5 border border-1 border-[#151515] rounded-lg flex items-center justify-start">
                                <IoIosMail className="mr-5 text-6xl bg-white p-2 rounded-full shadow-md" />
                                {/* <img className="mr-5" src="/images/email_icon.svg" alt="mail-img" /> */}
                                <div className="text-left text-xl">
                                    <p>partner@tandempay.co</p>
                                    <span className="text-[#737373]">will reply in 24hrs</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <p className="text-2xl text-center font-semibold">For Investor</p>
                        <a target="_blank" href="mailto:invest@tandempay.co">
                            <div className="left h-24 w-[360px] px-8 mt-2 lap:mt-5 border border-1 border-[#151515] rounded-lg flex items-center justify-start">
                                <IoIosMail className="mr-5 text-6xl bg-white p-2 rounded-full shadow-md" />
                                {/* <img className="mr-5" src="/images/email_icon.svg" alt="mail-img" /> */}
                                <div className="text-left text-xl">
                                    <p>invest@tandempay.co</p>
                                    <span className="text-[#737373]">Will reply in 24hrs</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <p className="mb-32 w-80 text-center mt-14 lap:mb-44 text-[#737373] text-xl font-light lap:mt-20">
                    We are available on all days between 10 AM to 7PM
                </p>
            </section>
        </div>
    )
}

export default ContactUs