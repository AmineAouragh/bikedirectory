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

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <title>BikeDirectory | Find Regular Bikes, E-Bikes or Mountain Bikes</title>
      </Head>
      <div className="px-2 flex flex-col justify-center items-center h-full w-full">
        <TopNavigation />
        <header className="relative mt-10 md:mt-20 overflow-hidden h-[280px] md:h-[420px] bg-green-800 rounded-xl w-full md:w-2/3 mx-auto flex flex-col justify-center items-center">
          <Image
            src={main_header}
            alt=''
            objectFit='cover'
            layout='fill'
            quality={100}
            className='rounded-xl'
          />
          <div className='absolute inset-0 bg-opacity-40 bg-black'></div>
          <div className='bg-black bg-opacity-30 absolute inset-0 flex flex-col items-center justify-center'>
            <h1 className='lg:text-6xl text-3xl md:text-4xl text-center text-white font-bold mb-8'>Bike Rental Directory</h1>
            <p className='text-white w-2/3 text-center text-md lg:text-xl'>Find & Rent Regular Bikes, E-Bikes or Mountain Bikes wherever you travel and explore the city or nature on two wheels 🚴🔥</p>
          </div>
        </header>
        <section className="separator py-8 md:py-14">

        </section>
        <section id="bike_categories" className="w-full lg:w-2/3 mx-auto">
          <h2 className="md:text-4xl text-3xl font-bold mb-6">Browse Bikes by Category</h2>
          <p className="text-gray-700 text-xl">Find the perfect ride—whether it's a regular bike, e-bike, cargo bike, or mountain bike.</p>
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
                  <span className="absolute bg-slate-800 text-white text-xs px-2 py-1 opacity-40 rounded-br-xl bottom-0 right-3 hover:opacity-75">Pic from solebicycles.com</span>
                </div>
                <h3 className="text-xl font-bold mt-4">City Bikes</h3>
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
                  <span className="absolute bg-slate-800 text-white text-xs px-2 py-1 opacity-40 rounded-br-xl bottom-0 right-3 hover:opacity-75">Pic from pathendry.com</span>
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
        <section id="bike_friendly_cities" className="w-full lg:w-2/3 mx-auto">
          <h2 className="font-bold text-3xl md:text-4xl mb-6">Best Bike-Friendly Cities to Rent a Bike</h2>
          <p className="text-gray-700 text-xl">Discover the best cities for cycling and easily rent a bike to explore their streets, parks, and scenic routes.</p>
          <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 md:mt-14">
            <Link href="/locations/utrecht">
              <div className="relative w-fit">
                <Image 
                  src={utrecht}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl h-[210px] hover:brightness-90"
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
            <Link href="/locations/munster">
              <div className="relative w-fit">
                <Image 
                  src={munster}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl h-[210px] hover:brightness-90"
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
            <Link href="/locations/antwerp">
              <div className="relative w-fit">
                <Image 
                  src={antwerp}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl h-[210px] hover:brightness-90"
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
            <Link href="/locations/copenhagen">
              <div className="relative w-fit">
                <Image 
                  src={copenhagen}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl h-[210px] hover:brightness-90"
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
            <Link href="/locations/amsterdam">
              <div className="relative w-fit">
                <Image 
                  src={amsterdam}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl h-[210px] hover:brightness-90"
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
            <Link href="/locations/malmo">
              <div className="relative w-fit">
                <Image 
                  src={malmo}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl h-[210px] hover:brightness-90"
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
            <Link href="/locations/hangzhou">
              <div className="relative w-fit">
                <Image 
                  src={hangzhou}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl h-[210px] hover:brightness-90"
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
            <Link href="/locations/bern">
              <div className="relative w-fit">
                <Image 
                  src={bern}
                  alt=""
                  height={100}
                  width={300}
                  className="rounded-xl h-[210px] hover:brightness-90"
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
