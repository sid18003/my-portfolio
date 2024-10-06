import React,{useEffect} from 'react'
import counter from '../assets/projects/counter.png'
import algo from '../assets/projects/algo.png'
import food from '../assets/projects/fooddel.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: counter,
      desc: "This blogging website is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to create, edit, and delete blog posts, with features like user authentication, comments, and image uploads. The platform is fully responsive, secure, and optimized for a seamless blogging experience.",
      code: "https://github.com/sid18003/Blogging-Website"
    },
    {
      id: 2,
      src: algo,
      desc: "The Algorithm Visualizer project is designed to help users understand algorithms through interactive visualizations. Built with JavaScript and React, it showcases various algorithms, including sorting and searching techniques, in real time. Users can step through each algorithm's process, making complex concepts more accessible and engaging.",
      code: "https://github.com/sid18003/Algorithm_visualizer"
    },
    {
      id: 3,
      src: food,
      desc: "The Food Delivery Website project leverages the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrates Socket.IO for real-time order tracking and notifications. Users can browse menus, place orders, and receive live updates on their delivery status. The platform ensures a seamless and interactive experience, making food delivery convenient and engaging.",
    
      code: "https://github.com/sid18003/Food-delivery-website"
    },
    
    
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
             Projects().map(({ id, src, desc, /*demo,*/ code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button> */}
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects