import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Bagrati Injgia, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque voluptatem, magni
              fuga similique nihil quam omnis! Commodi at facilis maxime aliquid laborum nulla,
              possimus sed ipsa mollitia magni debitis nostrum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
