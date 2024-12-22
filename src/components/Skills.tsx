import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='container py-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl' >Technologies I Expertise In</h2>



                <p className='text-gray-500 pt-2'>I have a strong command of HTML, CSS, and JavaScript, along with hands-on experience in React and Next.js for building dynamic, scalable web applications. Proficient in Tailwind CSS, I deliver clean, efficient, and responsive designs. Driven by a passion for continuous learning, I stay updated with emerging technologies to consistently enhance my skill set and contribute to successful project outcomes.</p>
            </div>
            <div>


                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className=' text-orange-500 space-y-2'>
                        <h2 data-aos="zoom-in-up" >TypeScript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>

                    <div className='  text-orange-500 space-y-2'>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">HTML</h2>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Skills
