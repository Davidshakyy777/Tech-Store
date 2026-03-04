import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Cart from './Cart';
import Auth from './Auth';

function Header() {
    const [cartOpen, setCartOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
  return (
    <header className='bg-black flex items-center justify-between p-4'>
        <h1 className='text-white text-4xl font-bold'>Tech Store</h1>
        <div className='text-white flex gap-2'>
          <ShoppingCartIcon onClick={() => setCartOpen(true)} className='cursor-pointer' />
          <Person2Icon onClick={() => setFormOpen(true)} className='cursor-pointer' />
        </div>
        {
          cartOpen && (
            <Modal open={cartOpen} onClose={() => setCartOpen(false)}>
              <Cart close={() => setCartOpen(false)} />
            </Modal>
          )
        }

        {
          formOpen && (
            <Modal open={formOpen} onClose={() => setFormOpen(false)}>
               <Auth close={() => setFormOpen(false)} />
            </Modal>
          )
        }
    </header>
  )
}

export default Header