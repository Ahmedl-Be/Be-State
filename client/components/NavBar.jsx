"use client"
import Link from 'next/link'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FiAlignRight } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const SearchForm = () => (
    <form className="md:flex w-1/3 max-w-md relative hidden">
        <input type='text' placeholder="Search..."
            className="bg-gray-white w-full flex-1 rounded borderborder-gray-300
        px-3 py-2 text-gray-800 placeholder-gray-400 outline-none 
        ring-indigo-200 transition duration-100 focus:ring" />
        <button className="absolute bottom-0 right-0 h-full bg-gray-white rounded px-3 ">
            <FaSearch className='text-gray-500' />
        </button>
    </form>
);

const MobileMenu = ({toggleNavbar}) => (
    <nav className="bg-slate-200 shadow-xl absolute w-full h-[100vh]">
        <form className="relative">
            <input type='text' placeholder="Search..." className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-200 transition duration-100 focus:ring" />
            <button className="absolute bottom-0 right-0 h-full border border-l-0 border-gray-300 bg-gray-white rounded px-3 ">
                <FaSearch className='text-gray-500' />
            </button>
        </form>
        <section className='flex flex-col justify-center 
                items-center gap-10 text-xl py-7'>
            <Link href="/" className='hover:text-gray-500' onClick={toggleNavbar}>Home</Link>
            <Link href="/about" className='hover:text-gray-500' onClick={toggleNavbar}>About</Link>
            <Link href="/signIn" className='hover:text-gray-500' onClick={toggleNavbar}>Sign In</Link>
        </section>
    </nav>
);


const NavBar = () => {
    const [isopened, setIsOpened] = useState(false);
    const toggleNavbar = () => {
        setIsOpened(prev => !prev);
    }

    return (
        <nav className='sticky top-0 z-20'>
            <header className='bg-slate-200 shadow-md'>
                <div className="flex justify-between items-center rounded-lg p-4 md:mx-20 mx-7">
                    <Link href="/" className='flex items-center gap-1 md:text-2xl text-lg font-bold'>
                        <MdOutlineRealEstateAgent />
                        <span className='opacity-50'>Be</span>Estate
                    </Link>
                    <SearchForm />
                    <section className='md:flex gap-5 text-lg hidden'>
                        <Link href="/" className='hover:text-gray-500'>Home</Link>
                        <Link href="/about" className='hover:text-gray-500'>About</Link>
                        <Link href="/signIn" className='hover:text-gray-500'>Sign In</Link>
                    </section>
                    {/* Toggle Button */}
                    {!isopened ? 
                    <FiAlignRight className='text-2xl md:hidden cursor-pointer'onClick={toggleNavbar}/> : 
                    <TfiClose className='text-2xl md:hidden cursor-pointer'onClick={toggleNavbar}/>
                    }
                </div>
            </header>
            {isopened && <MobileMenu toggleNavbar={toggleNavbar}/>}
        </nav>
    )
}

export default NavBar;