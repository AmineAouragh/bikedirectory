import Image from 'next/image' 
import Link from 'next/link'
import Head from 'next/head'
import { TopNavigation } from '@/components/topnavigation'
import header_image from '@/public/images/mountain-bikes/mountain-bike-header.jpg'
import { CiSearch } from "react-icons/ci"
import { useState } from 'react'
import { IoTimeOutline } from "react-icons/io5"
import { IoLocationOutline } from "react-icons/io5"
import { MdOutlineDirectionsBike } from "react-icons/md" 


export default function MountainBikePage(){

  const [ searchQuery, setSearchQuery ] = useState('')
    const [ bikeShops, setBikeShops ] = useState([])
    const [ searchClicked, setSearchClicked ] = useState(false)
    const [ loading, setLoading ] = useState(false) 

    async function handleSearch(q){

      setSearchClicked(true) 
      setLoading(true)

      try {
          const response = await fetch('/api/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ searchQuery: q })
          })
  
          if (response.ok){
            const data = await response.json() 
            console.log(data)
            setBikeShops(data.bike_shops)
          } else {
            alert("Something went wrong.")
          }
      } catch (error) {
          console.error("Error while trying to fetch bike shops matching the search query")
      } finally {
        setLoading(false)
      }

    }
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
            <section className='separator py-2 md:py-6'>
                        
                        </section>
                        <section className='mb-20 flex flex-col md:flex-row w-full md:w-2/3 items-start justify-between'>
                          <aside className='rounded-xl hidden p-3 w-full md:w-1/4'>
                        
                          </aside>
                          {
                            (searchClicked && !loading && bikeShops.length == 0) &&
                            <div className='flex flex-col justify-center items-center mx-auto'>
                              <p className='text-slate-800 text-xl font-bold mb-2'>No bike shops found matching your search.</p> 
                              <p>We are expanding to more locations soon.</p>
                              <p>Suggest a location you&apos;d like us to add!</p>
                              <div tabIndex={0} className='my-4 relative border border-slate-300 flex flex-row items-center justify-between rounded-full px-2 py-2 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-white'>
                                <input id='location_suggestion' name='location_suggestion' type='text' placeholder='Enter a city name...' className='mr-4 rounded-full outline-none px-6 py-1' /> 
                                <button aria-label='Submit location suggestion' type='button' className='rounded-full px-4 py-2 bg-green-700 hover:bg-green-800 font-bold text-white'>Suggest</button>
                              </div>
                              <p>Thank you for your patience!</p>
                            </div> 
                          }
                          <main className={`${searchClicked && bikeShops.length > 0 ? "" : "hidden"} mt-6 md:mt-0 flex flex-col w-full md:w-2/3 border border-slate-200 rounded-xl`}>
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