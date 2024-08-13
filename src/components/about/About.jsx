import React from 'react';
import SectionTitle from '../partials/SectionTitle';
import ProfileImage from '../hero/ProfileImage';
import SkillBar from './SkillBar';


const About = () => (
  <section className="dark:bg-black w-full bg-white  dark:text-white py-12 flex justify-between">
    <ProfileImage src="https://s3-alpha-sig.figma.com/img/6dea/b4e8/80f48cd1d9fa0014c092574df5520d15?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URFPwLBHbJluupLq8wuqCg~57ByOUh-xZz5SsKxXm~JI2mYJVNfLf~Z4FNUp-p9vsLH6sDVhDejBpfkInIgnAf1NcRbcVuvaUzzRQVWiOI5draU2a034t97sCCpbORWKTTQRei9EdZHDUOI28D5ud8vPovoZcb2Ax19-AthMHd73SIWQVm95WkJCMHO~Cvxe8LIz1G7aMbvqaHwH2HcDRW~HiRMBgY89YEOOpmnpy35-yFszJkZIAUO9bV-13osDI~KgQRRc4-HcTgfo6jFwhb86GePnLhVVp-kL~vaBXjCICmLTypFoYyzQjTYh4JYW6VRHR4C3H9rHY4mm-Ry-2w__" alt="Profile" />
    <div className="w-1/2">
    {/* <SectionTitle title="About Me" /> */}
    <h1 className='text-[3vw] font-semibold mb-2'>About Me</h1>

    <p className="dark:text-gray-400 mb-4">I am a UI/UX designer with a passion for creating beautiful and functional designs. My expertise includes web design, app design, and graphic design.</p>
    <div className="w-full max-w-md">
      <SkillBar skill="UX Design" level={90} />
      <SkillBar skill="Web Design" level={85} />
      <SkillBar skill="Graphic Design" level={80} />
    </div>
    </div>
  </section>
);

export default About;
