import Image from "next/image"
import Link from 'next/link' 
import Head from 'next/head'

import bike from '@/public/images/regular-bike.jpg'
import ebike from '@/public/images/e-bike.jpg'
import cargo_bike from '@/public/images/cargo-bike/cargobike.jpg'
import { TopNavigation } from "@/components/topnavigation"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <title>BikeDirectory | Find Regular Bikes, E-Bikes or Mountain Bikes</title>
      </Head>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <TopNavigation />
        <section id="hero_section" className="mt-20 bg-green-800 rounded-xl p-4 border border-slate-300 py-32 w-2/3 mx-auto flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl text-white text-center mb-6">Bike Rental Directory</h1>
          <p className="text-lg text-center text-white">Find & Rent Regular Bikes, E-Bikes or Mountain Bikes wherever you travel. Explore the city or nature on two wheels 🚴🔥</p>
        </section>
        <section className="separator py-14">

        </section>
        <section id="bike_categories" className="w-2/3 mx-auto">
          <h2 className="text-4xl font-bold mb-6">Browse Bikes by Category</h2>
          <p className="text-gray-700 text-xl">Find the perfect ride—whether it's a regular bike, e-bike, cargo bike, or mountain bike.</p>
          <div className="grid grid-cols-3 gap-4 mt-14">
            <Link href="/category/regular-bikes">
              <div className="" id="regular-bikes">
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
                <h3 className="text-xl font-bold mt-4">Regular bikes</h3>
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
                <h3 className="text-xl font-bold mt-4">Cargo bikes</h3>
                <p className="text-md text-gray-700 mt-2">Carry more, ride easier—perfect for kids, groceries, and heavy loads.</p>
              </div>
            </Link>
          </div>
        </section>
        <section className="separator py-14">

        </section>
        <section id="rental_bikes_in_rome" className="w-2/3 mx-auto">
          <h2 className="font-bold text-4xl mb-6">Popular Cities to Rent a Bike</h2>
          <p className="text-gray-700 text-xl">Find Bikes to Rent in these major cities</p>
        </section>
        <section className="separator py-14">

        </section>
        <section id="rental_bikes_in_utrecht" className="w-2/3 mx-auto">
          <h2 className="font-bold text-3xl text-green-800 mb-6">Rent a Bike in Utrecht</h2>

        </section>
      </div>
    </>
  );
}
