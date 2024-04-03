import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#004aad]'>
            About
          </p>
          <h2 className='py-4 text-gray-700'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Hello! I'm Michael Huh, a Computer Science major at San Jose State
            University, projected to graduate in May 2025.
          </p>
          <p className='py-2 text-gray-600'>
            With hands-on experience in a broad range of languages and
            technologies, including Java, Python, SQL, and React, and a keen
            interest in backend development, I thrive in dynamic environments,
            always with an eager mindset to learn and innovate.
          </p>
          <p className='py-2 text-gray-600'>
            Beyond my technical skills, I am a strong believer in teamwork,
            leadership, and community engagement. On campus, I am a member of
            Theta Tau Professional Engineering Fraternity, where I served as the
            Vice President from May 2023 to December 2023. I take pride in our
            commitment to professional development and community service.
          </p>
          <p className='py-2 text-gray-600'>
            Let's connect, and{' '}
            <span className='underline cursor-pointer'>
              check out some of my latest projects!
            </span>
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            className='rounded-xl'
            src='/assets/profilePic.jpeg'
            alt='/'
            width='600'
            height='800'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
