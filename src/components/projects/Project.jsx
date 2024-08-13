import React from 'react';
import SectionTitle from '../partials/SectionTitle';
import ProjectCard from './ProjectCard';
import Button from '../partials/Button';
import Link from 'next/link';

const OptionBtn = ({text,link})=>{
  return(
    <Link href={link ? link :''} 
    className="inline-block border hover:bg-orange-600 hover:text-white text-sm py-1.5 px-4 rounded transition duration-300"
  >
    {text}
</Link>
  )
}

const Projects = () => (
  <section className="dark:bg-black bg-white  dark:text-white py-12">
    <SectionTitle title="My Projects"  subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum numquam nisi ducimus eveniet facere hic architecto modi reprehenderit adipisci."} />
    <div className="flex gap-2 items-center justify-center mb-6">
      <OptionBtn text={"All"} bgcolor={"bg-transparent"}/>
      <OptionBtn text={"UI/UX"} bgcolor={"bg-transparent"}/>
      <OptionBtn text={"Web Design"} bgcolor={"bg-transparent"}/>
      <OptionBtn text={"Web Design"} bgcolor={"bg-transparent"}/>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ProjectCard image="https://s3-alpha-sig.figma.com/img/35f5/4291/466e1911ebe5383b65f5e9a7095f7e2c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BPyq4z-AI2oEhx1uYNkgj0kZelOXlwtaaBq5HYXXEcB7fugcsFVWlsCkJJcR6FXbBVQLOyRh0c8iw-l-gI37153SR5zYou3jw-lwW-8Tfu6L-zVXeuHlbbnNAiAap1ylcAlXmVa1~i9NnbzQoykJDxGuSkUeHzJQOHmU5-Apicl3TfavyGfX~n-PrqUNyDQWltiMoilfMs6AHIxwKDxPIUedBixUmyz9cDJLe5rd~DK8LtZCXSKWhlwDBXLNahh0jkx2jTzWFOwAtf2bt3G9IRxkyqtpYwFVBgerPCQMKbO3c0tXLzjoauMIKUDnrNoyPuIxb5VU1Tk1ugVNTTmu1w__" title="Project One" description="AirCalling Landing Page Design." />
      <ProjectCard image="https://s3-alpha-sig.figma.com/img/99ad/9ecd/c7e4761db8fcbee96701dabc95083a4d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pw7ieWqQZSAPwHshvhzpMCKwRcwc99wYUq6HAHak-gmlSFYopBtihqFUpFAhU5SIedCd4dY~blVQPYTJBt-3uF8wHYZYuteqkMNwTP6WdqJmtguNaApzAcnQnWD~Il0iKk1CwNbrKCXI1ofSv7hVuks5SkOu6kuSgCxtJ4xA~WVko9McwSPOBao4sL9NOXOkvyt6aNjGacgxRaH5pI8KdG4TI5JFMXf1G0PMvy52dLcvR1MZJEKJTIQS4XwJ0SJ5AIWHBzW41QzbseuyUmvcnM6x4u8olJKVp6NPi9mELeNm8frmbSA7g0TZKBoM9BEyfUl3SL5r0Vfa~QRXqrpsZg__" title="Project Two" description="Business Landing Page Design." />
      <ProjectCard image="https://s3-alpha-sig.figma.com/img/08a3/15aa/af2fb38ce2fa59072d26b09da15537ed?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKlFPgdd3SOC8y08OOnU3NPsdF4uwBJQB~KdJGMZCobuHp-dLU-BJ66juDafoSTHn~65UwtGRJiybl5lSvRBx6UKV6ISq6mY8D48baphIaGQAw9I3X788Yw0kuV5~JhnpMhYb-HyoEpOOWkbaJRXQS3fUXzKzkGuq19ovXaK-2uECYOIBl2RFq6KyCGPhYjJ9VVPAAQYu4VfVFCRn9ahmHai1r8lJq6ESj~wq33m05nb3kyp~nu9g0nCm-0lLS8ousgqL~ejYCVG-KEwoOlvGg2aCYBi~17lcvd2JbuN11RSEtgNmTWKYLX9uVS5b3yemPxTyMV6sXMe6RnwyZiUtw__" title="Project Three" description="Ecom Web Page Design." />
    </div>
  </section>
);

export default Projects;
