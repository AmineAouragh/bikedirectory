import Image from 'next/image' 
import Link from 'next/link'
import Head from 'next/head'
import { TopNavigation } from '@/components/topnavigation'
import bike_shop from '@/public/images/bike-shop.jpg'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function RegularBikePage(){
    return (
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <title>Submit Your Bike Rental Shop | BikeDirectory</title>
          </Head>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <TopNavigation  />
            <header className="relative mt-20 overflow-hidden h-[320px] bg-green-800 rounded-xl w-2/5 mx-auto flex flex-col justify-center items-center">
              <Image
                src={bike_shop}
                alt='A man and a woman riding a tandem bike in a park'
                objectFit='cover'
                layout='fill'
                quality={100}
                className='rounded-xl object-cover object-bottom'
              />
              <div className='absolute inset-0 bg-opacity-20 bg-black'></div>
              <div className='bg-black bg-opacity-30 absolute inset-0 flex flex-col items-center justify-center'>
                <h1 className='text-5xl text-center text-white font-bold'>Submit Your Bike Rental Shop</h1>
              </div>
            </header>
            <section className='w-2/5 mx-auto py-10'>
                <form id='form'>
                  <p className='text-xl text-gray-700'>Submit details about your bike rental shop to add it to the directory.</p>
                  <div className='mt-8'>
                    <h4 className='text-2xl font-bold mb-4'>Shop Information</h4>
                    <div className='flex flex-col mb-4 w-full'>
                        <div className='flex flex-col mb-4'>
                          <label htmlFor='shop_name' className='text-slate-700 mb-1 font-semibold'>Shop Name</label>
                          <input type="text" id="shop_name" name="shop_name" className='rounded-xl px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg' required />
                        </div>
                        <div className='flex flex-col'>
                          <label htmlFor='shop_url' className='text-slate-700 mb-1 font-semibold'>Shop Website (optional)</label>
                          <input type="url" id="shop_url" name="shop_url" pattern="https://.*" className='rounded-xl px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg' />
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-between w-full'>
                        <div className='flex flex-col w-1/2 mr-4'>
                          <label htmlFor='email' className='text-slate-700 mb-1 font-semibold'>Email Address</label>
                          <input type="email" id="email" name="email" className='rounded-xl px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg' required />
                        </div>
                        <div className='flex flex-col w-1/2'>
                          <label htmlFor='phone_number' className='text-slate-700 mb-1 font-semibold'>Phone Number (optional)</label>
                          <input type="tel" id="phone_number" name="phone_number" className='rounded-xl px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg' />
                        </div>
                    </div>
                    <h4 className='text-2xl font-bold mt-8 mb-4'>Shop Location</h4>
                    <div className='flex flex-row items-center justify-between mb-4 w-full'>
                        <div className='flex flex-col w-1/2 mr-4'>
                          <label htmlFor='shop_country' className='text-slate-700 mb-1 font-semibold'>Country</label>
                          <input type="text" id="shop_country" name="shop_country" className='rounded-xl px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg' required />
                        </div>
                        <div className='flex flex-col w-1/2'>
                          <label htmlFor='shop_city' className='text-slate-700 mb-1 font-semibold'>City</label>
                          <input type="text" id="shop_city" name="shop_city" className='rounded-xl px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg' required />
                        </div>
                    </div>
                    <h4 className='text-2xl font-bold mt-8 mb-2'>Bike Types Available</h4>
                    <p className='mb-4 text-gray-700 text-xl'>Select the types of bikes available for rent at your shop</p>
                    <div className='grid grid-cols-3 gap-4 w-full'>
                        <button type='button' className='border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl'>
                          <span className='text-slate-700 font-semibold'>City Bikes</span>
                        </button>
                        <button type='button' className='border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl'>
                          <span className='text-slate-700 font-semibold'>E-Bikes</span>
                        </button>
                        <button type='button' className='border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl'>
                          <span className='text-slate-700 font-semibold'>Cargo Bikes</span>
                        </button>
                        <button type='button' className='border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl'>
                          <span className='text-slate-700 font-semibold'>Mountain Bikes</span>
                        </button>
                        <button type='button' className='border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl'>
                          <span className='text-slate-700 font-semibold'>Tandem Bikes</span>
                        </button>
                    </div>
                    <h4 className='text-2xl font-bold mt-8 mb-2'>Rental Duration Options</h4>
                    <p className='mb-4 text-gray-700 text-xl'>Select the rental periods your shop offers</p>
                    <div className='grid grid-cols-4 gap-4 w-full'>
                        <button type='button' className='border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl'>
                          <span className='text-slate-700 font-semibold'>Hourly</span>
                        </button>
                        <button type='button' className='border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl'>
                          <span className='text-slate-700 font-semibold'>Daily</span>
                        </button>
                        <button type='button' className='border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl'>
                          <span className='text-slate-700 font-semibold'>Weekly</span>
                        </button>
                        <button type='button' className='border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl'>
                          <span className='text-slate-700 font-semibold'>Monthly</span>
                        </button>
                    </div>
                    <h4 className='text-2xl font-bold mt-8 mb-4'>Shop Opening Hours</h4>
                    <div className='w-full flex flex-col'>
                        <div className='flex flex-row items-center justify-between mb-4'>
                            <div className='w-1/3'>
                                <span className='text-slate-700 font-semibold'>Monday</span>
                            </div>
                            <div className='w-2/3 flex flex-row items-center'>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg mr-4">
                                    <SelectValue placeholder="Opening at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Opening Hour</SelectLabel>
                                      <SelectItem value="8am" className="text-lg">8:00 AM</SelectItem>
                                      <SelectItem value="8.30am" className="text-lg">8:30 AM</SelectItem>
                                      <SelectItem value="9am" className="text-lg">9:00 AM</SelectItem>
                                      <SelectItem value="9.30am" className="text-lg">9:30 AM</SelectItem>
                                      <SelectItem value="10am" className="text-lg">10:00 AM</SelectItem>
                                      <SelectItem value="10.30am" className="text-lg">10:30 PM</SelectItem>
                                      <SelectItem value="11pm" className="text-lg">11:00 AM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg">
                                    <SelectValue placeholder="Closing at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Closing Hour</SelectLabel>
                                      <SelectItem value="4pm" className="text-lg">4:00 PM</SelectItem>
                                      <SelectItem value="4.30pm" className="text-lg">4:30 PM</SelectItem>
                                      <SelectItem value="5pm" className="text-lg">5:00 PM</SelectItem>
                                      <SelectItem value="5.30pm" className="text-lg">5:30 PM</SelectItem>
                                      <SelectItem value="6pm" className="text-lg">6:00 PM</SelectItem>
                                      <SelectItem value="6.30pm" className="text-lg">6:30 PM</SelectItem>
                                      <SelectItem value="7pm" className="text-lg">7:00 PM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-between mb-4'>
                            <div className='w-1/3'>
                                <span className='text-slate-700 font-semibold'>Tuesday</span>
                            </div>
                            <div className='w-2/3 flex flex-row items-center'>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg mr-4">
                                    <SelectValue placeholder="Opening at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Opening Hour</SelectLabel>
                                      <SelectItem value="8am" className="text-lg">8:00 AM</SelectItem>
                                      <SelectItem value="8.30am" className="text-lg">8:30 AM</SelectItem>
                                      <SelectItem value="9am" className="text-lg">9:00 AM</SelectItem>
                                      <SelectItem value="9.30am" className="text-lg">9:30 AM</SelectItem>
                                      <SelectItem value="10am" className="text-lg">10:00 AM</SelectItem>
                                      <SelectItem value="10.30am" className="text-lg">10:30 PM</SelectItem>
                                      <SelectItem value="11pm" className="text-lg">11:00 AM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg">
                                    <SelectValue placeholder="Closing at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Closing Hour</SelectLabel>
                                      <SelectItem value="4pm" className="text-lg">4:00 PM</SelectItem>
                                      <SelectItem value="4.30pm" className="text-lg">4:30 PM</SelectItem>
                                      <SelectItem value="5pm" className="text-lg">5:00 PM</SelectItem>
                                      <SelectItem value="5.30pm" className="text-lg">5:30 PM</SelectItem>
                                      <SelectItem value="6pm" className="text-lg">6:00 PM</SelectItem>
                                      <SelectItem value="6.30pm" className="text-lg">6:30 PM</SelectItem>
                                      <SelectItem value="7pm" className="text-lg">7:00 PM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-between mb-4'>
                            <div className='w-1/3'>
                                <span className='font-semibold text-slate-700'>Wednesday</span>
                            </div>
                            <div className='w-2/3 flex flex-row items-center'>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg mr-4">
                                    <SelectValue placeholder="Opening at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Opening Hour</SelectLabel>
                                      <SelectItem value="8am" className="text-lg">8:00 AM</SelectItem>
                                      <SelectItem value="8.30am" className="text-lg">8:30 AM</SelectItem>
                                      <SelectItem value="9am" className="text-lg">9:00 AM</SelectItem>
                                      <SelectItem value="9.30am" className="text-lg">9:30 AM</SelectItem>
                                      <SelectItem value="10am" className="text-lg">10:00 AM</SelectItem>
                                      <SelectItem value="10.30am" className="text-lg">10:30 PM</SelectItem>
                                      <SelectItem value="11pm" className="text-lg">11:00 AM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg">
                                    <SelectValue placeholder="Closing at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Closing Hour</SelectLabel>
                                      <SelectItem value="4pm" className="text-lg">4:00 PM</SelectItem>
                                      <SelectItem value="4.30pm" className="text-lg">4:30 PM</SelectItem>
                                      <SelectItem value="5pm" className="text-lg">5:00 PM</SelectItem>
                                      <SelectItem value="5.30pm" className="text-lg">5:30 PM</SelectItem>
                                      <SelectItem value="6pm" className="text-lg">6:00 PM</SelectItem>
                                      <SelectItem value="6.30pm" className="text-lg">6:30 PM</SelectItem>
                                      <SelectItem value="7pm" className="text-lg">7:00 PM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-between mb-4'>
                            <div className='w-1/3'>
                                <span className='text-slate-700 font-semibold'>Thursday</span>
                            </div>
                            <div className='w-2/3 flex flex-row items-center'>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg mr-4">
                                    <SelectValue placeholder="Opening at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Opening Hour</SelectLabel>
                                      <SelectItem value="8am" className="text-lg">8:00 AM</SelectItem>
                                      <SelectItem value="8.30am" className="text-lg">8:30 AM</SelectItem>
                                      <SelectItem value="9am" className="text-lg">9:00 AM</SelectItem>
                                      <SelectItem value="9.30am" className="text-lg">9:30 AM</SelectItem>
                                      <SelectItem value="10am" className="text-lg">10:00 AM</SelectItem>
                                      <SelectItem value="10.30am" className="text-lg">10:30 PM</SelectItem>
                                      <SelectItem value="11pm" className="text-lg">11:00 AM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg">
                                    <SelectValue placeholder="Closing at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Closing Hour</SelectLabel>
                                      <SelectItem value="4pm" className="text-lg">4:00 PM</SelectItem>
                                      <SelectItem value="4.30pm" className="text-lg">4:30 PM</SelectItem>
                                      <SelectItem value="5pm" className="text-lg">5:00 PM</SelectItem>
                                      <SelectItem value="5.30pm" className="text-lg">5:30 PM</SelectItem>
                                      <SelectItem value="6pm" className="text-lg">6:00 PM</SelectItem>
                                      <SelectItem value="6.30pm" className="text-lg">6:30 PM</SelectItem>
                                      <SelectItem value="7pm" className="text-lg">7:00 PM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-between mb-4'>
                            <div className='w-1/3'>
                                <span className='text-slate-700 font-semibold'>Friday</span>
                            </div>
                            <div className='w-2/3 flex flex-row items-center'>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg mr-4">
                                    <SelectValue placeholder="Opening at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Opening Hour</SelectLabel>
                                      <SelectItem value="8am" className="text-lg">8:00 AM</SelectItem>
                                      <SelectItem value="8.30am" className="text-lg">8:30 AM</SelectItem>
                                      <SelectItem value="9am" className="text-lg">9:00 AM</SelectItem>
                                      <SelectItem value="9.30am" className="text-lg">9:30 AM</SelectItem>
                                      <SelectItem value="10am" className="text-lg">10:00 AM</SelectItem>
                                      <SelectItem value="10.30am" className="text-lg">10:30 PM</SelectItem>
                                      <SelectItem value="11pm" className="text-lg">11:00 AM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg">
                                    <SelectValue placeholder="Closing at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Closing Hour</SelectLabel>
                                      <SelectItem value="4pm" className="text-lg">4:00 PM</SelectItem>
                                      <SelectItem value="4.30pm" className="text-lg">4:30 PM</SelectItem>
                                      <SelectItem value="5pm" className="text-lg">5:00 PM</SelectItem>
                                      <SelectItem value="5.30pm" className="text-lg">5:30 PM</SelectItem>
                                      <SelectItem value="6pm" className="text-lg">6:00 PM</SelectItem>
                                      <SelectItem value="6.30pm" className="text-lg">6:30 PM</SelectItem>
                                      <SelectItem value="7pm" className="text-lg">7:00 PM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-between mb-4'>
                            <div className='w-1/3'>
                                <span className='font-semibold text-slate-700'>Saturday</span>
                            </div>
                            <div className='w-2/3 flex flex-row items-center'>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg mr-4">
                                    <SelectValue placeholder="Opening at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Opening Hour</SelectLabel>
                                      <SelectItem value="8am" className="text-lg">8:00 AM</SelectItem>
                                      <SelectItem value="8.30am" className="text-lg">8:30 AM</SelectItem>
                                      <SelectItem value="9am" className="text-lg">9:00 AM</SelectItem>
                                      <SelectItem value="9.30am" className="text-lg">9:30 AM</SelectItem>
                                      <SelectItem value="10am" className="text-lg">10:00 AM</SelectItem>
                                      <SelectItem value="10.30am" className="text-lg">10:30 PM</SelectItem>
                                      <SelectItem value="11pm" className="text-lg">11:00 AM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg">
                                    <SelectValue placeholder="Closing at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Closing Hour</SelectLabel>
                                      <SelectItem value="4pm" className="text-lg">4:00 PM</SelectItem>
                                      <SelectItem value="4.30pm" className="text-lg">4:30 PM</SelectItem>
                                      <SelectItem value="5pm" className="text-lg">5:00 PM</SelectItem>
                                      <SelectItem value="5.30pm" className="text-lg">5:30 PM</SelectItem>
                                      <SelectItem value="6pm" className="text-lg">6:00 PM</SelectItem>
                                      <SelectItem value="6.30pm" className="text-lg">6:30 PM</SelectItem>
                                      <SelectItem value="7pm" className="text-lg">7:00 PM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='w-1/3'>
                                <span className='font-semibold text-slate-700'>Sunday</span>
                            </div>
                            <div className='w-2/3 flex flex-row items-center'>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg mr-4">
                                    <SelectValue placeholder="Opening at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Opening Hour</SelectLabel>
                                      <SelectItem value="none" className="text-lg">Not working</SelectItem>
                                      <SelectItem value="8am" className="text-lg">8:00 AM</SelectItem>
                                      <SelectItem value="8.30am" className="text-lg">8:30 AM</SelectItem>
                                      <SelectItem value="9am" className="text-lg">9:00 AM</SelectItem>
                                      <SelectItem value="9.30am" className="text-lg">9:30 AM</SelectItem>
                                      <SelectItem value="10am" className="text-lg">10:00 AM</SelectItem>
                                      <SelectItem value="10.30am" className="text-lg">10:30 PM</SelectItem>
                                      <SelectItem value="11pm" className="text-lg">11:00 AM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                                <Select>
                                  <SelectTrigger className="w-1/2 text-lg">
                                    <SelectValue placeholder="Closing at..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>Closing Hour</SelectLabel>
                                      <SelectItem value="none" className="text-lg">Not working</SelectItem>
                                      <SelectItem value="4pm" className="text-lg">4:00 PM</SelectItem>
                                      <SelectItem value="4.30pm" className="text-lg">4:30 PM</SelectItem>
                                      <SelectItem value="5pm" className="text-lg">5:00 PM</SelectItem>
                                      <SelectItem value="5.30pm" className="text-lg">5:30 PM</SelectItem>
                                      <SelectItem value="6pm" className="text-lg">6:00 PM</SelectItem>
                                      <SelectItem value="6.30pm" className="text-lg">6:30 PM</SelectItem>
                                      <SelectItem value="7pm" className="text-lg">7:00 PM</SelectItem>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                  </div>
                </form>
            </section>
          </div>
        </>
    )
}