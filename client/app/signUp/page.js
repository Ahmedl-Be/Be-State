import React from 'react'
import Link from 'next/link';

const page = () => {
    return (
        <div className='flex gap-6 flex-col items-center pt-32 h-screen bg-slate-200'>
            <h1 className='mb-10 text-xl md:text-2xl font-bold opacity-80'>Sign Up</h1>
            <form className='flex flex-col gap-4 w-2/3 md:w-1/3'>
            <input type='text' placeholder='Username' required 
                    className='py-3 px-2 border outline-none rounded-sm transition duration-100 focus:ring'
                />
                <input type='email' placeholder='Email' required
                    className='py-3 px-2 border outline-none rounded-sm transition duration-100 focus:ring'
                />
                <input type='password' placeholder='Password' required
                    className='py-3 px-2 border outline-none rounded-sm transition duration-100 focus:ring'
                />
                <button className='bg-gradient-to-r from-blue-500 to-slate-400  py-2 px-2 rounded transtion-all ease-in-out duration-200'>Sign Up</button>
                <button className='bg-gradient-to-r from-red-500 to-gray-400 py-2 px-2 rounded transtion-all ease-in-out duration-200'>Continue With Google</button>
            </form>
            <div className='text-center'>
                <span className='opacity-70'> Have an account? </span>
                <Link href="/signIn" className='text-blue-600 hover:text-blue-800 cursor-pointer'>Sing In</Link>
            </div>
        </div>
    )
}

export default page;