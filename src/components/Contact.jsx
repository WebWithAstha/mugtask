import React from 'react';
import SectionTitle from './partials/SectionTitle';

const Contact = () => {
  return (
    <section className="dark:bg-black bg-white  dark:text-white py-16">
      <div className="container mx-auto text-center flex flex-col items-center">
      <SectionTitle title="Let's Design Together"  subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum numquam nisi ducimus eveniet facere hic architecto modi reprehenderit adipisci."} />

        {/* <h2 className="text-4xl font-bold mb-8">Let's Design Together</h2>
        <p className="mb-8 w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo nisi, in nam ullam eius asperiores repellat similique maxime id?</p> */}
        <form className="flex gap-4 items-center justify-center">
          <input
            type="email"
            placeholder="Your Email"
            className="w-3/4 md:w-1/2 p-3 dark:bg-zinc-700 bg-zinc-100 border-2 rounded-md focus:outline-none"
          />
          <button className="bg-orange-500 hover:bg-orange-600 dark:text-white px-6 py-3 rounded-md font-bold">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
