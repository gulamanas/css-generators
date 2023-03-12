import Link from 'next/link';
import React from 'react';

const FlexNav = () => {
  return (
    <div className='w-full h-20 bg-red-50 flex justify-center items-center'>
      <Link className='text-3xl px-3 ' href='/'>
        Flex Wrap
      </Link>
      <Link className='text-3xl px-3' href='/justify-content'>
        Flex Justify Content
      </Link>
    </div>
  );
};

export default FlexNav;
