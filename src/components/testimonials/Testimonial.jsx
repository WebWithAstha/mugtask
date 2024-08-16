import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../partials/SectionTitle';



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
            image: 'https://s3-alpha-sig.figma.com/img/ac6c/6fee/baa649092172e33f9b1e0e4eb8df495d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dXZZ53vmGB-MU83LfG8sisQg3200USCDDM9hEPhvUWP5on1iY040sNILVeBDhfiL8fQZX926KeaKgaTVlGXMP59QFm5eO2CMy9EBUaZritbRUGma-QeTQNFCPCcakEapa17JDY7hKmkDHpGknR6nV2Kh2W5ueTs96RPIrpCjFuC2c5~fD1C46Agc-YLchrLSj3DqtXw-hCcNhxy0U0YgvtrGpBQQNsaKaCCBywYeDIcN~Y1h2oEUOey6JOGAJTgAqSfTKw7in8XDK~vFd-Hm7qjgyB1y4LHbtxituuxMQuOPm7r4Y5zamlH~fvEXFnPEJHUhL9yIAdNIOZXBrkwYiw__', // Replace with actual image URLs
            feedback: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.'
        },
        {
            name: 'Jane Smith',
            position: 'Designer',
            image: 'https://s3-alpha-sig.figma.com/img/ef2a/ae46/3fa637cd1c7f4913b84b9f6c8137cb98?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qSofB8yraL1aIvnDGgFxjXJg8g1OnM8AaAVtttkdoJ7r6DABYdGwwVC8KlJUcNZPrJF5aceFz9-Z7qHgaN4Q-7jLn1wua29JxfOo6hM55oy1kmxjkjvF~iY3awvkVSuHGaVYQpHbJ~wkW9xKTQQ3ZZ7SPYVokh7wzvEkz1AYz-ugfqyeBLHIkxRnpdp6zEvpKtxu7BI~N9tr9daQpTU58FOLaoEuZcRt7NdCRP1PQvG5E1VExe7JK2Mzu3kaMMqNw-sNNOp9mQcPqbmQTwAsEp4-Oudi6GLXqLoOc5unUZ8bHplN0yjv0xBmJQspKnP-5E9upODFldH2-rhjsMKg7A__', // Replace with actual image URLs
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
        <section className=" dark:bg-[#1e1e1e] bg-white py-12 pb-20 overflow-hidden">
          <div className="px-[10vw]">

          <SectionTitle title = "Testimonials" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum numquam nisi ducimus eveniet facere hic architecto modi reprehenderit adipisci."/>
          </div>
          
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={"auto"}
                centeredSlides={true}
                className="mySwiper md:mt-16"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-full md:gap-5 gap-2 md:p-8 p-6 rounded-xl md:px-20 bg-gray-200 flex md:flex-row flex-col w-full md:items-center">
                          <div className="flex gap-2 items-end">

                            <div className="img rounded-full md:w-40 w-20 h-full aspect-square">
                                <img src={testimonial.image} className=' h-full w-full rounded-full object-cover' alt="" />
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