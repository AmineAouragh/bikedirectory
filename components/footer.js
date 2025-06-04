import Head from 'next/head'
import Link from 'next/link'
import { MdOutlineMail } from "react-icons/md"

export function Footer(){
    return (
      <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </Head>
        <footer className='bg-slate-50 w-full py-20 px-5 rounded-2xl'>
            <div className='flex flex-col md:flex-row justify-between mx-auto w-full md:w-2/3 items-start'>
                <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/3 xl:w-1/4 xl:mr-8'>
                    <Link href="https://bikedirectory.vercel.app/">
                        <h3 className='font-semibold font-Inter text-xl'>Bike Wheels Rentals</h3>
                    </Link>
                    <p className='text-md mt-4 text-slate-700 font-Inter'>The ultimate place to find bike rental shops near you or in your travel destination.</p>
                    <p className='text-md mt-4 font-Inter text-slate-700'>© 2025 All rights reserved.</p>
                    <h3 className='font-Inter text-xl font-semibold mt-8'>Support</h3>
                    <Link href="mailto:bikewheelsrentals@gmail.com" className='text-md hover:underline flex flex-row items-center mt-4 text-slate-600 font-Inter'>
                      <MdOutlineMail size={24} className="text-slate-600" />
                      <span className='ml-2'>bikewheelsrentals@gmail.com</span>
                    </Link>
                </div>
                
                <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/3 xl:w-1/4 xl:mr-8'>
                  <h3 className='font-Inter text-xl font-semibold'>Resources</h3>
                  <h4 className='text-md mt-4 text-slate-700 font-Inter hover:underline'><Link href="/blog" target='_blank'>Blog</Link></h4>
                </div>
                <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/3 xl:w-1/4 xl:mr-8'>
                  <h3 className='font-Inter text-xl font-semibold'>Services</h3>
                  <h4 className='text-md mt-4 text-slate-700 font-Inter hover:underline'><Link href="/bike-shops" target='_blank'>Bike Rental Shops</Link></h4>
                </div>
                <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/3 xl:w-1/4'>

                </div>
            </div>
        </footer>
      </>
    )
}