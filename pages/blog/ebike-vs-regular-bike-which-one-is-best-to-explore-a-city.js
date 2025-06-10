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
            <div className=' px-2 flex flex-col w-full h-full justify-center items-center'>
                <TopNavigation />
                <header className='relative py-4 w-full md:w-2/3 rounded-md flex flex-col mt-4 lg:mt-8 mx-auto'>
                  <Breadcrumb className="mb-8 mr-auto">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink className="font-Inter text-slate-600" href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink className="font-Inter text-slate-600" href="/blog/?ref=blog_post">Posts</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage className="font-Inter text-slate-800 font-semibold">E-Bike vs Regular Bike: Which One is Best To Explore a City?</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <h1 className='font-Inter text-slate-800 font-bold text-3xl mb-6 md:text-4xl lg:text-5xl xl:text-6xl leading-4'>E-Bike vs Regular Bike: Which One is Best To Explore a City?</h1>              
                  <p className='font-Inter text-xl text-slate-600'>Your guide to choosing between e-bikes and regular bikes for exploring the city with ease.</p>
                </header>
                <section className='relative flex flex-col lg:flex-row lg:items-start w-full md:w-2/3 mt-3 lg:mt-6 mx-auto py-4'>
                    <div className='w-full overflow-y-scroll lg:w-1/4 z-10 bg-slate-50 p-4 md:top-32 left-0 absolute md:sticky mb-4 rounded-md'>
                      <p className='mb-3 font-bold font-Inter'>Table of Contents</p>
                      <h2 className='font-Inter text-md text-slate-800 mb-3 hover:underline'><Link href="#1">What&apos;s the Difference Between an E-Bike and a Regular Bike?</Link></h2>
                      <h2 className='font-Inter text-md text-slate-800 mb-3 hover:underline'><Link href="#2">Pros and Cons of E-bikes for City Exploration</Link></h2>
                      <h2 className='font-Inter text-sm ml-4 text-slate-800 mb-3 hover:underline'><Link href="#3">Pros</Link></h2>
                      <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#4">1. Less Effort, More Distance</Link></h2>
                      <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#5">2. Great for Hilly Areas</Link></h2>
                      <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#6">3. Faster Travel</Link></h2>
                      <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#7">4. Ideal for All Fitness Levels</Link></h2>
                      <h2 className='font-Inter text-sm ml-4 text-slate-800 mb-3 hover:underline'><Link href="#8">Cons</Link></h2>
                      <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#9">1. Heavier Than Regular Bikes</Link></h2>
                      <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#10">2. More Expensive</Link></h2>
                      <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#11">3. Needs Charging</Link></h2>
                      <h2 className='font-Inter text-md text-slate-800 mb-3 hover:underline'><Link href="#12">Pros and Cons of Using a Regular Bike in the City</Link></h2>
                      <h2 className='font-Inter text-sm ml-4 text-slate-800 mb-3 hover:underline'><Link href="#13">Pros</Link></h2>
                      <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#14">1. Affordable and Low Maintenance</Link></h2>
                      <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#15">2. Lightweight and Easy to Store</Link></h2>
                      <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#16">3. Better for Fitness</Link></h2>
                      <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#17">4. No Charging Required</Link></h2>
                      <h2 className='font-Inter text-sm ml-4 text-slate-800 mb-3 hover:underline'><Link href="#18">Cons</Link></h2>
                      <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#19">1. Can Be Tiring Over Long Distances</Link></h2>
                      <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#20">2. Challenging for Older Riders or Those with Injuries</Link></h2>
                      <h2 className='font-Inter text-md text-slate-800 mb-3 hover:underline'><Link href="#21">Best Bike Choice for Different Types of Riders in the City</Link></h2>
                      <h2 className='font-Inter text-sm ml-4 text-slate-800 mb-3 hover:underline'><Link href="#22">Tourists and Sightseers</Link></h2>
                      <h2 className='font-Inter text-sm ml-4 text-slate-800 mb-3 hover:underline'><Link href="#23">Fitness Enthusiasts</Link></h2>
                      <h2 className='font-Inter text-sm ml-4 text-slate-800 mb-3 hover:underline'><Link href="#24">Budget-Conscious Travelers</Link></h2>
                      <h2 className='font-Inter text-sm ml-4 text-slate-800 mb-3 hover:underline'><Link href="#25">Urban Explorers with Limited Storage</Link></h2>
                    </div>
                    <div className='relative flex flex-col lg:ml-8 w-full lg:w-3/4 items-start'>
                        <p className='font-Inter text-slate-800 text-lg'>
                            Exploring a city on two wheels is one of the most enjoyable and sustainable ways to get around. 
                            But when it comes to choosing the right ride, many people find themselves torn between two options: <span className='font-bold'>e-bikes</span> and <span className='font-bold'>regular bikes</span>. 
                            Both have unique benefits, and the best choice depends on your needs, preferences, and the city you're in.
                            <br /> <br />
                            In this guide, we break down the pros and cons of e-bikes vs regular bikes to help you decide which one is better for city exploration.
                        </p>
                        <h2 id='1' className='my-4 lg:my-8 text-3xl text-slate-800 font-bold font-Inter'>
                            What&apos;s the Difference Between an E-Bike and a Regular Bike?
                        </h2>
                        <p className='font-Inter text-slate-800 text-lg mb-4'>
                            A regular bike is your classic pedal-powered bicycle. 
                            It&apos;s simple, lightweight, and requires no battery or motor.
                        </p>
                        <p className='font-Inter mb-4 text-slate-800 text-lg'>
                            An e-bike (electric bike), on the other hand, comes with a battery-powered motor that assists your pedaling. 
                            It doesn&apos;t mean you&apos;re not pedaling at all, but the motor gives you a boost—especially useful on hills or longer rides.
                        </p>
                        <h2 id='2' className='my-2 lg:my-4 text-3xl text-slate-800 font-bold font-Inter'>
                            Pros and Cons of E-bikes for City Exploration
                        </h2>
                        <h3 id='3' className='my-2 lg:my-4 text-2xl text-slate-800 font-bold font-Inter'>
                            Pros:
                        </h3>
                        <h4 id='4' className='my-2 lg:my-4 text-slate-800 font-semibold text-xl font-Inter'>
                            1. Less Effort, More Distance
                        </h4>
                        <p className='font-Inter text-slate-800 text-lg'>
                            With pedal-assist, you can travel longer distances without getting exhausted—perfect for covering more ground in a big city.
                        </p>
                        <h4 id='5' className='my-2 lg:my-4 text-slate-800 font-semibold text-xl font-Inter'>
                            2. Great for Hilly Areas
                        </h4>
                        <p className='font-Inter text-slate-800 text-lg'>
                            Cities with lots of inclines are far more manageable on an e-bike.
                            Cities like San Francisco or Lisbon become much more accessible.
                        </p>
                        <h4 id='6' className='my-2 lg:my-4 text-slate-800 font-semibold text-xl font-Inter'>
                            3. Faster Travel
                        </h4>
                        <p className='font-Inter text-slate-800 text-lg'>
                            You can maintain higher average speeds with less effort, making e-bikes great for avoiding traffic and saving time.
                            E-bikes can reach speeds of 15-28 mph (depending on local laws), allowing you to cover more ground.
                        </p>
                        <h4 id='7' className='my-2 lg:my-4 text-slate-800 font-semibold text-xl font-Inter'>
                            4. Ideal for All Fitness Levels
                        </h4>
                        <p className='font-Inter mb-2 text-slate-800 text-lg'>
                            E-bikes are accessible for people of all ages and fitness levels, making urban exploration inclusive.
                        </p>
                        <h3 id='8' className='my-2 lg:my-4 text-2xl text-slate-800 font-bold font-Inter'>
                            Cons:
                        </h3>
                        <h4 id='9' className='my-2 lg:my-4 text-slate-800 font-semibold text-xl font-Inter'>
                            1. Heavier Than Regular Bikes
                        </h4>
                        <p className='font-Inter text-slate-800 text-lg'>
                            E-bikes can weigh twice as much as a standard bike, making them harder to carry or store in small spaces.
                        </p>
                        <h4 id='10' className='my-2 lg:my-4 text-slate-800 font-semibold text-xl font-Inter'>
                            2. More Expensive
                        </h4>
                        <p className='font-Inter text-slate-800 text-lg'>
                            Initial cost, battery replacements, and maintenance make e-bikes a bigger investment. 
                            If you rent an e-bike from a bike shop they might have a mechanic who can take care of the bike maintenance for you. <br />
                            If you are interested in renting an e-bike, we have a <Link href="/bike-shops/?ref=blog_post" className='font-semibold underline decoration-dotted underline-offset-4'>list of bike shops</Link> you might want to have a look at.
                        </p>
                        <h4 id="11" className='my-2 lg:my-4 text-slate-800 font-semibold text-xl font-Inter'>
                            3. Needs Charging
                        </h4>
                        <p className='font-Inter mb-4 text-slate-800 text-lg'>
                            You&apos;ll need to remember to charge the battery, especially before a long day of riding.
                        </p>
                        <h2 id='12' className='my-2 lg:my-4 text-3xl text-slate-800 font-bold font-Inter'>
                            Pros and Cons of Using a Regular Bike in the City
                        </h2>
                        <h3 id='13' className='my-2 lg:my-4 text-2xl text-slate-800 font-bold font-Inter'>
                            Pros:
                        </h3>
                        <h4 id='14' className='my-2 lg:my-4 text-slate-800 font-semibold text-xl font-Inter'>
                            1. Affordable and Low Maintenance
                        </h4>
                        <p className='font-Inter text-slate-800 text-lg'>
                            No motor, no battery—just a straightforward ride. They&apos;re cheaper to buy and easier to repair.
                        </p>
                        <h4 id='15' className='my-2 lg:my-4 text-slate-800 font-semibold text-xl font-Inter'>
                            2. Lightweight and Easy to Store
                        </h4>
                        <p className='font-Inter text-slate-800 text-lg'>
                            Great for apartment dwellers or those needing to carry their bike up stairs or on public transit.
                        </p>
                        <h4 id='16' className='my-2 lg:my-4 text-slate-800 font-semibold text-xl font-Inter'>
                            3. Better for Fitness
                        </h4>
                        <p className='font-Inter text-slate-800 text-lg'>
                            A regular bike gives you a full-body workout while you explore.
                        </p>
                        <h4 id='17' className='my-2 lg:my-4 text-slate-800 font-semibold text-xl font-Inter'>
                            4. No Charging Required
                        </h4>
                        <p className='font-Inter  mb-2 text-slate-800 text-lg'>
                            Just hop on and go—no need to worry about battery levels.
                        </p>
                        <h3 id='18' className='my-2 lg:my-4 text-2xl text-slate-800 font-bold font-Inter'>
                            Cons:
                        </h3>
                        <h4 id='19' className='my-2 lg:my-4 text-slate-800 font-semibold text-xl font-Inter'>
                            1. Can Be Tiring Over Long Distances
                        </h4>
                        <p className='font-Inter text-slate-800 text-lg'>
                            Riding 15-20 km in a single day, especially with hills or headwinds, can wear you out.
                            You&apos;re likely to break a sweat, especially in warm weather or on uphill routes — not ideal if you&apos;re heading to an event for example.
                            Also carrying a backpack can feel unbalanced or exhausting over time.
                        </p>
                        <h4 id='20' className='my-2 lg:my-4 text-slate-800 font-semibold text-xl font-Inter'>
                            2. Challenging for Older Riders or Those with Injuries
                        </h4>
                        <p className='font-Inter text-slate-800 mb-4 text-lg'>
                            People with joint issues, limited mobility, or lower fitness levels may find traditional bikes physically demanding or even inaccessible.
                        </p>
                        <h2 id='21' className='my-2 lg:my-4 text-3xl text-slate-800 font-bold font-Inter'>
                            Best Bike Choice for Different Types of Riders in the City
                        </h2>
                        <h3 id='22' className='my-2 lg:my-4 text-2xl text-slate-800 font-bold font-Inter'>
                            Tourists and Sightseers:
                        </h3>
                        <p className='font-Inter text-slate-800 text-lg'>
                            E-bikes are an excellent choice for tourists exploring a city, allowing you to cover more distance quickly and comfortably without getting tired. 
                            With pedal-assist technology, e-bikes help you enjoy sightseeing without the physical strain of a traditional bike.
                        </p>
                        <h3 id='23' className='my-2 lg:my-4 text-2xl text-slate-800 font-bold font-Inter'>
                            Fitness Enthusiasts:
                        </h3>
                        <p className='font-Inter text-slate-800 text-lg'>
                            If your goal is a challenging workout while getting around town, regular bikes remain the top pick. 
                            Cycling on a traditional bike engages your muscles fully and improves cardiovascular health, perfect for riders focused on fitness and endurance.
                        </p>
                        <h3 id='24' className='my-2 lg:my-4 text-2xl text-slate-800 font-bold font-Inter'>
                            Budget-Conscious Travelers:
                        </h3>
                        <p className='font-Inter text-slate-800 text-lg'>
                            Regular bikes are generally more affordable both to rent and buy, making them a smart choice for travelers on a budget. 
                            They&apos;re widely available for rent in most cities, offering flexibility without breaking the bank. <br />
                            At Bike Wheels Rentals, we have multiple bike shops renting bikes in major European cities like Lisbon, Barcelona, Berlin and Roma.
                        </p>
                        <h3 id='25' className='my-2 lg:my-4 text-2xl text-slate-800 font-bold font-Inter'>
                            Urban Explorers with Limited Storage:
                        </h3>
                        <p className='font-Inter text-slate-800 mb-4 text-lg'>
                            For city dwellers or travelers with limited storage space, regular bikes are easier to carry upstairs, fit into small apartments, or store in compact areas. 
                            Their lighter weight and simpler design make them more convenient in tight urban environments.
                        </p>
                        <h2 id='26' className='my-2 lg:my-4 text-3xl text-slate-800 font-bold font-Inter'>
                            Final Verdict: E-Bike or Regular Bike?
                        </h2>
                        <p className='font-Inter text-slate-800 text-lg mb-2'>
                            So, which is best to explore a city—an e-bike or a regular bike?
                        </p>
                        <p className='font-Inter text-slate-800 text-lg mb-2'>
                            If your goal is comfort, speed, and covering long distances, go for an e-bike. 
                            It&apos;s especially useful in hilly cities or if you're short on time.
                        </p>
                        <p className='font-Inter text-slate-800 text-lg mb-2'>
                            But if you prefer a budget-friendly, eco-conscious workout, and you&apos;re not in a rush, a regular bike is a timeless and reliable option.
                        </p>
                        <p className='font-Inter text-slate-800 text-lg'>
                            Ultimately, the best bike for city exploration depends on your preferences, fitness level, and the kind of adventure you&apos;re looking for.
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