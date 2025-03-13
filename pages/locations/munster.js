import Image from 'next/image' 
import Link from 'next/link'
import Head from 'next/head'
import { TopNavigation } from '@/components/topnavigation'
import header_image from '@/public/images/locations/munster/munster-header.jpg'

export default function CityPage(){
    return (
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <title>Rent a Bike in Munster | BikeDirectory</title>
          </Head>
          <div className='px-2 flex flex-col justify-center items-center w-full h-full'>
            <TopNavigation />
            <header className="relative mt-10 md:mt-20 overflow-hidden h-[200px] md:h-[420px] bg-green-800 rounded-xl w-full md:w-2/3 mx-auto flex flex-col justify-center items-center">
              <Image
                src={header_image}
                alt=''
                objectFit='cover'
                layout='fill'
                quality={100}
                className='rounded-xl'
              />
              <div className='absolute inset-0 bg-opacity-40 bg-black'></div>
              <div className='bg-black bg-opacity-30 absolute inset-0 flex flex-col items-center justify-center'>
                <h1 className='text-3xl md:text-4xl xl:text-6xl text-center text-white font-bold'>Bikes For Rent in Munster</h1>
              </div>
            </header>
            <section className='separator py-2 md:py-6'>
            
            </section>
            <section className='flex flex-col md:flex-row w-full md:w-2/3 items-start justify-between'>
                <aside className='rounded-xl p-3 border border-slate-200 w-full md:w-1/4'>
                <p className='text-lg text-gray-700'>
                Often called Germany&apos;s cycling capital, Münster is built for biking. 
                Whether you're commuting or sightseeing, enjoy the city's vast network of bike lanes and its famous “Promenade.”
                </p>
              </aside>
              <main className='mt-6 md:mt-0 flex flex-col p-4 w-full md:w-2/3 border border-slate-200 rounded-xl'>
            
              </main>
            </section>
          </div>
        </>
    )
}