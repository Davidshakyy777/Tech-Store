import React from 'react'

function Auth({close}) {

  function submit(e) {
    e.preventDefault();
    close();
  }

  return (
    <form className='bg-white flex flex-col gap-6 w-[400px] p-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50' onSubmit={submit}>
      <h1 className='text-xl font-bold text-center'>Registration</h1>
      <input className='outline-0' type="email" placeholder='Email' />
      <input className='outline-0' type="password" name="" id="" placeholder='Password' />
      <button className='bg-blue-400 text-white rounded cursor-pointer' type='submit'>Submit</button>
    </form>
  )
}

export default Auth