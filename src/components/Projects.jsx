import React from 'react'
import ProjectItem from './ProjectItem'
import webOneImg from '../assets/gallery.png'
import webTwoImg from '../assets/heat_codes.png'
import webThreeImg from '../assets/elitecontracting.png'
import webFourImg from '../assets/primefloors.png'

const projectsData = [
  {
    img: webOneImg,
    title: 'Picselate',
    url: 'https://picselate.net/'
  },
  {
    img: webTwoImg,
    title: 'Heat Codes',
    url: 'https://heatcodes.net/'
  },
  {
    img: webThreeImg,
    title: 'Elite Contracting',
    url: 'https://northstaracquisition.net/'
  },
  {
    img: webFourImg,
    title: 'Prime Floors',
    url: 'https://primefloors.netlify.app/'
  }
];

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-red-700'>Projects</h1>
      <p className='text-center py-8'>I have developed a portfolio of websites for small businesses, using my creativity and programming skills to bring their brands to life. I am confident that I can do the same for your business.</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            img={project.img}
            title={project.title}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects