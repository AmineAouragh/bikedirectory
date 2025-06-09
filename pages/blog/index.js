import Image from 'next/image' 
import Link from 'next/link' 
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { TopNavigation } from '@/components/topnavigation'
import { Footer } from '@/components/footer'

export default function Blog(){

    const [ posts, setPosts ] = useState([])

    async function fetchPosts(){
        try {
            const response = await fetch('/api/getAllPosts', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json '}
            })

            if (response.ok) {
                const data = await response.json() 
                setPosts(data.blog_posts) 
                console.log('Blog posts fetched successfully')
                console.log(data.blog_posts)
            } else {
                console.log('Error while fetching blog posts.')
            }
        } catch (error){
            console.error("Error while fetching blog posts: ", error)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [posts])

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <title>Bike Wheels Rentals Blog</title>
            </Head>
            <div className='px-2 flex flex-col w-full h-full justify-center items-center'>
                <TopNavigation />
                <header className="relative my-10 md:my-20 rounded-xl w-full md:w-2/3 flex flex-col justify-center mx-auto">
                    <h1 className='font-Inter text-slate-800 text-3xl md:text-5xl font-bold text-left mb-4'>Bike Wheels Rentals Blog</h1>
                    <p className='text-xl font-Inter mb-8'>Explore bike rental tips, expert guides, and the best places to rent a bike across top cities in Europe and beyond.</p>
                    {
                      posts.length > 0 && (
                        posts.map(
                            (post, index) => (
                                <Link href={post.post_url} target='_blank' className='w-full flex flex-col md:flex-row md:items-center mb-6' key={index}>
                                    <Image
                                      src={post.cover_image} 
                                      alt=''
                                      height={400} 
                                      width={1000}
                                      className='h-[420px] md:w-1/2 w-full rounded-xl object-cover' 
                                    />
                                    <div className='flex w-full md:w-1/2 flex-col items-start md:ml-4'>
                                        <p className='font-Inter mb-6'>{post.created_at.split('T')[0]}</p>
                                        <p className='font-Inter font-bold mb-6 text-2xl md:text-3xl'>{post.title}</p>
                                        <p className='font-Inter text-xl'>{post.subtitle}</p>
                                    </div>
                                </Link>
                            )
                        )
                      )
                    }
                </header>
                <main className='hidden w-full md:w-2/3 mx-auto py-8 md:py-12 xl:py-20'>
                    
                </main>
                <Footer />
            </div>
        </>
    )
}