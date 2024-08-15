import React from 'react';
import Logo from './partials/Logo';
import NavOptions from './partials/nav/NavOptions';
import SocialLinks from './hero/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-zinc-50 flex flex-col items-center py-10">
    <Logo height={"30"}/>
    <div className="flex md:flex-row flex-col md:text-left text-center gap-2 md:gap-4 my-4  mb-6 md:my-8">
      <NavOptions/>
    </div>
    <SocialLinks/>
    </footer>
  );
};

export default Footer;
