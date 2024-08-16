import React from 'react';
import ProfileImage from '../hero/ProfileImage';
import SkillBar from './SkillBar';


const About = () => (
  <section className="dark:bg-[#1e1e1e] px-[10vw] w-full bg-white  dark:text-white md:py-12 py-2  flex md:flex-row flex-col justify-between">
    <h1 className='md:text-[3vw] text-3xl text-center font-semibold md:mb-2 md:hidden block mb-6'>About Me</h1>
    <ProfileImage src="https://s3-alpha-sig.figma.com/img/6dea/b4e8/80f48cd1d9fa0014c092574df5520d15?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URFPwLBHbJluupLq8wuqCg~57ByOUh-xZz5SsKxXm~JI2mYJVNfLf~Z4FNUp-p9vsLH6sDVhDejBpfkInIgnAf1NcRbcVuvaUzzRQVWiOI5draU2a034t97sCCpbORWKTTQRei9EdZHDUOI28D5ud8vPovoZcb2Ax19-AthMHd73SIWQVm95WkJCMHO~Cvxe8LIz1G7aMbvqaHwH2HcDRW~HiRMBgY89YEOOpmnpy35-yFszJkZIAUO9bV-13osDI~KgQRRc4-HcTgfo6jFwhb86GePnLhVVp-kL~vaBXjCICmLTypFoYyzQjTYh4JYW6VRHR4C3H9rHY4mm-Ry-2w__" alt="Profile" />
    <div className="md:w-1/2">
    <h1 className='text-[3vw] font-semibold mb-2 md:block hidden'>About Me</h1>
    <p className="dark:text-gray-400 mb-4 md:mt-0 mt-4">I am a UI/UX designer with a passion for creating beautiful and functional designs. My expertise includes web design, app design, and graphic design.</p>
    <div className="w-full max-w-md">
      <SkillBar skill="UX Design" level={90} />
      <SkillBar skill="Web Design" level={85} />
      <SkillBar skill="Graphic Design" level={80} />
    </div>
    </div>
  </section>
);

export default About;
