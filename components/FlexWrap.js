import React, { useState } from 'react';

const FlexWrap = () => {
  const [flexWrap, setFlexWrap] = useState('');

  const handleNoWrap = () => {
    setFlexWrap('flex-nowrap');
  };

  const handleWrap = () => {
    setFlexWrap('flex-wrap');
  };

  const handleWrapReverse = () => {
    setFlexWrap('flex-wrap-reverse');
  };

  return (
    <div className='flex justify-between '>
      <div className='mt-0 flex flex-col gap-2 '>
        <button
          className='px-4 py-2 bg-transparent border border-red-400'
          onClick={handleNoWrap}
        >
          No-Wrap
        </button>
        <button
          className='px-4 py-2 bg-transparent border border-red-400'
          onClick={handleWrap}
        >
          Wrap
        </button>
        <button
          className='px-4 py-2 bg-transparent border border-red-400'
          onClick={handleWrapReverse}
        >
          Wrap-Reverse
        </button>
      </div>
      <div
        className={`flex w-2/5 gap-3 border border-red-400 items-center p-4 ${flexWrap}`}
      >
        <div className='w-28 h-28 bg-red-400 '>1</div>
        <div className='w-28 h-28 bg-red-400 '>2</div>
        <div className='w-28 h-28 bg-red-400 '>3</div>
        <div className='w-28 h-28 bg-red-400 '>4</div>
        <div className='w-28 h-28 bg-red-400 '>5</div>
        <div className='w-28 h-28 bg-red-400 '>6</div>
      </div>
    </div>
  );
};

export default FlexWrap;
