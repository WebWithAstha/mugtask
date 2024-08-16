import React from 'react';
import Logo from './partials/Logo';
import NavOptions from './partials/nav/NavOptions';
import SocialLinks from './hero/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-[#1e1e1e] dark:text-white md:pt-24 flex flex-col items-center pt-10">
    <Logo height={"30"}/>
    <div className="flex md:flex-row flex-col md:text-left text-center gap-2 md:gap-4 my-4  mb-6 md:my-8">
      <NavOptions/>
    </div>
    <SocialLinks/>
    <div className="w-full dark:bg-black text-white bg-zinc-700 text-center py-4 mt-10 md:text-sm text-xs">© 2023 <span className="text-orange-400"> Mumair</span> All Rights Reserved , Inc.</div>
    </footer>
  );
};

export default Footer;
