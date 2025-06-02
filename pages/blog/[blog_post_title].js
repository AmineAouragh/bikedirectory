import Link from 'next/link'
import Head from 'next/head'
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

    const router = useRouter() 

    const blog_post_title = router.query.blog_post_title

    const formattedPostTitle = blog_post_title ? blog_post_title.split("-").join(" ") : ""

    const [ blogPost, setBlogPost ] = useState([])

    function capitalizeStr(str) {
      return str
        .split(' ')
        .map(word => {
            const match = word.match(/[a-zA-Z]/);
            if (!match) return word; // no letters to capitalize

            const index = match.index;
            return (
                word.substring(0, index) +
                word.charAt(index).toUpperCase() +
                word.substring(index + 1).toLowerCase()
            );
        })
        .join(' ');
    }

    const transformedPostTitle = capitalizeStr(formattedPostTitle)


    async function fetchBlogPost(){
        try {
            const response = await fetch(`/api/getPostByTitle?blog_post_title=${transformedPostTitle}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok){
                const data = await response.json()
                setBlogPost(data.blog_posts)
            } else {
                console.log("Error while fetching blog post.")
            }
        } catch (error){
            console.error("Error while fetching blog post: ", error)
        }

    }

    useEffect(() => {
        if (blogPost)
          fetchBlogPost()
    }, [blogPost])

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <title>Bike Wheels Rentals Blog</title>
            </Head>
            <div className='px-2 flex flex-col w-full h-full justify-center items-center'>
                <TopNavigation />
                <hr className="bg-slate-100 h-0.5 w-full mt-2" />
                <header className='py-4 w-full rounded-md flex flex-col mt-4 lg:mt-8 lg:w-2/3 mx-auto'>
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
                <section className='relative flex flex-col lg:flex-row md:items-center w-full lg:w-2/3 mt-3 lg:mt-6 mx-auto py-4'>
                <div className='w-full lg:w-1/3 bg-slate-50 p-4 my-auto sticky overflow-y-auto rounded-md'>
                  <h2 className='font-Inter'>Berlin is One of the Most Bike-Friendly Cities in Europe</h2>
                  <h2 className='font-Inter'>Renting a Bike in Berlin Gives You Freedom to Explore</h2>
                </div>
                <div className='flex flex-col ml-8 w-full lg:w-2/3 items-start'>
                  <p className='font-Inter text-slate-800 text-lg'>
                    Berlin is a city that blends rich history with modern energy, where every street tells a story and every neighborhood offers something new to discover. 
                    Whether you&apos;re wandering through the vibrant districts of Kreuzberg and Neukölln or exploring landmarks like the Berlin Wall and Brandenburg Gate, getting around the city should be part of the adventure—not just a way to get from A to B. 
                    That&apos;s why renting a bike in Berlin is one of the best decisions a visitor can make. 
                    It&apos;s fast, affordable, eco-friendly, and lets you experience the city like a local. 
                    In this post, we&apos;ll share five compelling reasons why cycling through Berlin should be at the top of your travel plans.
                  </p>
                  <h2 className='my-4 lg:my-8 text-3xl text-slate-800 font-bold font-Inter'>
                    Berlin is One of the Most Bike-Friendly Cities in Europe
                  </h2>
                  <p className='font-Inter text-lg text-slate-800'>
                    Berlin is consistently ranked as one of the most bike-friendly cities in Europe. 
                    With <span className='font-bold'>over 1,000 kilometers of dedicated cycling paths</span>, wide bike lanes, and clearly marked signs, it&apos;s designed for cycling. 
                    The city&apos;s flat terrain also makes it easy for visitors to rent a bike and explore Berlin safely and comfortably.</p>
                  <h2 className='my-4 lg:my-8 text-3xl text-slate-800 font-bold font-Inter'>
                    Renting a Bike in Berlin Gives You Freedom to Explore
                  </h2>
                  <p className='font-Inter text-lg text-slate-800'>
                    Unlike public transport or taxis, <span className='font-bold'>bike rentals in Berlin</span> give you complete freedom. 
                    You can stop wherever you want, take detours, explore new neighborhoods, and go at your own pace. 
                    Whether you&apos;re sightseeing or just soaking in the local atmosphere, renting a bike gives you total flexibility.
                  </p>
                  <h2 className='my-4 lg:my-8 text-3xl text-slate-800 font-bold font-Inter'>
                    Bike Rental in Berlin Helps You Discover Hidden Attractions
                  </h2>
                  <p className='font-Inter text-lg text-slate-800'>
                    Berlin is full of surprises. With a rental bike, you can explore lesser-known areas like Tempelhofer Feld, ride along the Berlin Wall Trail, or find cozy cafés and street art in back alleys. 
                    Many of these places aren&apos;t easily accessible by train or bus, but <span className='font-bold'>bike rental in Berlin</span> makes them easy to reach.</p>
                  <h2 className='my-4 lg:my-8 text-3xl text-slate-800 font-bold font-Inter'>
                    Affordable Bike Rental Options for Tourists in Berlin
                  </h2>
                  <p className='font-Inter text-lg text-slate-800'>
                    If you&apos;re traveling on a budget, renting a bike in Berlin is one of the cheapest and most efficient ways to get around. 
                    Many bike rental shops in Berlin offer competitive hourly and daily rates, making it accessible even for short stays. 
                    It&apos;s a smart alternative to more expensive options like ride-shares or taxis.
                  </p>
                  <h2 className='my-4 lg:my-8 text-3xl text-slate-800 font-bold font-Inter'>
                    Cycling in Berlin is a Sustainable Way to Travel
                  </h2>
                  <p className='font-Inter text-lg text-slate-800'>
                    Berlin values eco-conscious living, and <span className='font-bold'>choosing a bike rental</span> helps reduce your carbon footprint. 
                    It&apos;s a sustainable, healthy, and quiet way to see the city. 
                    Plus, riding a bike through Berlin&apos;s tree-lined streets or riverside paths is a uniquely peaceful experience.
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