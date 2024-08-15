import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../partials/SectionTitle';
import Image from 'next/image';


// import required modules
// import { Pagination } from 'swiper/modules';

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<h4 class="' + className + '"></h4>';
  },
};

export default function SwipperJs() {

    const testimonials = [
        {
            name: 'John Doe',
            position: 'CEO',
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URLs
            feedback: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        },
        {
            name: 'Jane Smith',
            position: 'Designer',
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URLs
            feedback: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        },
        {
            name: 'John Doe',
            position: 'CEO',
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URLs
            feedback: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        },
        {
            name: 'Jane Smith',
            position: 'Designer',
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URLs
            feedback: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        },
        // Add more testimonials as needed
    ];

    return (
        <section className=" py-12 pb-20 overflow-hidden">
          <div className="px-[10vw]">

          <SectionTitle title = "Testimonials" subtitle="Lorem ipsum dolor, sit nsectetur adipisicing elit. Numquam, blanditiis libero! Et animi quam, blanditiis libero! Et animi."/>
          </div>
          
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={"auto"}
                centeredSlides={true}
                className="mySwiper"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-full md:gap-5 gap-2 md:p-8 p-6 rounded-xl md:px-20 bg-gray-200 flex md:flex-row flex-col w-full md:items-center">
                          <div className="flex gap-2 items-end">

                            <div className="img rounded-full md:w-40 w-20 h-full aspect-square">
                                <Image src={testimonial.image} className=' h-full w-full rounded-full' alt="" />
                            </div>
                            <div className="text-left md:hidden block">
                            <h1 className='font-bold text-xs mt-3'>{testimonial.name}</h1>
                                <h2 className=''>{testimonial.position}</h2>
                            </div>
                          </div>
                            <div className="text-start">
                                <p className='md:text-lg text-xs tracking-wide md:leading-7'>{testimonial.feedback}</p>
                                <div className="md:block hidden">
                                <h1 className='font-bold text-lg mt-3'>{testimonial.name}</h1>
                                <h2 className=''>{testimonial.position}</h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}