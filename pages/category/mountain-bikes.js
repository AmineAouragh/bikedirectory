import Image from 'next/image' 
import Link from 'next/link'
import Head from 'next/head'
import { TopNavigation } from '@/components/topnavigation'
import header_image from '@/public/images/mountain-bikes/mountain-bike-header.jpg'
import { CiSearch } from "react-icons/ci"


export default function RegularBikePage(){
    return (
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <title>Mountain Bikes For Rent Near Me | BikeDirectory</title>
          </Head>
          <div className='px-2 flex flex-col justify-center items-center w-full h-full'>
            <TopNavigation />
            <header className="relative mt-10 md:mt-20 overflow-hidden h-[280px] md:h-[420px] bg-green-800 rounded-xl w-full xs:w-3/4 md:w-2/3 mx-auto flex flex-col justify-center items-center">
              <Image
                src={header_image}
                alt=''
                objectFit='cover'
                layout='fill'
                quality={100}
                className='rounded-xl'
              />
              <div className='absolute inset-0 bg-opacity-40 bg-black'></div>
              <div className='px-2 bg-black bg-opacity-30 absolute inset-0 flex flex-col items-center justify-center'>
                <h1 className='text-4xl xl:text-6xl text-center text-white font-bold mb-6 md:mb-8'>Mountain Bikes For Rent Near Me</h1>
                <p className='text-white text-center w-full xs:w-3/4 md:w-2/3 mb-6 md:mb-8 text-md md:text-xl'>Built for adventure—tackle rugged trails, steep hills, and off-road terrain with ease.</p>
                <div tabIndex={0} className='flex flex-row items-center justify-start text-center rounded-full bg-white pl-4 md:pl-8 pr-2 md:pr-4 py-1 md:py-3 w-full sm:w-3/4 md:w-2/3 focus:ring-2 focus:ring-offset-4 focus:ring-offset-slate-700 focus:ring-green-500'>
                  <CiSearch className='text-slate-400 font-semibold' size={24} />
                  <input type='text' id='search' name='search' placeholder='Where do you need a mountain bike?' className='ml-4 w-full bg-white focus:outline-none text-lg placeholder-gray-500' />
                  <button type='button' className='bg-green-700 rounded-full p-3 hover:bg-green-800'>
                    <CiSearch className='text-white font-semibold' size={24} />
                  </button>
                </div>
              </div>
            </header>
          </div>
        </>
    )
}