import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Image from 'next/image' 
import Link from 'next/link'
import Head from 'next/head' 
import { TopNavigation } from '@/components/topnavigation'
import { IoLocationOutline, IoMail } from "react-icons/io5"
import { IoTimeOutline } from "react-icons/io5"
import { MdOutlineDirectionsBike } from "react-icons/md"
import { IoCallOutline } from "react-icons/io5"
import { MdOutlineMail } from "react-icons/md"
import { CiGlobe } from "react-icons/ci"
import { FaArrowRightLong } from "react-icons/fa6"

export default function BikeShopPage(){

    const router = useRouter() 

    const shop_name = router.query.shop_name

    const formattedShopName = shop_name ? shop_name.split("-").join(" ") : ""


    const [ bikeShop, setBikeShop ] = useState([])

    function capitalizeStr(str){
        const splitStr = str.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++){
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
        }
    
        return splitStr.join(" ")
    }

    const transformedShopName = capitalizeStr(formattedShopName)

    console.log("Shop name valued passed through router: ", shop_name)
    console.log("Transformed Shop Name: ", transformedShopName)

    async function fetchBikeShop(){

        try {

            const response = await fetch(`/api/getShopByName?shop_name=${transformedShopName}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
    
            if (response.ok){
                const data = await response.json()
                setBikeShop(data.bike_shops)
                console.log("Bike shop fetched successfully.")
                console.log(data.bike_shops)
            } else {
                console.log("Error while fetching bike shop.")
            }
        } catch (error){
            console.error("Error while fetching bike shop: ", error)
        }
    }

    useEffect(() => {
        if (shop_name)
            fetchBikeShop()
    }, [shop_name])

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <title>{bikeShop.length > 0 && bikeShop[0].shop_name} - {bikeShop.length > 0 && `Bikes For Rent in ${bikeShop[0].shop_city}`} | BikeDirectory</title>
            </Head>
            <div className='px-2 flex flex-col w-full h-full justify-center items-center'>
                <TopNavigation />
                <hr className="bg-slate-100 h-0.5 w-full my-4" />
                <header className='mt-6 h-[320px] md:mt-12 mb-12 py-4 w-full rounded-md flex flex-row justify-between md:w-2/3 mx-auto'>
                  {
                    bikeShop.length > 0 && bikeShop[0].images?.length > 0 && (
                        <div className='flex flex-row justify-between w-full gap-3'>
                          {bikeShop[0].images.slice(0, 3).map((image, index) => (
                            <div className='group cursor-pointer border border-slate-200 rounded-xl relative w-1/3 overflow-hidden'>
                              <Image
                              key={index} 
                              src={image.image_url}
                              quality={100}
                             
                              layout='fill'
                              className='object-cover'
                              objectFit='cover' 
                              alt='' 
                              />
                              <div className='group-hover:bg-opacity-20 group-hover:bg-black absolute inset-0'></div>
                            </div>
                          ))} 
                        </div>          
                    )  
                  }       
                </header>
                <div className='w-full md:w-2/3 mx-auto mt-6 flex flex-row items-start justify-between'>
                  <div className='flex flex-col'>
                  <h2 className='font-bold text-4xl mb-6'>{bikeShop.length > 0 && bikeShop[0].shop_name}</h2>
                  <div className='text-lg flex flex-row items-center text-gray-600'>
                    <div className="flex flex-row items-center mr-6">
                    <IoLocationOutline size={20} className='text-gray-600' />
                    <span className='ml-2'>{bikeShop.length > 0 && bikeShop[0].shop_street_address}, {bikeShop.length > 0 && bikeShop[0].shop_city}, {bikeShop.length > 0 && bikeShop[0].shop_country}</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <IoCallOutline />
                        <span className="ml-1">{bikeShop.length > 0 && bikeShop[0].phone_number}</span>
                    </div>
                  </div>
                  </div>
                  <div className='flex flex-row items-center'>
                    <Link href={`${bikeShop.length > 0 && bikeShop[0].shop_website}/?ref=2wheelsdirectory`} target='_blank' className='flex flex-row items-center hover:bg-green-800 bg-green-700 rounded-full text-white font-bold px-8 text-lg py-2 mr-3'>
                      <CiGlobe />
                      <span className="ml-2">Visit Website</span>
                    </Link>
                    <Link href={`tel:+${bikeShop.length > 0 && bikeShop[0].phone_number}`} className='group hover:bg-green-50 hover:border-green-600 flex flex-row items-center px-6 py-2 rounded-full border border-slate-200 shadow-sm text-lg font-bold mr-3'>
                        <IoCallOutline size={24} className='group-hover:text-green-800' />
                        <span className='ml-2 group-hover:text-green-800'>Call Shop</span>
                    </Link>
                    <Link href={`mailto:${bikeShop.length > 0 && bikeShop[0].email}`} className='group hover:bg-green-50 hover:border-green-600 flex flex-row items-center px-6 py-2 rounded-full border border-slate-200 shadow-sm text-lg font-bold'>
                        <MdOutlineMail size={24} className='group-hover:text-green-800' />
                        <span className='ml-2 group-hover:text-green-800'>Email Shop</span>
                    </Link>
                  </div>
                </div>
                <hr className='w-full md:w-2/3 bg-gray-100 h-0.5 my-8' />
                <div className='w-full mb-20 md:w-2/3 flex flex-row items-start justify-between'>
                 <div className='flex flex-col'>
                  <div className='flex flex-col mb-6'>
                    <h3 className='font-bold text-2xl mb-6'>About</h3>
                    <p className='text-gray-700 text-lg'>{bikeShop.length > 0 && bikeShop[0].shop_description}</p>
                  </div>
                  <div className='flex flex-col mb-6'>
                    <h3 className='font-bold text-2xl mb-6'>Bike Types Available</h3>
                    <div className="grid grid-cols-3 gap-4">
                    {
                        bikeShop.length > 0 && (
                            bikeShop[0].bike_types.map(
                                (bike_type, index) => (
                                    <div key={index} className='flex flex-row items-center rounded-2xl mb-2 border border-green-600 px-8 py-6 mr-2'>
                                        <MdOutlineDirectionsBike className="text-green-800" />
                                        <span className='ml-4 text-md font-semibold'>{bike_type.bike_type}</span>
                                    </div>
                                )
                            )
                        )
                    }
                    </div>
                  </div>
                  <div className='flex flex-col mb-6'>
                    <h3 className='font-bold text-2xl mb-6'>Bike Rental Durations</h3>
                    <div className="grid grid-cols-3 gap-4">
                    {
                        bikeShop.length > 0 && (
                            bikeShop[0].bike_rental_options.map(
                                (rental_option, index) => (
                                    <div key={index} className='group flex flex-row items-center rounded-2xl mb-2 border-green-600 border px-8 py-6 mr-2'>
                                        <IoTimeOutline className="text-green-800" />
                                        <span className='ml-4 text-md font-semibold'>{rental_option.rental_duration}</span>
                                    </div>
                                )
                            )
                        )
                    }
                    </div>
                  </div>
                
                 </div>
                 <div className="ml-8 border border-slate-200 px-4 py-6 rounded-2xl w-2/5 flex flex-col">
                    <h3 className="text-xl font-bold mb-4">Shop Hours:</h3>
                    {
                        bikeShop.length > 0 && (
                            bikeShop[0].bike_shop_hours.map(
                                (day, index) => (
                                    <div key={index} className='group flex flex-row items-center justify-between mb-2'>
                                        <span className='text-md text-slate-700'>{day.day}</span>
                                        <span className='text-lg font-semibold'>{day.opening_hour} - {day.closing_hour}</span>
                                    </div>
                                )
                            )
                        )
                    }
                 </div>
                </div>
                {
                    bikeShop.length > 0 && bikeShop[0].booking_page_url && (
                        <div className='flex flex-row bg-green-100 items-center justify-between border border-green-200 rounded-2xl py-10 px-12 mx-auto w-full md:w-2/3 mb-20'>
                          <p className='text-2xl font-semibold'>Book your bike now directly with {bikeShop.length > 0 && bikeShop[0].shop_name}!</p>
                          <Link href={`${bikeShop[0].booking_page_url}?ref=2wheelsdirectory`} target='_blank' className='flex flex-row items-center rounded-2xl bg-green-600 px-8 py-4'>
                            <FaArrowRightLong className='text-white' size={28} />
                            <span className='ml-2 text-2xl mb-1 text-white font-bold'>
                              Go To Booking Page
                            </span>
                          </Link>
                        </div>
                    )
                }
                <footer className='bg-slate-50 w-full py-20'>
                    <div className='flex flex-row mx-auto w-full md:w-2/3 items-start'>
                        <div className='w-1/4'>
                            <Link href="https://bikedirectory.vercel.app/">
                              <h3 className='font-semibold font-Inter text-xl'>BikeDirectory</h3>
                            </Link>
                            <p className='text-md mt-4 text-slate-700 font-Inter'>The ultimate place to find bike rental shops near you or in your travel destination.</p>
                            <p className='text-md mt-4 font-Inter text-slate-700'>© 2025 All rights reserved.</p>
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}