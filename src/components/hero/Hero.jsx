import React from 'react';
import ProfileImage from './ProfileImage';
import SocialLinks from './SocialLinks';
import Button from '../partials/Button';

const Hero = () => (
    <section className="dark:bg-[#1e1e1e] bg-white px-[10vw] dark:text-white py-12 flex md:flex-row flex-col-reverse justify-between">
        <div className="left md:w-1/2 w-full mt-10 md:mt-20">
            <h2>Hi I'm</h2>
            <h4 className='text-orange-500 font-semibold md:mb-0 mb-2'>Muhammad Umair</h4>
            <h1 className='md:text-6xl text-5xl font-bold leading-none mb-1'>UI & UX</h1>
            <h1 className='md:text-6xl text-5xl font-bold leading-none w-full md:w-[68%] text-right mb-4'>Designer</h1>

            <p className="dark:text-gray-400 mb-4 text-sm w-full md:w-[68%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit m. Deserunt, eius. Sunt voluptatem, perferendis ab eaque ata ratione aspernatur nihil labore.</p>
            <Button text="Download CV" link="/cv-link" />
        </div>
        <div className="flex flex-col items-center gap-4">

        <ProfileImage src="https://s3-alpha-sig.figma.com/img/8aeb/1fc9/979b379ab7f66745a5c557015bf995d5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7qnOOi7RvdBltV-bRZXFEf6epZoJy1pfpt5gM014F0-kpaMk4cGmKWVcZifKwBppE5EaS8XJ2AGxlwUlxUsbtL3v3w6MTRYghyThMp2Mi0DmDlZL3sM5eOIV~5vwCccy95Racy0K7t~TGse2bAp6RfB3BnWcB-hiBHktjozoqsn7gLlnQHIExdfwKtGjGDTnAyfeA45r2Gu--vBxllz4RohlqVZIL9YJbjzzd-etUxfB6kliMSqgVv827rN4psfe8i2XRKIozWP4Rd6a-e8juOH8now4DoiM-wrQoDw9qRz5eoY9IN~8Vn5pOdAbzXg-9BsLWgRPKeEhKzK4g0N0w__" alt="Profile" />
        <SocialLinks />
        </div>
    </section>
);

export default Hero;
