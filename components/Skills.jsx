import React from 'react';
import Skill from './Skill';

const langData = [
  { imgSrc: '/assets/skills/java.png', skillName: 'Java' },
  { imgSrc: '/assets/skills/python.png', skillName: 'Python' },
  { imgSrc: '/assets/skills/sql.png', skillName: 'SQL' },
  { imgSrc: '/assets/skills/c.png', skillName: 'C' },
  { imgSrc: '/assets/skills/cpp.png', skillName: 'C++' },
  { imgSrc: '/assets/skills/javascript.png', skillName: 'JavaScript' },
  { imgSrc: '/assets/skills/typescript.png', skillName: 'TypeScript' },
  { imgSrc: '/assets/skills/php.png', skillName: 'PHP' },
  { imgSrc: '/assets/skills/html.png', skillName: 'HTML' },
  { imgSrc: '/assets/skills/css.png', skillName: 'CSS' },
];

const toolData = [
  { imgSrc: '/assets/skills/github.png', skillName: 'Git' },
  { imgSrc: '/assets/skills/vscode.png', skillName: 'VSCode' },
  { imgSrc: '/assets/skills/node.png', skillName: 'Node.js' },
  { imgSrc: '/assets/skills/homebrew.png', skillName: 'Homebrew' },
  { imgSrc: '/assets/skills/maven.png', skillName: 'ApacheMaven' },
  { imgSrc: '/assets/skills/postman.png', skillName: 'Postman' },
  { imgSrc: '/assets/skills/docker.png', skillName: 'Docker' },
  { imgSrc: '/assets/skills/ngnix.png', skillName: 'NGNIX' },
  { imgSrc: '/assets/skills/scenebuilder.png', skillName: 'Scene Builder' },
];

const frameworkData = [
  { imgSrc: '/assets/skills/react.png', skillName: 'React' },
  { imgSrc: '/assets/skills/reactnative.png', skillName: 'React Native' },
  { imgSrc: '/assets/skills/nextjs.png', skillName: 'Next.js' },
  { imgSrc: '/assets/skills/tailwind.png', skillName: 'Tailwind CSS' },
  { imgSrc: '/assets/skills/redux.png', skillName: 'Redux' },
  { imgSrc: '/assets/skills/javafx.png', skillName: 'JavaFX' },
];

const databaseData = [
  { imgSrc: '/assets/skills/mysql.png', skillName: 'MySQL' },
  { imgSrc: '/assets/skills/sqlite.png', skillName: 'SQLite' },
  { imgSrc: '/assets/skills/firebase.png', skillName: 'Firebase' },
  { imgSrc: '/assets/skills/firestore.png', skillName: 'Firestore' },
  { imgSrc: '/assets/skills/aws.png', skillName: 'AWS S3' },
];

const Skills = () => {
  return (
    <div id='skills' className='w-full sm:h-450vh md:h-250vh lg:h-150vh p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#004aad]'>
          Skills
        </p>
        <h2 className='py-4 text-gray-700'>What I Can Do</h2>
        <p className='py-2 text-xl text-gray-600'>Languages</p>
        <div className='py-2 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {langData.map((skill) => (
            <Skill imgSrc={skill.imgSrc} skillName={skill.skillName} />
          ))}
        </div>
        <p className='py-2 text-xl text-gray-600'>Tools</p>
        <div className='py-2 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {toolData.map((skill) => (
            <Skill imgSrc={skill.imgSrc} skillName={skill.skillName} />
          ))}
        </div>
        <p className='py-2 text-xl text-gray-600'>Frameworks & Libraries</p>
        <div className='py-2 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {frameworkData.map((skill) => (
            <Skill imgSrc={skill.imgSrc} skillName={skill.skillName} />
          ))}
        </div>
        <p className='py-2 text-xl text-gray-600'>Databases</p>
        <div className='py-2 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {databaseData.map((skill) => (
            <Skill imgSrc={skill.imgSrc} skillName={skill.skillName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
