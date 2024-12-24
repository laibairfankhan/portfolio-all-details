
import React from 'react'
import Heading from './Heading'
import Card from './Card'





const data =[
    {
        id:0,
        title: "Static Interactive Resume",
        desc: "A Typescript-based interactive resume built with HTML ans CSS ,allowing user to showcase  their skills dynmically",
        img:"/resume.png",
        tags: ["HTML" ,"CSS" ,"Node" , "Typescript"]
    },
    {
        id:1,
        title: "Editable Resume Builder",
        desc: "A Typescript-based interactive Editable resume built with HTML ans CSS ,allowing user to showcase  their skills dynmically",
        img:"/editable.png",
        tags: ["HTML", "CSS", "Node","Typescript"]
    },
    {
        id:2,
        title: "Meal Mate Echo System",
        desc: "Meal Mate: A user-friendly food management system designed in Figma, making meal planning and tracking effortless.",
        img:"/project5.png",
        tags: ["Figma" , "Canva" ]
    },
    {
        id:3,
        title: "Food Delivery App Practice ",
        desc: "Two simple food delivery screens created in Figma as a design practice exercise.",
        img:"/mokup 2.png",
        tags: ["Figma"],
    },
]

const project = () => {
  return (
    <div id='project' className='container pt-32'>
        <Heading  title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            
            />))}
        </div>
      
    </div>
  )
}

export default project
