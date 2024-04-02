import React from 'react';
import appleImg from '@/public/assets/projects/apple.png';
import asmImg from '@/public/assets/projects/asm.png';
import gymImg from '@/public/assets/projects/gym.png';
import calcImg from '@/public/assets/projects/calc.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div className='w-full sm:h-200vh md:h-150vh'>
      <div className='max-w-[1240px] mx-auto px-2 py-32'>
        <p className='text-xl tracking-widest uppercase text-[#004aad]'>
          Projects
        </p>
        <h2 className='py-4 text-gray-700'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Apple Inventory Application'
            description='JavaFX + MySQL'
            backgroundImg={appleImg}
            projectUrl='/'
          />
          <ProjectItem
            title='MIPS Assembly ALU'
            description='Boolean Logic + MIPS Arithmetic'
            backgroundImg={asmImg}
            projectUrl='/'
          />
          <ProjectItem
            title='Gym Population Mobile Application'
            description='React Native + Firebase'
            backgroundImg={gymImg}
            projectUrl='/'
          />
          <ProjectItem
            title='Java Swing Calculator'
            description='Java Swing + AWT'
            backgroundImg={calcImg}
            projectUrl='/'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
