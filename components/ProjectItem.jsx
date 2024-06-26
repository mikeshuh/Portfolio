import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const ProjectItem = ({ title, description, backgroundImg, projectUrl }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#004aad] to-[#709dff]'>
      <div className='p-4'>
        <Image
          className='rounded-xl group-hover:opacity-10'
          src={backgroundImg}
          alt='/'
        />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{description}</p>
        <Link href={projectUrl}>
          <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
