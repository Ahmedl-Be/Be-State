import React from 'react'
import { FcAbout } from "react-icons/fc";
import { MdOutlineRoundaboutRight } from "react-icons/md";

const ParagraphSection = ({ text }) =>
    <div className='bg-gray-100 p-5 rounded'>
        <MdOutlineRoundaboutRight />
        <p className='opacity-85 italic'>{text}</p>
    </div>


const page = () => {
    return (
        <section className='md:p-20 p-10 flex flex-col gap-7'>
            <div className='flex items-center gap-2'>
                <FcAbout className='text-2xl'/>
                <header className='text-2xl md:text-3xl font-bold opacity-80'>About BeEstate</header>
            </div>
            <ParagraphSection text={"Be Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible."} />
            <ParagraphSection text={"Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way."} />
            <ParagraphSection text={" Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients."} />
        </section>
    )
}

export default page;