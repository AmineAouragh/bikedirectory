import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { TopNavigation } from '@/components/topnavigation'
import { Footer } from '@/components/footer'

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function BlogPost(){

    const [ blogPost, setBlogPost ] = useState([])

    async function fetchBlogPost(){
        try {
            const response = await fetch(`/api/getPostByTitle?blog_post_title=5 Reasons To Rent A Bike In Berlin`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok){
                const data = await response.json()
                setBlogPost(data.blog_posts)
                console.log(data.blog_posts)
            } else {
                console.log("Error while fetching blog post.")
            }
        } catch (error){
            console.error("Error while fetching blog post: ", error)
        }

    }

    useEffect(() => {
      if (blogPost){
        fetchBlogPost()
      }
    }, [blogPost])

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <title>Bike Wheels Rentals Blog</title>
            </Head>
            <div className='relative px-2 flex flex-col w-full h-full justify-center items-center'>
                <TopNavigation />
                <header className='relative py-4 w-full md:w-2/3 rounded-md flex flex-col mt-4 lg:mt-8 mx-auto'>
                  <Breadcrumb className="mb-8 mr-auto">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink className="font-Inter text-slate-600" href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink className="font-Inter text-slate-600" href="/blog">Posts</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage className="font-Inter text-slate-800 font-semibold">5 Reasons To Rent A Bike In Berlin</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <h1 className='font-Inter text-slate-800 font-bold text-3xl mb-6 md:text-4xl lg:text-5xl xl:text-6xl'>5 Reasons To Rent A Bike In Berlin</h1>              
                  <p className='font-Inter text-xl text-slate-600'>Discover why exploring Berlin on two wheels is the smartest, greenest, and most flexible way to experience the city.</p>
                </header>
                <section className='relative flex flex-col lg:flex-row lg:items-start w-full md:w-2/3 mt-3 lg:mt-6 mx-auto py-4'>
                <div className='w-full lg:w-1/4 z-10 bg-slate-50 p-4 md:top-32 left-0 absolute md:sticky mb-4 overflow-y-auto rounded-md'>
                  <p className='mb-3 font-bold font-Inter'>Table of Contents</p>
                  <h2 className='font-Inter text-sm text-slate-800 mb-3 hover:underline'><Link href="#1">Berlin is One of the Most Bike-Friendly Cities in Europe</Link></h2>
                  <h2 className='font-Inter text-sm text-slate-800 mb-3 hover:underline'><Link href="#2">Renting a Bike in Berlin Gives You Freedom to Explore</Link></h2>
                  <h2 className='font-Inter text-sm text-slate-800 mb-3 hover:underline'><Link href="#3">Bike Rental in Berlin Helps You Discover Hidden Attractions</Link></h2>
                  <h2 className='font-Inter text-sm text-slate-800 mb-3 hover:underline'><Link href="#4">Affordable Bike Rental Options for Tourists in Berlin</Link></h2>
                  <h2 className='font-Inter text-sm text-slate-800 mb-3 hover:underline'><Link href="#5">Cycling in Berlin is a Sustainable Way to Travel</Link></h2>
                  <h2 className='font-Inter text-sm text-slate-800 mb-3 hover:underline'><Link href="#6">Where to Rent a Bike In Berlin?</Link></h2>
                  <h2 className='font-Inter text-sm text-slate-800 hover:underline'><Link href="#7">The Best Places To Bike in Berlin</Link></h2>
                </div>
                <div className='relative flex flex-col lg:ml-8 w-full lg:w-3/4 items-start'>
                  {
                    blogPost.length > 0 &&
                  <Image
                    src={blogPost[0].cover_image}
                    alt=''
                    height={200}
                    quality={100}
                    width={380}
                    objectFit='cover'
                    className='rounded-md w-full mb-5 h-[440px] object-cover' 
                  />
                  }
                  <p className='font-Inter text-slate-800 text-lg'>
                    Berlin is a city that blends rich history with modern energy, where every street tells a story and every neighborhood offers something new to discover. 
                    Whether you&apos;re wandering through the vibrant districts of Kreuzberg and Neukölln or exploring landmarks like the Berlin Wall and Brandenburg Gate, getting around the city should be part of the adventure—not just a way to get from A to B. 
                    That&apos;s why renting a bike in Berlin is one of the best decisions a visitor can make. 
                    It&apos;s fast, affordable, eco-friendly, and lets you experience the city like a local. 
                    In this post, we&apos;ll share five compelling reasons why cycling through Berlin should be at the top of your travel plans.
                  </p>
                  <h2 id='1' className='my-4 lg:my-8 text-3xl text-slate-800 font-bold font-Inter'>
                    Berlin is One of the Most Bike-Friendly Cities in Europe
                  </h2>
                  <p className='font-Inter text-lg text-slate-800'>
                    Berlin is consistently ranked as one of the most bike-friendly cities in Europe. 
                    With over 1,000 kilometers of dedicated cycling paths, wide bike lanes, and clearly marked signs, it&apos;s designed for cycling. 
                    The city&apos;s flat terrain also makes it easy for visitors to rent a bike and explore Berlin safely and comfortably.</p>
                  <h2 id='2' className='my-4 lg:my-8 text-3xl text-slate-800 font-bold font-Inter'>
                    Renting a Bike in Berlin Gives You Freedom to Explore
                  </h2>
                  <p className='font-Inter text-lg text-slate-800'>
                    Unlike public transport or taxis, bike rentals in Berlin give you complete freedom. 
                    You can stop wherever you want, take detours, explore new neighborhoods, and go at your own pace. 
                    Whether you&apos;re sightseeing or just soaking in the local atmosphere, renting a bike gives you total flexibility.
                  </p>
                  <h2 id='3' className='my-4 lg:my-8 text-3xl text-slate-800 font-bold font-Inter'>
                    Bike Rental in Berlin Helps You Discover Hidden Attractions
                  </h2>
                  <p className='font-Inter text-lg text-slate-800'>
                    Berlin is full of surprises. With a rental bike, you can explore lesser-known areas like Tempelhofer Feld, ride along the Berlin Wall Trail, or find cozy cafés and street art in back alleys. 
                    Many of these places aren&apos;t easily accessible by train or bus, but bike rental in Berlin makes them easy to reach.</p>
                  <h2 id='4' className='my-4 lg:my-8 text-3xl text-slate-800 font-bold font-Inter'>
                    Affordable Bike Rental Options for Tourists in Berlin
                  </h2>
                  <p className='font-Inter text-lg text-slate-800'>
                    If you&apos;re traveling on a budget, renting a bike in Berlin is one of the cheapest and most efficient ways to get around. 
                    Many bike rental shops in Berlin offer competitive hourly and daily rates, making it accessible even for short stays. 
                    It&apos;s a smart alternative to more expensive options like ride-shares or taxis.
                  </p>
                  <h2 id='5' className='my-4 lg:my-8 text-3xl text-slate-800 font-bold font-Inter'>
                    Cycling in Berlin is a Sustainable Way to Travel
                  </h2>
                  <p className='font-Inter text-lg text-slate-800'>
                    Berlin values eco-conscious living, and choosing a bike rental helps reduce your carbon footprint. 
                    It&apos;s a sustainable, healthy, and quiet way to see the city. 
                    Plus, riding a bike through Berlin&apos;s tree-lined streets or riverside paths is a uniquely peaceful experience.
                  </p>
                  <h2 className='my-4 lg:my-8 text-3xl text-slate-800 font-bold font-Inter'>
                    Where To Rent A Bike In Berlin?
                  </h2>
                  <p className='font-Inter text-lg text-slate-800'>
                    Looking for the best place to rent a bike in Berlin? At Bike Wheels Rentals, we feature top-rated local bike rental shops across the city. 
                    Whether you&apos;re exploring central Berlin or heading to more local neighborhoods, you&apos;ll find trusted options like <Link href="/bike-shops/berlin-on-bike" className='hover:underline font-semibold'>Berlin On Bike</Link> and <Link href="/bike-shops/8bar-bikes" className='hover:underline font-semibold'>8Bar Bikes</Link> in our growing directory. 
                    We&apos;re constantly adding new bike shops to cover even more locations and help you find the perfect ride—wherever your adventure begins.
                  </p>
                  <h2 className='my-4 lg:my-8 text-3xl text-slate-800 font-bold font-Inter'>
                    Final Thoughts: Why Rent a Bike in Berlin?
                  </h2>
                  <p className='font-Inter text-lg text-slate-800'>
                    To sum it up, renting a bike in Berlin gives you a unique mix of freedom, affordability, and access to the city&apos;s best spots—both famous and hidden. 
                    If you&apos;re looking to experience Berlin like a local, biking is the way to go.
                  </p>
                </div>
                </section>
                <div className='py-10 px-12 mx-auto w-full md:w-2/3 mb-20'>

                </div>
                <Footer />
            </div>
        </>
    )
}