import React from 'react'

const ProjectItem = ({ img, title, url }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-red-700'>
      <img className='rounded-xl group-hover:opacity-10' src={img} alt="project" />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracing-wider text-center'>
          {title}
        </h3>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          <p className='text-center text-gray-800'>Visit Site</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectItem