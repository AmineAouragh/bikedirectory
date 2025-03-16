import Head from 'next/head' 
import Link from 'next/link' 
import Image from 'next/image'
import { TopNavigation } from '@/components/topnavigation'
import bike_shop from '@/public/images/bike-shop.jpg'
import { useEffect, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5"
import { IoTimeOutline } from "react-icons/io5"
import { MdOutlineDirectionsBike } from "react-icons/md"


export default function BrowsePage(){

    const [ bikeShops, setBikeShops ] = useState([])

    async function fetchBikeShops(){
        try {
            const response = await fetch('https://bikedirectory.vercel.app/api/getShops', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
    
            if (response.ok){
                const data = await response.json()
                setBikeShops(data.bike_shops)
                console.log("Bike shops fetched successfully.")
                console.log(data.bike_shops)
            } else {
                console.log("Error while fetching bike shops.")
            }
        } catch (error){
            console.error("Error while fetching bike shops: ", error)
        }
    }

    useEffect(() => {
        fetchBikeShops()
    }, [])

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <title>Bikes for Rent Near Me | BikeDirectory</title>
            </Head>
            <div className='px-2 flex flex-col w-full h-full justify-center items-center'>
                <TopNavigation />
                <header className="relative mt-10 md:mt-20 overflow-hidden h-[200px] md:h-[420px] bg-green-800 rounded-xl w-full md:w-2/3 mx-auto flex flex-col justify-center items-center">
                    <Image
                        src={bike_shop}
                        alt=''
                        objectFit='cover'
                        layout='fill'
                        quality={100}
                        className='rounded-xl object-cover object-center'
                    />
                    <div className='absolute inset-0 bg-opacity-40 bg-black'></div>
                    <div className='bg-black bg-opacity-30 absolute inset-0 flex flex-col items-center justify-center'>
                        <h1 className='leading-8 text-3xl md:text-4xl w-2/3 xl:text-6xl text-center text-white font-bold mb-8'>Browse Bike Rental Shops Worldwide</h1>
                        <p className='text-white w-2/3 text-center text-md lg:text-xl'>
                          Find bike rental shops in your area or destination of choice with a variety of bike types and rental options to fit your needs.
                        </p>
                    </div>
                </header>
                <section className='separator py-2 md:py-6'>
            
                </section>
                <section className='mb-20 flex flex-col md:flex-row w-full md:w-2/3 items-start justify-between'>
                  <aside className='rounded-xl p-3 w-full md:w-1/4'>

                  </aside>
                  <main className='mt-6 md:mt-0 flex flex-col w-full md:w-2/3 border border-slate-200 rounded-xl'>
                    <header className='flex flex-row justify-between items-center p-6 border-b border-slate-200'>
                      <p className='font-bold'>Found {bikeShops.length} bike rental shops.</p>
                    </header>
                    <div id='shops_list' className='flex flex-col'>
                     {
                        bikeShops.map( 
                            (bike_shop, index) => (
                                <div className='p-6 border-b border-slate-200 flex flex-row items-stretch'>
                                  <div id='image' className='rounded-xl w-1/3 bg-slate-100 py-4 mr-8'></div>
                                  <div key={index} className='w-2/3'>
                                    <h4 className='text-lg font-bold mb-2'>{bike_shop.shop_name}</h4>
                                    <div className='flex flex-row items-center text-gray-700 mb-4'>
                                        <IoLocationOutline size={16} />
                                        <span className='ml-1 text-gray-600 text-md'>{bike_shop.shop_street_address}, {bike_shop.shop_city}, {bike_shop.shop_country}</span>
                                    </div>
                                    <div className='flex flex-row flex-wrap items-center mb-2'>
                                    {
                                        bike_shop.bike_types && (
                                            bike_shop.bike_types.map(
                                                (bike_type, index) => (
                                                    <div key={index} className='flex flex-row items-center rounded-2xl mb-2 bg-slate-50 border border-slate-100 text-slate-500 font-semibold px-3 py-1 mr-2'>
                                                        <MdOutlineDirectionsBike />
                                                        <span className='ml-2 text-md'>{bike_type.bike_type}</span>
                                                    </div>
                                                )
                                            )
                                        )
                                    }
                                    </div>
                                    <div className='flex flex-row items-center mb-4'>
                                    {
                                        bike_shop.bike_rental_options && (
                                            bike_shop.bike_rental_options.map(
                                                (rental_option, index) => (
                                                    <div key={index} className='flex flex-row mb-1 items-center rounded-2xl bg-slate-50 border border-slate-100 text-slate-500 font-semibold px-3 py-1 mr-2'>
                                                        <IoTimeOutline />
                                                        <span className='ml-2 text-md'>{rental_option.rental_duration}</span>
                                                    </div>
                                                )
                                            )
                                        )
                                    }
                                    </div>
                                    <p className='text-gray-600 text-md font-semibold'>{bike_shop.shop_description}</p>
                                  </div>
                                </div>
                            )
                        )
                     }
                    </div>
                  </main>
                </section>
                
            </div>
        </>
    )
}