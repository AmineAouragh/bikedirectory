import Head from 'next/head' 
import Link from 'next/link' 
import Image from 'next/image'
import { TopNavigation } from '@/components/topnavigation'
import bike_shop from '@/public/images/bike-shop.jpg'
import { useEffect, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5"
import { IoTimeOutline } from "react-icons/io5"
import { MdOutlineDirectionsBike } from "react-icons/md"
import { useRouter } from 'next/router'
import { MdVerified } from "react-icons/md"
import { Footer } from '@/components/footer'
import { IoGridOutline } from "react-icons/io5";
import { LuLayoutList } from "react-icons/lu";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Checkbox } from "@/components/ui/checkbox"

export default function BrowsePage(){

    const [ bikeShops, setBikeShops ] = useState([])

    const [ bikeTypes, setBikeTypes ] = useState([])
    const [ view, setView ] = useState('list') 

    const router = useRouter()

    async function fetchBikeShops(){
        try {
            const response = await fetch('/api/getShops', {
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

    function handleBikeTypeSelection(event){
        const { value, checked } = event.target

        setBikeTypes(prev => 
            checked 
            ? [...prev, value]
            : prev.filter(v => v !== value)
        )

        console.log(bikeTypes)
    }

    useEffect(() => {
        fetchBikeShops()
    }, [])

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <title>Bikes for Rent Near Me | Bike Wheels Rentals</title>
            </Head>
            <div className='px-2 flex flex-col w-full h-full justify-center items-center'>
                <TopNavigation />
                <header className="relative mt-10 md:mt-20 overflow-hidden h-[260px] md:h-[420px] bg-green-800 rounded-xl w-full md:w-2/3 mx-auto flex flex-col justify-center items-center">
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
                        <h1 className='leading-8 text-3xl md:text-4xl w-2/3 xl:text-6xl text-center text-white font-bold font-Inter mb-8'>Browse Bike Rental Shops Worldwide</h1>
                        <p className='text-white w-2/3 font-Inter text-center text-md lg:text-xl'>
                          Find bike shops in your area or destination of choice with a variety of bikes to fit your needs.
                        </p>
                        <input type='text' id='search' name='search' className='hidden w-2/3 text-lg rounded-full px-6 py-4 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500' placeholder='Search shops' />
                    </div>
                </header>
                <section className='separator py-2 md:py-6'>
            
                </section>
                <section className='mb-20 flex flex-col lg:flex-row w-full lg:w-2/3 items-start justify-between'>
                  <aside className='rounded-xl py-6 px-8 w-full flex flex-col border border-slate-100 lg:w-1/4 md:mr-6'>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold text-slate-800 font-Inter text-xl mb-4'>Bike types:</h3>
                        <div className='flex flex-row items-center mb-3'>
                            <input onChange={handleBikeTypeSelection} value='City Bike' type='checkbox' id='city_bike_option' name='bike_type' />
                            <label htmlFor='city_bike_option' className='cursor-pointer hover:text-black ml-2 font-Inter text-slate-700'>City Bike</label>
                        </div>
                        <div className='flex flex-row items-center mb-3'>
                            <input onChange={handleBikeTypeSelection} value="E-Bike" type='checkbox' id='ebike_option' name='bike_type' />
                            <label htmlFor='ebike_option' className='cursor-pointer hover:text-black ml-2 font-Inter text-slate-700'>E-Bike</label>
                        </div>
                        <div className='flex flex-row items-center mb-3'>
                            <input onChange={handleBikeTypeSelection} value="Mountain Bike" type='checkbox' id='mountain_bike_option' name='bike_type' />
                            <label htmlFor='mountain_bike_option' className='cursor-pointer hover:text-black ml-2 font-Inter text-slate-700'>Mountain Bike</label>
                        </div>
                        <div className='flex flex-row items-center mb-3'>
                            <input onChange={handleBikeTypeSelection} value="Tandem Bike" type='checkbox' id='tandem_bike_option' name='bike_type' />
                            <label htmlFor='tandem_bike_option' className='cursor-pointer hover:text-black ml-2 font-Inter text-slate-700'>Tandem Bike</label>
                        </div>
                        <div className='flex flex-row items-center'>
                            <input onChange={handleBikeTypeSelection} value="Cargo Bike" type='checkbox' id='cargo_bike_option' name='bike_type' />
                            <label htmlFor='cargo_bike_option' className='cursor-pointer hover:text-black ml-2 font-Inter text-slate-700'>Cargo Bike</label>
                        </div>
                    </div>
                  </aside>
                  <main className='mt-6 lg:mt-0 flex flex-col w-full lg:w-3/4 border border-slate-100 rounded-xl'>
                    <header className='flex flex-row justify-between items-center p-6 border-b border-slate-100'>
                      <p className='font-semibold text-slate-800 font-Inter'>Found {bikeShops.length} bike rental shops.</p>
                      <div className='hidden lg:flex py-1 px-2 flex flex-row items-center rounded-full border border-slate-200'>
                        <button type='button' onClick={() => setView('list')} className={`${view == "list" ? "bg-slate-50" : ""} p-2 hover:bg-slate-50 rounded-full mr-1`}>
                            <LuLayoutList size={22} className='text-slate-500' />
                        </button>
                        <button type='button' onClick={() => setView('grid')} className={`${view == "grid" ? "bg-slate-50" : ""} p-2 hover:bg-slate-50 rounded-full`}>
                            <IoGridOutline size={22} className='text-slate-500' />
                        </button>
                      </div>
                    </header>
                    <div id='shops_list' className={`${view == "list" ? "flex flex-col" : "grid grid-cols-3 gap-2"}`}>
                     {
                        
                        bikeShops.map( 
                            (bike_shop, index) => (
                              <Link href={`/bike-shops/${bike_shop.shop_name.toLowerCase().split(" ").join("-")}`}>
                                <div 
                                  tabIndex={0} 
                                  className={`cursor-pointer group border-b border-slate-100 rounded-md flex flex-col ${view == "grid" ? "lg:flex-col lg:items-stretch p-3" : "p-6 lg:flex-row"} justify-between items-start`}>
                                    {
                                        bike_shop.images.length >= 1 &&
                                        bike_shop.images ? (
                                            <Image 
                                                src={bike_shop.images[0].image_url}
                                                alt=''
                                                key={index}
                                                quality={100}
                                                height={200}
                                                width={340}
                                                objectFit='cover'
                                                className={`w-full ${view == "grid" ? "h-[240px] lg:w-full" : "min-h[270px] max-h-[300px] lg:w-1/2 lg:mb-0 lg:mr-6"} mb-6 border border-slate-100 rounded-xl object-cover object-center`}
                                            />
                                               
                                        )
                                        :
                                        <div className={`w-full ${view == "grid" ? "h-[240px] lg:w-full" : "h-[270px] lg:w-1/2 lg:mb-0 lg:mr-6"} mb-6 rounded-xl bg-slate-50`}>

                                        </div>
                                        
                                    }
                                  <div key={index} className={`w-full ${view == "grid" ? "lg:w-full" : "lg:w-1/2"} h-full flex flex-col justify-center`}>
                                    {
                                        bike_shop.shop_logo 
                                        && 
                                        <Image
                                          src={bike_shop.shop_logo} 
                                          alt=""
                                          objectFit="center"
                                          quality={100}
                                          height={50}
                                          width={50}
                                          className="rounded-md object-cover mb-3"
                                        />
                                    }
                                    <h4 className='text-2xl flex flex-row items-center font-Inter text-slate-800 group-hover:text-green-600 font-bold mb-4'>
                                        <span>{bike_shop.shop_name}</span>
                                        {
                                            bike_shop.verified && <MdVerified size={24} className='ml-1 text-green-600' />
                                        }
                                    </h4>
                                    <div className='flex flex-row items-center mb-2'>
                                        <IoLocationOutline size={16} className='text-gray-600' />
                                        <span className='ml-1 font-semibold text-gray-600 text-md'>{bike_shop.shop_street_address}</span>
                                    </div>
                                    <div className='flex flex-row flex-wrap items-center mb-2'>
                                    {
                                        bike_shop.bike_types && (
                                            bike_shop.bike_types.map(
                                                (bike_type, index) => (
                                                    <div key={index} className='flex flex-row items-center rounded-2xl mb-1 bg-slate-50 group-hover:border-slate-200 border border-slate-100 text-slate-600 px-3 py-1 mr-2'>
                                                        <MdOutlineDirectionsBike />
                                                        <span className='ml-2 font-Inter text-sm'>{bike_type.bike_type}</span>
                                                    </div>
                                                )
                                            )
                                        )
                                    }
                                    </div>
                                    <p className={`hidden ${view == "grid" ? "lg:hidden" : "lg:flex"} text-gray-600 font-Inter group-hover:text-green-700 text-sm`}>{bike_shop.shop_description && bike_shop.shop_description.slice(0, 150).concat('...')}</p>
                                  </div>
                                </div>
                              </Link>
                            )
                        )
                     }
                    </div>
                  </main>
                </section>
                <Footer />
            </div>
        </>
    )
}