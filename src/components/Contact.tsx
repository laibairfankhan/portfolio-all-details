import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";


const Contact = () => {
  return (
    <div id='Contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-up">Get in Touch</h2>
                <p className='text-gray-600 text-[18-px] pt-2' data-aos="zoom-in-up">Feel free to drop me a message, give me a call, or reach out via the form below. I look forward to connecting with you</p>
                <div className=' flex gap-3 items-center' data-aos="zoom-in-up">
                <MdOutlineEmail size={30} />laibakhan30500@gmail.com
                </div>
                
                <div className=' flex gap-3 items-center' data-aos="zoom-in-up">
                <  BsTelephoneInbound size={30} />(021)181070398
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex  flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type='text' className='h-[40px] bg-transparent border border-orange-500'  id='name'/>
                </div>

                <div className='flex  flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='email'>Email</label>
                    <input type='text' className='h-[40px] bg-transparent border border-orange-500'  id='email'/>
                </div>

                <div className='flex  flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='msg'>Message</label>
                    <textarea className=' bg-transparent border border-orange-500'  id='msg' rows={8}></textarea>
                </div>

                <button className='bg-accent  p-2 px-6' data-aos="zoom-in-up">Send</button>


                
            </div>
        </div>
      
    </div>
  )
}

export default Contact
