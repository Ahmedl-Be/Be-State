import React from 'react'
import Image from 'next/image';
import testImg from "@/public/test.jpeg";
import { MdOutlineLocationOn } from "react-icons/md";

const Card = () => {
    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, cupiditate!"
    return (
        <main className=' m-10 rounded shadow overflow-hidden bg-white cursor-pointer border'>
            <Image src={testImg} alt="photo" className ='hover:scale-105 transition-all  duration-200 '/>
            <div className='flex flex-col gap-3 p-5'>
                <h1 className='text-xl'>Modern Loft With Stunning View</h1>
                <div className='flex items-start gap-1'>
                    <MdOutlineLocationOn className='text-blue-400'/>
                    <p className='text-sm opacity-75'>101 Serene Shore Road, Willow Lake</p>
                </div>
                <p className='text-sm opacity-75'>{desc.length > 100 ? desc.slice(0,70):desc}...</p>
                <span className='font-bold text-lg'>$733,00</span>
                <div className='flex gap-5'>
                    <span>2 Bed</span>
                    <span>4 Baths</span>
                </div>
            </div>
        </main>
    )
}

export default Card;