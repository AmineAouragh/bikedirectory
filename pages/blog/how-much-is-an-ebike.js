import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { TopNavigation } from '@/components/topnavigation'
import { Footer } from '@/components/footer'
import rad_power_bikes from '../../public/images/rad_power_bikes.png'
import aventon_bikes from '../../public/images/aventon_bikes.png'
import ride1up from '../../public/images/ride1up.png'
import lectric from '../../public/images/lectric.png'
import amazon from '../../public/images/amazon.png'

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
            const response = await fetch(`/api/getPostByTitle?blog_post_title=E-Bike Price in 2025: What You Need To Know Before You Buy`, {
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
            <div className='px-2 flex flex-col w-full h-full justify-center items-center'>
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
                          <BreadcrumbPage className="font-Inter text-slate-800 font-semibold">E-Bike Price in 2025: What You Need To Know Before You Buy</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <h1 className='font-Inter text-slate-800 font-bold text-3xl mb-6 md:text-4xl lg:text-5xl xl:text-6xl'>E-Bike Price in 2025: What You Need To Know Before You Buy</h1>              
                  <p className='font-Inter text-xl text-slate-600'>Discover how much an e-bike costs in 2025 with our comprehensive pricing guide covering new and used e-bikes.</p>
                </header>
                <section className='relative flex flex-col lg:flex-row lg:items-start w-full md:w-2/3 mt-3 lg:mt-6 mx-auto py-4'>
                    <div className='w-full  lg:w-1/4 z-10 bg-slate-50 p-4 md:top-32 left-0 absolute md:sticky mb-4 rounded-md'>
                        <p className='mb-3 font-bold font-Inter'>Table of Contents</p>
                        <h2 className='font-Inter text-md text-slate-800 mb-3 hover:underline'><Link href="#1">E-Bike Price Range in 2025</Link></h2>
                        <h2 className='font-Inter text-md text-slate-800 mb-3 hover:underline'><Link href="#2">E-Bike Price Factors: What Affects the Cost?</Link></h2>
                        <h2 className='font-Inter text-md text-slate-800 mb-3 hover:underline'><Link href="#3">How Much Does a Used E-Bike Cost?</Link></h2>
                        <h2 className='font-Inter text-md text-slate-800 mb-3 hover:underline'><Link href="#4">Where to Buy an E-Bike in 2025</Link></h2>
                        <h2 className='font-Inter text-sm ml-4 text-slate-800 mb-3 hover:underline'><Link href="#5">1. Online Retailers</Link></h2>
                        <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#6">Rad Power Bikes</Link></h2>
                        <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#7">Aventon</Link></h2>
                        <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#8">Ride1Up</Link></h2>
                        <h2 className='font-Inter text-sm ml-6 text-slate-800 mb-3 hover:underline'><Link href="#9">Lectric eBikes</Link></h2>
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
                                className='rounded-md w-full mb-5 h-[440px] object-cover object-top' 
                        />
                    }
                    <p className='font-Inter text-slate-800 text-lg mb-2'>
                        Electric bikes (e-bikes) are no longer a niche product — they&apos;re a modern, eco-friendly way to commute, explore cities, and even replace your car or your regular bike. 
                        We have <Link href="/blog/ebike-vs-regular-bike-which-one-is-best-to-explore-a-city" target='_blank' className='font-bold hover:underline text-green-700'>a guide where we compare e-bikes vs regular bikes</Link> you might be interested to read. 
                        But one of the first questions people ask before deciding to buy an e-bike is: how much does an e-bike cost in 2025?
                    </p>
                    <p className='font-Inter text-slate-800 text-lg'>
                        In this guide, we&apos;ll break down the latest e-bike prices, factors that affect cost, and what you can expect when buying a new or used e-bike this year.
                    </p>
                    <h2 id='1' className='my-8 text-3xl text-slate-800 font-bold font-Inter'>
                        E-Bike Price Range in 2025
                    </h2>
                    <table>
                        <thead>
                        <tr className='bg-slate-50'>
                            <th className='font-Inter text-xl border p-4'>Type of E-Bike</th>
                            <th className='font-Inter text-xl border p-4'>Price Range (USD)</th>
                            <th className='font-Inter text-xl border p-4'>Typical Use</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>Entry-Level</td>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>$600-$1,200</td>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>Casual riding, short commutes</td>
                        </tr>
                        <tr>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>Mid-Range</td>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>$1,200-$2,500</td>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>Daily commuting, longer city rides</td>
                        </tr>
                        <tr>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>High-End</td>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>$2,500-$5,000+</td>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>Premium components, long range, hill climbing</td>
                        </tr>
                        <tr>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>Cargo or Utility E-Bikes</td>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>$3,000-$8,000+</td>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>Hauling, family transport, delivery</td>
                        </tr>
                        <tr>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>Folding E-Bikes</td>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>$800-$2,000</td>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>Compact storage, city living</td>
                        </tr>
                        <tr>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>Off-Road/Mountain E-Bikes</td>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>$2,000-$7,000+</td>
                            <td className='font-Inter text-lg text-slate-800 border p-4'>Trails, steep climbs, rugged terrain</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className='mt-6 rounded-xl p-4 bg-yellow-50'>
                        <p className='font-Inter text-slate-800 text-lg'>
                            <span className='font-bold'>Tip:</span> Most quality commuter e-bikes fall in the $1,200-$2,500 range, offering solid battery life, comfort, and reliability.
                        </p>
                    </div>
                    <h2 id='2' className='my-8 text-3xl text-slate-800 font-bold font-Inter'>
                        E-Bike Price Factors: What Affects the Cost?
                    </h2>
                    <p className='font-Inter text-slate-800 text-lg mb-6'>
                        Understanding what drives the cost of an e-bike in 2025 helps you make a smarter purchase based on your needs. 
                        Whether you're a casual rider or a daily commuter, these key factors will influence how much you&apos;ll pay — and what kind of performance you can expect.
                    </p>
                    <h3 id='3' className='font-Inter text-slate-800 text-2xl font-bold mb-6'>1. Battery Capacity & Range</h3>
                    <p className='font-Inter text-slate-800 text-lg mb-4'>
                        <span className='font-bold'>Explanation:</span> E-bikes with larger battery capacities (measured in watt-hours, or Wh) offer longer riding ranges — up to 100+ miles on a single charge.
                    </p>
                    <p className='font-Inter text-slate-800 text-lg mb-4'>
                        <span className='font-bold'>Cost Impact:</span> Bigger batteries = higher cost. Expect a price increase of $200-$800 for long-range capability.
                    </p>
                    <p className='font-Inter text-slate-800 text-lg mb-4'>
                        Best for commuters riding 10-30 miles daily, tourists exploring cities all day, adventure riders needing all-day range.
                    </p>
                    <p className='mb-6 rounded-xl px-3 py-2 bg-slate-50 font-Inter text-slate-800 text-lg font-semibold italic'>👉 Look for 500Wh to 750Wh batteries if you want range and reliability.</p>
                    <h3 id='4' className='font-Inter text-slate-800 text-2xl font-bold mb-6'>2. Motor Type & Power</h3>
                    <p className='font-Inter text-slate-800 text-lg mb-4'>

                    </p>
                    <p className='font-Inter text-slate-800 text-lg mb-4'>
                        <span className='font-bold'>- Build Quality:</span> Lightweight frames, hydraulic brakes, and suspension add to the price.
                    </p>
                    <p className='font-Inter text-slate-800 text-lg mb-4'>
                        <span className='font-bold'>- Features:</span> Integrated lights, displays, GPS, and smart tech increase the cost.
                    </p>
                    <p className='font-Inter text-slate-800 text-lg'>
                        <span className='font-bold'>- Brand Reputation:</span> Established brands often charge a premium for reliability and support.
                    </p>
                    <h2 id='3' className='my-8 text-3xl text-slate-800 font-bold font-Inter'>
                      How Much Does a Used E-Bike Cost?
                    </h2>
                    <p className='font-Inter text-slate-800 text-lg mb-8'>
                        Buying a used e-bike can save you hundreds — but it comes with trade-offs. Here&apos;s what you can expect:
                    </p>
                    <table>
                        <thead>
                        <tr className='bg-slate-50'>
                            <th className='font-Inter text-xl border p-4'>Condition</th>
                            <th className='font-Inter text-xl border p-4'>Price Range (USD)</th>
                            <th className='font-Inter text-xl border p-4'>Notes</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className='font-Inter text-lg border p-4'>
                                Lightly Used (1-2 yrs)
                            </td>
                            <td className='font-Inter text-lg border p-4'>
                                $500-$1,800
                            </td>
                            <td className='font-Inter text-lg border p-4'>
                                Check battery health and mileage
                            </td>
                        </tr>
                        <tr>
                            <td className='font-Inter text-lg border p-4'>
                                Older Models (3+ yrs)
                            </td>
                            <td className='font-Inter text-lg border p-4'>
                                $300-$1,200
                            </td>
                            <td className='font-Inter text-lg border p-4'>
                                May require maintenance or battery replacement
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className='mt-6 rounded-xl p-4 bg-yellow-50'>
                        <p className='font-Inter text-slate-800 text-lg'>
                            <span className='font-bold'>Tip:</span> Always ask for the battery cycle count and test the bike before buying secondhand. E-bike batteries degrade over time and can be costly to replace (up to $800).
                        </p>
                    </div>
                    <h2 id='4' className='my-8 text-3xl text-slate-800 font-bold font-Inter'>
                        Where to Buy an E-Bike in 2025
                    </h2>
                    <h3 id='5' className='font-Inter text-slate-800 text-2xl font-bold mb-8'>
                        1. Online Retailers:
                    </h3>
                    <Link href="https://www.radpowerbikes.com/?ref=bikewheelsrentals" target='_blank' id='6' className='mb-4 font-Inter hover:text-green-700 underline text-slate-700 text-2xl font-bold'>RadPowerBikes.com</Link>
                    <p className='font-Inter text-slate-800 text-lg mb-6'>
                        One of the most popular direct-to-consumer e-bike brands in North America, Rad Power Bikes is known for its rugged, affordable models designed for commuters, adventurers, and families alike.
                    </p>
                    <Link target='_blank' href="https://www.radpowerbikes.com/?ref=bikewheelsrentals_blog_post" className='underline decoration-dotted underline-offset-4 decoration-slate-700 font-Inter text-slate-700 text-2xl font-semibold mb-4'>
                        <Image
                          src={rad_power_bikes}
                          alt=''
                          height={400}
                          width={900}
                          objectFit='cover'
                          className='rounded-xl' 
                        />
                    </Link>
                    <h4 className='font-Inter text-slate-800 text-xl mb-4'>Quick links:</h4>
                    <Link href="https://www.radpowerbikes.com/collections/electric-city-commuter-bikes/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-2'>Electric Bikes for Commuting</Link>
                    <Link href="https://www.radpowerbikes.com/collections/electric-folding-bikes/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-8'>Folding Electric Bikes</Link>
                    <Link target='_blank' href="https://www.aventon.com/?ref=bikewheelsrentals_blog_post" id='7' className='mb-4 font-Inter hover:text-green-700 text-slate-700 underline text-2xl font-bold'>Aventon.com</Link>
                    <p className='font-Inter text-slate-800 text-lg mb-6'>
                        Aventon offers sleek, performance-oriented electric bikes with great value and modern styling. Their models are ideal for urban riders looking for a balance of power, comfort, and design.
                    </p>
                    <Link target='_blank' href="https://www.aventon.com/?ref=bikewheelsrentals_blog_post" className='underline decoration-dotted underline-offset-4 decoration-slate-700 font-Inter text-slate-700 text-2xl font-semibold mb-4'>
                        <Image
                          src={aventon_bikes}
                          alt=''
                          height={400}
                          width={900}
                          objectFit='cover'
                          className='rounded-xl' 
                        />
                    </Link>
                    <h4 className='font-Inter text-slate-800 text-xl mb-4'>Quick links:</h4>
                    <Link href="https://www.aventon.com/collections/electric-commuter-bike/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-2'>Electric Bikes for Commuting</Link>
                    <Link href="https://www.aventon.com/collections/folding-electric-bike/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-2'>Folding Electric Bikes</Link>
                    <Link href="https://www.aventon.com/collections/ebikes?price=us_price_under_1000/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-2'>Electric Bikes under $1000</Link>
                    <Link href="https://www.aventon.com/collections/ebikes?price=us_price_1000_to_1500/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-8'>Electric Bikes between $1000 and $1500</Link>
                    <Link target='_blank' href="https://www.ride1up.com/?ref=bikewheelsrentals_blog_post" id='8' className='mb-4 font-Inter text-slate-700 underline hover:text-green-700 text-2xl font-bold'>Ride1Up.com</Link>
                    <p className='font-Inter text-slate-800 text-lg mb-6'>
                        Ride1Up focuses on high-quality commuter e-bikes at mid-range prices. Their bikes are praised for smooth rides, clean aesthetics, and excellent specs without the luxury markup.
                    </p>
                    <Link target='_blank' href="https://www.ride1up.com/?ref=bikewheelsrentals_blog_post" className='underline decoration-dotted underline-offset-4 decoration-slate-700 font-Inter text-slate-700 text-2xl font-semibold mb-4'>
                        <Image
                          src={ride1up}
                          alt=''
                          height={400}
                          width={900}
                          objectFit='cover'
                          className='rounded-xl' 
                        />
                    </Link>
                    <h4 className='font-Inter text-slate-800 text-xl mb-4'>Quick links:</h4>
                    <Link href="https://ride1up.com/product-category/bikes/affordable-electric-bikes/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-2'>Affordable Electric Bikes for Sale</Link>
                    <Link href="https://ride1up.com/product-category/bikes/electric-commuter-bikes/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-2'>Electric Bikes for Commuting</Link>
                    <Link href="https://ride1up.com/product-category/bikes/step-through-electric-bikes/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-8'>Step Through E-Bikes</Link>
                    <Link target='_blank' href="https://lectricebikes.com/?ref=bikewheelsrentals_blog_post" id='9' className='font-Inter underline hover:text-green-700 text-slate-700 text-2xl font-bold mb-4'>LectriceBikes.com</Link>
                    <p className='font-Inter text-slate-800 text-lg mb-6'>
                        Lectric specializes in affordable, foldable e-bikes that are great for travel, urban commuting, and RV life. Their XP series is especially popular among budget-conscious riders.
                    </p>
                    <Link target='_blank' href="https://lectricebikes.com/?ref=bikewheelsrentals_blog_post" className='underline decoration-dotted underline-offset-4 decoration-slate-700 font-Inter text-slate-700 text-2xl font-semibold mb-4'>
                        <Image
                          src={lectric}
                          alt=''
                          height={400}
                          width={900}
                          objectFit='cover'
                          className='rounded-xl' 
                        />
                    </Link>
                    <h4 className='font-Inter text-slate-800 text-xl mb-4'>Quick links:</h4>
                    <Link href="https://lectricebikes.com/collections/commuter-ebikes/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-2'>Electric Bikes for Commuting</Link>
                    <Link href="https://lectricebikes.com/collections/cargo-ebikes/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-2'>Cargo E-Bikes</Link>
                    <Link href="https://lectricebikes.com/collections/folding-ebikes/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-8'>Folding E-Bikes</Link>
                    <Link target='_blank' href="https://www.amazon.com/?ref=bikewheelsrentals_blog_post" id='8' className='mb-4 font-Inter text-slate-700 underline hover:text-green-700 text-2xl font-bold'>Amazon</Link>
                    <p className='font-Inter text-slate-800 text-lg mb-6'>
                        Amazon provides a massive selection of e-bikes from various brands and price points. It's a convenient option for comparing models, reading customer reviews, and accessing fast shipping.
                    </p>
                    <Link target='_blank' href="https://www.amazon.com/s?k=electric+bike+for+adults/?ref=bikewheelsrentals_blog_post" className='underline decoration-dotted underline-offset-4 decoration-slate-700 font-Inter text-slate-700 text-2xl font-semibold mb-4'>
                        <Image
                          src={amazon}
                          alt=''
                          height={400}
                          width={900}
                          objectFit='cover'
                          className='rounded-xl' 
                        />
                    </Link>
                    <h4 className='font-Inter text-slate-800 text-xl mb-4'>Quick links:</h4>
                    <Link href="https://ride1up.com/product-category/bikes/affordable-electric-bikes/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-2'>Affordable Electric Bikes for Sale</Link>
                    <Link href="https://ride1up.com/product-category/bikes/electric-commuter-bikes/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-2'>Electric Bikes for Commuting</Link>
                    <Link href="https://ride1up.com/product-category/bikes/step-through-electric-bikes/?ref=bikewheelsrentals_blog_post" target='_blank' className='text-green-600 font-bold font-Inter text-lg mb-8'>Step Through E-Bikes</Link>
                    <h3 id='10' className='font-Inter text-slate-800 text-2xl font-bold mt-2 mb-4'>
                        2. Local Bike Shops:
                    </h3>
                    <p className='font-Inter text-slate-800 text-lg mb-6'>
                        Buying from a local bike shop offers personalized service, expert advice, and the chance to test ride before you buy. 
                        It&apos;s also a great option for ongoing maintenance, fitting adjustments, and supporting small businesses in your community.
                    </p>
                    <div className='mt-2 mb-6 rounded-xl p-4 bg-yellow-50'>
                        <p className='font-Inter text-slate-800 text-lg'>
                            If you want to rent an e-bike to test ride it, we have at Bike Wheels Rentals multiple bike shops in different European cities you can choose from. 
                        </p>
                    </div>
                  </div>
                  
                </section>
                <div className='py-10 px-12 mx-auto w-full md:w-2/3 mb-20'>

                </div>
                <Footer />
            </div>
        </>
    )
}