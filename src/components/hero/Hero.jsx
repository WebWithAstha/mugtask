import React from 'react';
import ProfileImage from './ProfileImage';
import SectionTitle from '../partials/SectionTitle';
import SocialLinks from './SocialLinks';
import Button from '../partials/Button';

const Hero = () => (
    <section className="dark:bg-black bg-white  dark:text-white py-12 flex">
        <div className="left w-1/2">
            <h2>Hi I'm</h2>

            <SectionTitle title="Muhammad Umair" subtitle="UI & UX Designer" />
            <p className="dark:text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, eius. Sunt voluptatem, perferendis ab eaque at ratione aspernatur nihil labore.</p>
            <Button text="Download CV" link="/cv-link" />
        </div>
        <ProfileImage src="https://s3-alpha-sig.figma.com/img/8aeb/1fc9/979b379ab7f66745a5c557015bf995d5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7qnOOi7RvdBltV-bRZXFEf6epZoJy1pfpt5gM014F0-kpaMk4cGmKWVcZifKwBppE5EaS8XJ2AGxlwUlxUsbtL3v3w6MTRYghyThMp2Mi0DmDlZL3sM5eOIV~5vwCccy95Racy0K7t~TGse2bAp6RfB3BnWcB-hiBHktjozoqsn7gLlnQHIExdfwKtGjGDTnAyfeA45r2Gu--vBxllz4RohlqVZIL9YJbjzzd-etUxfB6kliMSqgVv827rN4psfe8i2XRKIozWP4Rd6a-e8juOH8now4DoiM-wrQoDw9qRz5eoY9IN~8Vn5pOdAbzXg-9BsLWgRPKeEhKzK4g0N0w__" alt="Profile" />
        <SocialLinks />
    </section>
);

export default Hero;
