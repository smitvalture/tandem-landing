import React, { useRef, useState } from 'react'
import demo_icon from '../assets/images/demo_icon.svg'
import demo2_icon from '../assets/images/demo2_icon.svg'
import { supabase } from '../supabase/business'
import { useNavigate, Navigate } from 'react-router-dom'

const Demo = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("")

    const [dataa, setData] = useState({
        name: "",
        phone: "",
        job: "",
        biz: "",
        biz_type: "",
        no_emp: "",
        city: "",
        state: "",
        country: ""

    });

    function handleChange(e) {
        const { name, value } = e.target;
        setData((prev) => {
            return { ...prev, [name]: value }
        })


    }

    async function handleSubmit(e) {
        e.preventDefault();

        //  console.log(dataa);

        const { data } = await supabase
            .from('live_demo')
            .insert({
                'name': dataa.name,
                "phone": dataa.phone,
                "job_title": dataa.job,
                "biz_name": dataa.biz,
                "biz_type": dataa.biz_type,
                "no_emp": dataa.no_emp,
                "city": dataa.city,
                "state": dataa.state,
                "country": dataa.country,
            })
            .select()



        if (data) {

            console.log(data);
            setMessage("Response Has Been Recorded We Will Contact You Shortly.")
            // window.location.reload();
            // setData("")
            setData({
                name: "",
                phone: "",
                job: "",
                biz: "",
                biz_type: "",
                no_emp: "",
                city: "",
                state: "",
                country: ""

            })



        }



    }

    return (
        <div>
            <section id="demo" className="flex flex-col lap:grid lap:grid-cols-2 lap:place-items-center justify-center items-center px-6">
                <div className="flex flex-col justify-center items-center lap:ml-32">
                    <div className="text-[#272746] text-center">
                        <h1 className="text-3xl lap:text-4xl font-medium mt-[73px] lap:mt-0">
                            Request Live Demo
                        </h1>
                        <p className="text-[15px] lap:text-lg font-extralight w-[360px] mt-4">
                            Get live demo and learn how Tandem can help you to reduce your HR cost.
                        </p>
                    </div>
                    <div>
                        <img className="mt-16 lap:hidden h-[240px] w-auto" src={demo_icon} alt="demo-img" />
                        <img className="hidden lap:block mt-24 w-[230px] h-auto" src={demo2_icon} alt="demo-img" />
                    </div>
                </div>


                <form onSubmit={handleSubmit} className="grid grid-flow-row lap:mr-40 lap:my-24" >
                    <p className="text-base text-[#363636] font-light place-items-start mt-16">
                        Please note: all fields are required.
                    </p>
                    <div className="grid grid-flow-row mt-6 lap:mt-8 space-y-3 lap:space-y-5">
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" onChange={handleChange} type="text" value={dataa.name} name="name" placeholder="Your Name" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" onChange={handleChange} type="tel" value={dataa.phone} name="phone" placeholder="Phone Number" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" onChange={handleChange} type="text" value={dataa.job} name="job" placeholder="Job Title" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" onChange={handleChange} type="text" value={dataa.biz} name="biz" placeholder="Business Name" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" onChange={handleChange} type="text" value={dataa.biz_type} name="biz_type" placeholder="Business Type" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" onChange={handleChange} type="number" value={dataa.no_emp} name="no_emp" placeholder="Number of Employees" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" onChange={handleChange} type="text" value={dataa.city} name="city" placeholder="City" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" onChange={handleChange} type="text" value={dataa.state} name="state" placeholder="State" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" onChange={handleChange} type="text" value={dataa.country} name="country" placeholder="Country" />
                    </div>
                    {message && <p className='text-xs text-center mt-4 text-green-600'  >{message}</p>}

                    <button className="text-base text-white font-medium border border-1 border-[#1F3C88] rounded-full w-[360px] h-12 mt-6 bg-[#23469f] hover:bg-[#1F3C88] mr-[5px] lap:mr-[10px] mb-28" type="submit">
                        Request demo
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Demo