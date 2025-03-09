import Image from 'next/image' 
import Link from 'next/link'
import Head from 'next/head'
import { TopNavigation } from '@/components/topnavigation'

export default function RegularBikePage(){
    return (
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <title>Regular Bikes For Rent Near Me | BikeDirectory</title>
          </Head>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <TopNavigation />
            <header className="mt-20 bg-green-800 rounded-xl p-4 border border-slate-300 py-32 w-2/3 mx-auto flex flex-col justify-center items-center">
              <h1 className="font-bold text-4xl text-white text-center mb-6">Regular Bikes For Rent Near Me</h1>
            </header>
          </div>
        </>
    )
}