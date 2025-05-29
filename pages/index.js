import Image from "next/image"
import Link from 'next/link' 
import Head from 'next/head'
import bike from '@/public/images/regular-bike.jpg'
import ebike from '@/public/images/e-bike.jpg'
import cargo_bike from '@/public/images/cargo-bikes/cargobike.jpg'
import mountain_bike from '@/public/images/mountain-bikes/mountain-bike.jpg'
import tandem_bike from '@/public/images/tandem-bikes/tandem-bike.png'
import utrecht from '@/public/images/locations/utrecht/utrecht.jpeg'
import antwerp from '@/public/images/locations/antwerp/antwerp.jpg'
import munster from '@/public/images/locations/munster/munster-3.jpg'
import copenhagen from '@/public/images/locations/copenhagen/copenhagen.jpg'
import amsterdam from '@/public/images/locations/amsterdam/amsterdam.jpg'
import malmo from '@/public/images/locations/malmo/malmo.jpg'
import hangzhou from '@/public/images/locations/hangzhou/hangzhou.jpg'
import bern from '@/public/images/locations/bern/bern.jpg'
import netherlands from '@/public/images/flags/netherlands.png'
import germany from '@/public/images/flags/germany.png'
import belgium from '@/public/images/flags/belgium.png'
import denmark from '@/public/images/flags/denmark.png'
import sweden from '@/public/images/flags/sweden.png'
import china from '@/public/images/flags/china.png'
import switzerland from '@/public/images/flags/switzerland.png'
import { TopNavigation } from "@/components/topnavigation"
import main_header from '@/public/images/main-header.png'
import { CiSearch } from "react-icons/ci"
import { IoLocationOutline } from "react-icons/io5"
import { MdOutlineDirectionsBike } from "react-icons/md"
import { MdVerified } from "react-icons/md"

import { useState, useEffect } from 'react'

export default function Home() {

  const [ bikeShops, setBikeShops ] = useState([])

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
  
  useEffect(() => {
    fetchBikeShops()
  }, [])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <title>2Wheels | Find City Bikes, E-Bikes or Mountain Bikes</title>
      </Head>
      <div className="px-2 flex flex-col justify-center items-center h-full w-full">
        <TopNavigation />
        <header className="relative mt-10 md:mt-20 overflow-hidden h-[280px] md:h-[420px] bg-green-800 rounded-xl w-full xs:w-3/4 md:w-2/3 mx-auto flex flex-col justify-center items-center">
          <Image
            src={main_header}
            alt=''
            objectFit='cover'
            layout='fill'
            quality={100}
            className='rounded-xl'
          />
          <div className='absolute inset-0 bg-opacity-40 bg-black'></div>
          <div className='px-2 bg-black bg-opacity-30 absolute inset-0 flex flex-col items-center justify-center'>
            <h1 className='lg:text-6xl text-3xl md:text-4xl text-center text-white font-bold mb-8'>2Wheels Directory</h1>
            <p className='text-white w-full xs:w-3/4 md:w-2/3 mb-6 md:mb-8 text-center text-md lg:text-xl'>Find & Rent City Bikes, E-Bikes or Mountain Bikes wherever you travel and explore the city or nature on two wheels 🚴🔥</p>
            <div tabIndex={0} className='flex flex-row items-center justify-start text-center rounded-full bg-white pl-4 md:pl-8 pr-2 md:pr-4 py-1 md:py-3 w-full sm:w-3/4 md:w-2/3 focus:ring-2 focus:ring-offset-4 focus:ring-offset-slate-700 focus:ring-green-500'>
              <CiSearch className='text-slate-400 font-semibold' size={24} />
              <input type='text' id='search' name='search' placeholder='What are you looking for?' className='ml-4 w-full bg-white focus:outline-none text-lg placeholder-gray-500' />
              <button type='button' className='bg-green-700 rounded-full p-3 hover:bg-green-800'>
                <CiSearch className='text-white font-semibold' size={24} /> 
              </button>
            </div>
          </div>
        </header>
        <section className="separator py-8 md:py-14">

        </section>
        <section id="bike_categories" className="w-full lg:w-2/3 mx-auto">
          <h2 className="md:text-4xl font-Inter text-3xl font-bold mb-6">Browse Bikes by Category</h2>
          <p className="text-gray-700 font-Inter text-xl">Find the perfect ride—whether it's a regular bike, e-bike, cargo bike, or mountain bike.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 mt-6 md:mt-14">
            <Link href="/category/city-bikes">
              <div className="" id="city-bikes">
                <div className="relative ">
                  <Image 
                    src={bike}
                    alt="Bike"
                    height={100}
                    width={400} 
                    className="rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-Inter font-bold mt-4">City Bikes</h3>
                <p className="text-md text-gray-700 mt-2">Rent a reliable and comfortable bike for any ride around the city.</p>
              </div>
            </Link>
            <Link href="/category/e-bikes">
              <div id="e-bikes">
                <div className="relative">
                  <Image
                    src={ebike}
                    alt="Bike"
                    height={100}
                    width={400} 
                    className="rounded-xl"
                  />                      
                  <h3 className="text-xl font-bold mt-4">Ebikes</h3>
                  <p className="text-md text-gray-700 mt-2">Go farther with less effort—explore the city with electric power ⚡.</p>
                </div>
              </div>
            </Link>
            <Link href="/category/cargo-bikes">
              <div id="cargo-bikes">
                <Image
                  src={cargo_bike}
                  alt="Bike"
                  height={100}
                  width={400} 
                  className="rounded-xl"
                />
                <h3 className="text-xl font-bold mt-4">Cargo Bikes</h3>
                <p className="text-md text-gray-700 mt-2">Carry more, ride easier—perfect for kids, groceries, and heavy loads.</p>
              </div>
            </Link>
            <Link href="/category/mountain-bikes">
              <div id="mountain-bikes">
                <div className="relative">
                  <Image
                    src={mountain_bike}
                    alt="Bike"
                    height={100}
                    width={400} 
                    className="rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold mt-4">Mountain Bikes</h3>
                <p className="text-md text-gray-700 mt-2">Conquer rough trails and explore the outdoors with confidence.</p>
              </div>
            </Link>
            <Link href="/category/tandem-bikes">
              <div id="tandem-bikes">
                <Image
                  src={tandem_bike}
                  alt="Picture of a tandem bike with two seats"
                  height={100}
                  width={400} 
                  className="rounded-xl"
                />
                <h3 className="text-xl font-bold mt-4">Tandem Bikes</h3>
                <p className="text-md text-gray-700 mt-2">Double the fun—ride together and share the adventure.</p>
              </div>
            </Link>
          </div>
        </section>
        <section className="separator py-14">

        </section>
        {
          bikeShops.length > 0
          && (
            <>
            <section id="featured_bike_shops" className="w-full lg:w-2/3 mx-auto">
              <h2 className="font-bold text-3xl md:text-4xl font-Inter mb-6">Featured Bike Rental Shops</h2>
              <p className="text-gray-700 font-Inter text-xl">Rent a bike from our featured bike rental shops offering a wide selection of bikes</p>
              <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 md:mt-14">
                {
                  bikeShops.map((bike_shop, index) => (
                    <Link className="group" key={index} href={`/bike-shops/${bike_shop.shop_name.toLowerCase().split(" ").join("-")}`}>
                      <div className="">
                        {
                          bike_shop.images.length > 0 && bike_shop.verified == true && (
                            <Image
                              src={bike_shop.images[0].image_url}
                              alt=""
                              height={200}
                              width={360}
                              quality={100}
                              objectFit="cover"
                              className="w-full group-hover:brightness-90 h-[280px] object-cover rounded-xl" 
                            />
                          )
                        }
                        
                      </div>
                      <h3 className="text-lg flex flex-row items-center md:text-xl xl:text-2xl font-bold mt-4 font-Inter text-slate-800">
                        <span>{ bike_shop.verified == true && bike_shop.shop_name }</span>
                        { bike_shop.verified && <MdVerified size={24} className="text-green-700 ml-2" /> }
                      </h3>
                      {
                        bike_shop.verified && (
                          <div className="mt-2 mb-2 flex flex-row items-center">
                            <IoLocationOutline size={16} className="text-slate-600" />
                            <span className="font-Inter ml-1 text-slate-600 text-sm">{bike_shop.shop_street_address}</span>
                          </div>
                        )
                      }
                      {
                        bike_shop.verified && (
                          <p className="text-sm mb-4 font-semibold text-green-600 font-Inter">{bike_shop.shop_city}, {bike_shop.shop_country}</p>
                        )
                      }
                          <div className="flex flex-row flex-wrap items-center mb-2">
                            {
                              bike_shop.verified && bike_shop.bike_types && (
                                bike_shop.bike_types.map(
                                  (bike_type, index) => (
                                    <div key={index} className='flex flex-row items-center rounded-2xl mb-1 bg-slate-50 group-hover:border-slate-200 border border-slate-100 text-slate-600 px-3 py-1 mr-2'>
                                      <MdOutlineDirectionsBike />
                                      <span className='ml-2 text-sm font-Inter'> {bike_type.bike_type}</span>
                                    </div>
                                  )
                                )
                              )
                            }
                          </div>
                    </Link>
                  ))
                }
              </div>
            </section>
            <section className="separator py-14">

            </section>
            </>
          )
        }
        <section id="bike_friendly_cities" className="w-full lg:w-2/3 mx-auto">
          <h2 className="font-bold text-3xl md:text-4xl font-Inter mb-6">Best Bike-Friendly Cities to Rent a Bike</h2>
          <p className="text-gray-700 text-xl">Discover the best cities for cycling and easily rent a bike to explore their streets, parks, and scenic routes.</p>
          <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 md:mt-14">
            <Link href="/locations/utrecht" className="">
              <div className="relative">
                <Image 
                  src={utrecht}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl w-full h-[210px] hover:brightness-90"
                />
                <div className="flex flex-row items-center absolute bottom-0 right-0 rounded-br-xl rounded-tl-xl px-2 py-1 bg-green-800">
                  <Image
                    src={netherlands}
                    alt=""
                    height={14}
                    width={14}
                  />
                  <span className="ml-1 text-white text-xs font-bold">Utrecht, NL</span>
                </div>
              </div>
            </Link>
            <Link href="/locations/munster" className="">
              <div className="relative">
                <Image 
                  src={munster}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl w-full h-[210px] hover:brightness-90"
                />
                <div className="flex flex-row items-center absolute bottom-0 right-0 rounded-br-xl rounded-tl-xl px-2 py-1 bg-green-800">
                  <Image
                    src={germany}
                    alt=""
                    height={14}
                    width={14}
                  />
                  <span className="ml-1 text-white text-xs font-bold">Munster, DE</span>
                </div>
              </div>
            </Link>
            <Link href="/locations/antwerp" className="">
              <div className="relative">
                <Image 
                  src={antwerp}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl w-full h-[210px] hover:brightness-90"
                />
                <div className="flex flex-row items-center absolute bottom-0 right-0 rounded-br-xl rounded-tl-xl px-2 py-1 bg-green-800">
                  <Image
                    src={belgium}
                    alt=""
                    height={14}
                    width={14}
                  />
                  <span className="ml-1 text-white text-xs font-bold">Antwerp, BE</span>
                </div>
              </div>
            </Link>
            <Link href="/locations/copenhagen" className="">
              <div className="relative">
                <Image 
                  src={copenhagen}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl w-full h-[210px] hover:brightness-90"
                />
                <div className="flex flex-row items-center absolute bottom-0 right-0 rounded-br-xl rounded-tl-xl px-2 py-1 bg-green-800">
                  <Image
                    src={denmark}
                    alt=""
                    height={14}
                    width={14}
                  />
                  <span className="ml-1 text-white text-xs font-bold">Copenhagen, DK</span>
                </div>
              </div>
            </Link>
            <Link href="/locations/amsterdam" className="">
              <div className="relative">
                <Image 
                  src={amsterdam}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl w-full h-[210px] hover:brightness-90"
                />
                <div className="flex flex-row items-center absolute bottom-0 right-0 rounded-br-xl rounded-tl-xl px-2 py-1 bg-green-800">
                  <Image
                    src={netherlands}
                    alt=""
                    height={14}
                    width={14}
                  />
                  <span className="ml-1 text-white text-xs font-bold">Amsterdam, NL</span>
                </div>
              </div>
            </Link>
            <Link href="/locations/malmo" className="">
              <div className="relative">
                <Image 
                  src={malmo}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl w-full h-[210px] hover:brightness-90"
                />
                <div className="flex flex-row items-center absolute bottom-0 right-0 rounded-br-xl rounded-tl-xl px-2 py-1 bg-green-800">
                  <Image
                    src={sweden}
                    alt=""
                    height={14}
                    width={14}
                  />
                  <span className="ml-1 text-white text-xs font-bold">Malmo, SE</span>
                </div>
              </div>
            </Link>
            <Link href="/locations/hangzhou" className="">
              <div className="relative">
                <Image 
                  src={hangzhou}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl w-full h-[210px] hover:brightness-90"
                />
                <div className="flex flex-row items-center absolute bottom-0 right-0 rounded-br-xl rounded-tl-xl px-2 py-1 bg-green-800">
                  <Image
                    src={china}
                    alt=""
                    height={14}
                    width={14}
                  />
                  <span className="ml-1 text-white text-xs font-bold">Hangzhou, CN</span>
                </div>
              </div>
            </Link>
            <Link href="/locations/bern" className="">
              <div className="relative">
                <Image 
                  src={bern}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl w-full h-[210px] hover:brightness-90"
                />
                <div className="flex flex-row items-center absolute bottom-0 right-0 rounded-br-xl rounded-tl-xl px-2 py-1 bg-green-800">
                  <Image
                    src={switzerland}
                    alt=""
                    height={14}
                    width={14}
                  />
                  <span className="ml-1 text-white text-xs font-bold">Bern, CH</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="separator py-14">

        </section>
        
      </div>
    </>
  );
}
