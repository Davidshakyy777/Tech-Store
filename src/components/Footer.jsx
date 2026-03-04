import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <footer className='bg-black text-white flex justify-center gap-4 p-4'>
        <h1 className='font-semibold'>Tech Store All rights reserved 2026</h1>
        <div className='space-x-2'>
          <InstagramIcon className='cursor-pointer text-blue-400' />
          <FacebookIcon className='cursor-pointer text-blue-400' />
          <XIcon className='cursor-pointer text-blue-400' />
        </div>
    </footer>
  )
}

export default Footer