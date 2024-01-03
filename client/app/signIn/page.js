"use client"
import Link from 'next/link';
import { useForm } from '@/hooks/useForm';
import { Notify } from "@/components/UI/Notify";

const page = () => {
    const initialState = { username: '', email: '', password: '' };
    const { formData, error, loading, handleChange, handleSubmit } = useForm(
        initialState,
        'signIn',
        'Sign-Up Successfully',
        "/",
    );

    return (
        <div className='flex gap-6 flex-col items-center pt-32 h-screen bg-slate-200'>
            <h1 className='mb-10 text-xl md:text-2xl font-bold opacity-80'>Sign In</h1>
            <form className='flex flex-col gap-4 w-2/3 md:w-1/3' onSubmit={handleSubmit}>
                <input type='email' placeholder='Email' required name='email'
                    className='py-3 px-2 border outline-none rounded-sm transition duration-100 focus:ring'
                    onChange={handleChange}
                    value={formData.email}
                />
                <input type='password' placeholder='Password' required name='password'
                    className='py-3 px-2 border outline-none rounded-sm transition duration-100 focus:ring'
                    onChange={handleChange}
                    value={formData.password}
                />
                <button disabled={loading} className='disabled:opacity-50 bg-gradient-to-r from-slate-400 to-blue-500 py-2 rounded transtion-all ease-in-out duration-200'>Sign In</button>
                <button disabled={loading} className='disabled:opacity-50 bg-gradient-to-r from-red-500 to-slate-400 py-2 rounded transtion-all ease-in-out duration-200'>Continue With Google</button>
            </form>
            <div className='text-center'>
                <span className='opacity-70'>Dont Have an account? </span>
                <Link href="/signUp" className='text-blue-600 hover:text-blue-800 cursor-pointer'>Sing Up</Link>
            </div>
            {error && <Notify />}
        </div>
    )
}

export default page;