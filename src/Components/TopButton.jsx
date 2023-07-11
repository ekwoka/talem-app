import React, { useEffect, useState } from 'react';
import '../index.css';

export default function TopButton() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setShowArrow(scrollTop > 900);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showArrow && (
        <div className='fixed bottom-6 left-6 z-10'>
          <div className="p-2">
                <div className="group relative w-max">

                <button className='bg-gradient-to-r from-blue-300 to-blue-500 text-white p-3 rounded-full' onClick={scrollToTop}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 10l7-7m0 0l7 7m-7-7v18' />
                    </svg>
                </button>

                    <span className="pointer-events-none absolute -top-10 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-blue-200 p-1 rounded-md font-outfit">
                        Take me to the top!
                    </span>
                </div>
            </div>
        </div>
      )}
    </>
  );
}
