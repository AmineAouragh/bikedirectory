import Image from 'next/image' 
import Link from 'next/link'
import Head from 'next/head'
import { TopNavigation } from '@/components/topnavigation'
import bike_shop from '@/public/images/bike-shop.jpg'
import { useState } from 'react' 

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function SubmitPage(){

    const [ shopName, setShopName ] = useState('')
    const [ shopWebsite, setShopWebsite ] = useState('')
    const [ email, setEmail ] = useState('') 
    const [ phoneNumber, setPhoneNumber ] = useState('') 
    const [ shopCountry, setShopCountry ] = useState('')
    const [ shopCity, setShopCity ] = useState('') 
    const [ shopStreetAddress, setShopStreetAddress ] = useState('')
    const [ shopDescription, setShopDescription ] = useState('')
    const [ availableBikeTypes, setAvailableBikeTypes ] = useState([]) 
    const [ rentalDurationOptions, setRentalDurationOptions ] = useState([]) 
    const [ cityBikeSelected, setCityBikeSelected ] = useState(false)
    const [ eBikeSelected, setEBikeSelected ] = useState(false)
    const [ cargoBikeSelected, setCargoBikeSelected ] = useState(false)
    const [ mountainBikeSelected, setMountainBikeSelected ] = useState(false)
    const [ tandemBikeSelected, setTandemBikeSelected ] = useState(false)
    const [ hourlyRentalSelected, setHourlyRentalSelected ] = useState(false)
    const [ dailyRentalSelected, setDailyRentalSelected ] = useState(false) 
    const [ weeklyRentalSelected, setWeeklyRentalSelected ] = useState(false) 
    const [ monthlyRentalSelected, setMonthlyRentalSelected ] = useState(false)  

    async function handleSubmit(e){
      e.preventDefault() 
      const formData = {
        shopName,
        shopWebsite,
        shopDescription,
        email,
        phoneNumber,
        shopCountry, 
        shopCity,
        shopStreetAddress
      }

      try {
        const response = await fetch('http://localhost:8080/submit-bike-shop', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })

        if (response.ok){
          alert("Bike shop submitted successfully!")
        } else {
          alert('Something went wrong!')
        }
      } catch (error){
        console.error("Error submitting shop: ", error)
      }

    }

    return (
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <title>Submit Your Bike Rental Shop | BikeDirectory</title>
          </Head>
          <div className='px-2 flex flex-col justify-center items-center w-full h-full'>
            <TopNavigation  />
            <header className="relative mt-10 md:mt-20 overflow-hidden h-[220px] md:h-[320px] bg-green-800 rounded-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto flex flex-col justify-center items-center">
              <Image
                src={bike_shop}
                alt='A man and a woman riding a tandem bike in a park'
                objectFit='cover'
                layout='fill'
                quality={100}
                className='rounded-xl object-cover object-bottom'
              />
              <div className='absolute inset-0 bg-opacity-20 bg-black'></div>
              <div className='p-4 bg-black bg-opacity-30 absolute inset-0 flex flex-col items-center justify-center'>
                <h1 className='text-4xl md:text-5xl text-center text-white font-bold'>Submit Your Bike Rental Shop</h1>
              </div>
            </header>
            <section className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto py-10'>
                <form id='form' onSubmit={handleSubmit}>
                  <p className='text-xl text-gray-700'>Submit details about your bike rental shop to add it to the directory.</p>
                  <div className='mt-8' id='shop_information'>
                    <h4 className='text-2xl font-bold mb-4'>Shop Information</h4>
                    <div className='flex flex-col mb-4 w-full'>
                        <div className='flex flex-col mb-4'>
                          <label htmlFor='shop_name' className='text-slate-700 mb-1 font-semibold'>Shop Name</label>
                          <input value={shopName} onChange={e => setShopName(e.target.value)} type="text" id="shop_name" name="shop_name" className='rounded-xl px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg' required />
                        </div>
                        <div className='flex flex-col'>
                          <label htmlFor='shop_url' className='text-slate-700 mb-1 font-semibold'>Shop Website (optional)</label>
                          <input placeholder='https://www.example.com' value={shopWebsite} onChange={e => setShopWebsite(e.target.value)} type="url" id="shop_url" name="shop_url" pattern="https://.*" className='rounded-xl px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between w-full mb-4'>
                        <div className='flex flex-col w-full sm:w-3/4 md:w-1/2 mr-0 mb-4 md:mb-0 md:mr-4'>
                          <label htmlFor='email' className='text-slate-700 mb-1 font-semibold'>Email Address</label>
                          <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" className='rounded-xl px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg' required />
                        </div>
                        <div className='flex flex-col w-full sm:w-3/4 md:w-1/2'>
                          <label htmlFor='phone_number' className='text-slate-700 mb-1 font-semibold'>Phone Number (optional)</label>
                          <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="tel" id="phone_number" name="phone_number" className='rounded-xl px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                      <label htmlFor='shop_description' className='text-slate-700 mb-1 font-semibold'>Shop Description</label>
                      <textarea required placeholder='Tell us about your bike rental shop...' value={shopDescription} onChange={e => setShopDescription(e.target.value)} id='shop_description' className='px-3 py-2 text-lg rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-full' maxLength={200}>

                      </textarea>
                    </div>
                  </div>
                  <div className='mt-8' id='shop_location'>
                    <h4 className='text-2xl font-bold mt-8 mb-4'>Shop Location</h4>
                    <div className='flex flex-row items-center justify-between mb-4 w-full'>
                        <div className='flex flex-col w-1/2 mr-2 md:mr-4'>
                          <label htmlFor='shop_country' className='text-slate-700 mb-1 font-semibold'>Country</label>
                          <input value={shopCountry} onChange={e => setShopCountry(e.target.value)} type="text" id="shop_country" name="shop_country" className='rounded-xl px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg' required />
                        </div>
                        <div className='flex flex-col w-1/2'>
                          <label htmlFor='shop_city' className='text-slate-700 mb-1 font-semibold'>City</label>
                          <input value={shopCity} onChange={e => setShopCity(e.target.value)} type="text" id="shop_city" name="shop_city" className='rounded-xl px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg' required />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                          <label htmlFor='shop_street_address' className='text-slate-700 mb-1 font-semibold'>Street Address</label>
                          <input value={shopStreetAddress} onChange={e => setShopStreetAddress(e.target.value)} type="text" id="shop_street_address" name="shop_street_address" className='rounded-xl px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg' required />
                    </div>
                  </div>
                  <div className='mt-8' id='available_bikes'>
                    <h4 className='text-2xl font-bold mt-8 mb-2'>Bike Types Available</h4>
                    <p className='mb-4 text-gray-700 text-xl'>Select the types of bikes available for rent at your shop</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 w-full'>
                        <button type='button' onClick={() => setCityBikeSelected(!cityBikeSelected)} className={`${cityBikeSelected ? 'border-2 border-green-800 text-green-800 font-bold' : 'text-slate-700 font-semibold'} border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl`}>
                          <span>City Bikes</span>
                        </button>
                        <button type='button' onClick={() => setEBikeSelected(!eBikeSelected)} className={`${eBikeSelected ? 'border-2 border-green-800 text-green-800 font-bold' : 'text-slate-700 font-semibold'} border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl`}>
                          <span>E-Bikes</span>
                        </button>
                        <button type='button' onClick={() => setCargoBikeSelected(!cargoBikeSelected)} className={`${cargoBikeSelected ? 'border-2 border-green-800 text-green-800 font-bold' : 'text-slate-700 font-semibold'} border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl`}>
                          <span>Cargo Bikes</span>
                        </button>
                        <button type='button' onClick={() => setMountainBikeSelected(!mountainBikeSelected)} className={`${mountainBikeSelected ? 'border-2 border-green-800 text-green-800 font-bold' : 'text-slate-700 font-semibold'} border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl`}>
                          <span>Mountain Bikes</span>
                        </button>
                        <button type='button' onClick={() => setTandemBikeSelected(!tandemBikeSelected)} className={`${tandemBikeSelected ? 'border-2 border-green-800 text-green-800 font-bold' : 'text-slate-700 font-semibold'} border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl`}>
                          <span>Tandem Bikes</span>
                        </button>
                    </div>
                  </div>
                  <div className='mt-8' id='rental_options'>
                    <h4 className='text-2xl font-bold mt-8 mb-2'>Rental Duration Options</h4>
                    <p className='mb-4 text-gray-700 text-xl'>Select the rental periods your shop offers</p>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
                        <button type='button' onClick={() => setHourlyRentalSelected(!hourlyRentalSelected)} className={`${hourlyRentalSelected ? "border-2 border-green-800 font-bold text-green-800" : "font-semibold text-slate-700"} border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl`}>
                          <span>Hourly</span>
                        </button>
                        <button type='button' onClick={() => setDailyRentalSelected(!dailyRentalSelected)} className={`${dailyRentalSelected ? "border-2 border-green-800 font-bold text-green-800" : "font-semibold text-slate-700"} border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl`}>
                          <span className='text-slate-700 font-semibold'>Daily</span>
                        </button>
                        <button type='button' onClick={() => setWeeklyRentalSelected(!weeklyRentalSelected)} className={`${weeklyRentalSelected ? "border-2 border-green-800 font-bold text-green-800" : "font-semibold text-slate-700"} border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl`}>
                          <span className='text-slate-700 font-semibold'>Weekly</span>
                        </button>
                        <button type='button' onClick={() => setMonthlyRentalSelected(!monthlyRentalSelected)} className={`${monthlyRentalSelected ? "border-2 border-green-800 font-bold text-green-800" : "font-semibold text-slate-700"} border flex flex-col justify-center items-center border-slate-300 py-6 rounded-xl`}>
                          <span className='text-slate-700 font-semibold'>Monthly</span>
                        </button>
                    </div>
                  </div>
                  <div className='mt-8' id='opening_hours'>
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
                  <button type="submit" className='w-full mt-14 rounded-full px-8 py-3 bg-green-800 text-xl text-white font-bold'>Submit Shop</button>
                </form>
            </section>
          </div>
        </>
    )
}