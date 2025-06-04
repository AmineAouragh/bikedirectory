import Image from 'next/image' 
import Link from 'next/link' 
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { TopNavigation } from '@/components/topnavigation'
import { Footer } from '@/components/footer'

export default function Blog(){
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <title>Bike Wheels Rentals Blog</title>
            </Head>
            <div className='px-2 flex flex-col w-full h-full justify-center items-center'>
                <TopNavigation />
                <Footer />
            </div>
        </>
    )
}