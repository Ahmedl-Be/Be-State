"use client"
import React, { useState ,useEffect} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const notify = () => toast(error);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    // trace the error changing
    useEffect(() => {
        if (error) {
            notify();
        }
    }, [error]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        notify()
        try {
            setLoading(true);
            const res = await fetch('http://localhost:5000/api/auth/signup', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if (data.success === false) {
                setError(data.message)
                setLoading(false)
                return
            }
            setLoading(false);
            setError(null)
            setFormData({username:'', email:'', password:''})
            router.push('/signIn')
            console.log(data)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    return (
        <div className='flex gap-6 flex-col items-center pt-32 h-screen bg-slate-200'>
            <h1 className='mb-10 text-xl md:text-2xl font-bold opacity-80'>Sign Up</h1>
            <form className='flex flex-col gap-4 w-2/3 md:w-1/3'
                onSubmit={handleSubmit}>
                <input type='text' placeholder='Username' required name='username'
                    className='py-3 px-2 border outline-none rounded-sm transition duration-100 focus:ring'
                    onChange={handleChange}
                    value={formData.username}
                />
                <input type='email' placeholder='Email' required name='email'
                    className='py-3 px-2 border outline-none rounded-sm transition duration-100 focus:ring'
                    onChange={handleChange}
                    value={formData.email}
                />
                <input type='password' placeholder='Password' required name="password"
                    className='py-3 px-2 border outline-none rounded-sm transition duration-100 focus:ring'
                    onChange={handleChange}
                    value={formData.password}
                />
                <button disabled={loading} className='disabled:opacity-50 bg-gradient-to-r from-blue-500 to-slate-400  py-2 px-2 rounded transtion-all ease-in-out duration-200'>{loading ? "Loading..." : "Sign Up"}</button>
                <button disabled={loading} className='disabled:opacity-50 bg-gradient-to-r from-red-500 to-gray-400 py-2 px-2 rounded transtion-all ease-in-out duration-200'>Continue With Google</button>
            </form>
            <div className='text-center'>
                <span className='opacity-70'> Have an account? </span>
                <Link href="/signIn" className='text-blue-600 hover:text-blue-800 cursor-pointer'>Sing In</Link>
            </div>
            {error && <ToastContainer />}
        </div>
    )
}

export default page;