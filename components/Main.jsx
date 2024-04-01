import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Commitment to Innovation
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I'm <span className='text-[#004aad]'>Michael</span>
          </h1>
          <h1 className='py-2 text-gray-700'>An Aspiring Software Engineer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            As a dedicated third-year Computer Science student at San Jose State
            University, I've not only excelled academically but also applied my
            skills in software development to a variety of personal projects.
            With expertise in a variety of programming languages and other web
            technologies, I bring versatility and a commitment to innovation.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
