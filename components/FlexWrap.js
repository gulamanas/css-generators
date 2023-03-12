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
    <div className='flex justify-around mt-9'>
      <div className='mt-0 flex flex-col gap-4 '>
        <button
          className='px-10 py-6 bg-transparent bg-[#DEB498] font-medium text-2xl rounded-full text-[#735231]'
          onClick={handleNoWrap}
        >
          No-Wrap
        </button>
        <button
          className='px-10 py-6 bg-transparent bg-[#DEB498] font-medium text-2xl rounded-full text-[#735231]'
          onClick={handleWrap}
        >
          Wrap
        </button>
        <button
          className='px-10 py-6 bg-transparent bg-[#DEB498] font-medium text-2xl rounded-full text-[#735231]'
          onClick={handleWrapReverse}
        >
          Wrap-Reverse
        </button>
      </div>
      <div className={`flex w-2/5 gap-3  items-center p-4 ${flexWrap}`}>
        <div className='w-28 h-28 bg-[#EEF0F3] rounded-3xl flex justify-center items-center font-bold text-6xl text-[#91a9cd] shadow-2xl'>
          1
        </div>
        <div className='w-28 h-28 bg-[#EEF0F3] rounded-3xl flex justify-center items-center font-bold text-6xl text-[#91a9cd] shadow-2xl'>
          2
        </div>
        <div className='w-28 h-28 bg-[#EEF0F3] rounded-3xl flex justify-center items-center font-bold text-6xl text-[#91a9cd] shadow-2xl'>
          3
        </div>
        <div className='w-28 h-28 bg-[#EEF0F3] rounded-3xl flex justify-center items-center font-bold text-6xl text-[#91a9cd] shadow-2xl'>
          4
        </div>
        <div className='w-28 h-28 bg-[#EEF0F3] rounded-3xl flex justify-center items-center font-bold text-6xl text-[#91a9cd] shadow-2xl'>
          5
        </div>
        <div className='w-28 h-28 bg-[#EEF0F3] rounded-3xl flex justify-center items-center font-bold text-6xl text-[#91a9cd] shadow-2xl'>
          6
        </div>
      </div>
    </div>
  );
};

export default FlexWrap;
