import React from 'react';
import './scroll.css';

const InfiniteScroll = () => {
  const COLORS = [
    '#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'
  ];
  const TAGS = [
    'In-Person', 'All Grades', 'Programming', 'Art/Design', 'Engineering', 'Debate', 'Law',
    'Beginner-Friendly', 'International', 'History', 'Business', 'STEM', "Biology", "Physics",
    "Leadership", "Marketing", "Entrepreneurship"
  ];
  const DURATION = 15000;
  const ROWS = 5;
  const TAGS_PER_ROW = 6;

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

  const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
      <div className="loop-slider" style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
        <div className="inner">
          {children}
          {children}
        </div>
      </div>
    );
  };

  const Tag = ({ text }) => (
    <div className="tag">
      <span className="tag-text hover:underline"><div className='text-slate-400 inline'>#</div>{text}</span>
    </div>
  );

  return (
    <div className="app">
      <header className='header'>
      <div className="relative isolate px-6 pt-7 lg:px-8">
        
        <div
          className="absolute inset-x-0 z-10 transform-gpu overflow-hidden blur-xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>


    <h1 className='text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl '>One <span className='blue-color'>Powerful</span> Filtering System</h1>
    <p className='font-outfit mt-6 text-xl'>Talem offers an extensive array of filters, empowering you to discover the <b>perfect </b>activity tailored to your preferences.</p>
      </header>
      <div className="tag-list">
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION - 5000, DURATION + 5000)}
            reverse={i % 2}
          >
            {shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </InfiniteLoopSlider>
        ))}
        <div className="fade" />
      </div>
    </div>
  );
};

export default InfiniteScroll;
