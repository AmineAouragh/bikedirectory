import Link from 'next/link'
import Head from 'next/head'

import { MdOutlineDirectionsBike } from "react-icons/md"
import { IoMdAddCircleOutline } from "react-icons/io"


export function TopNavigation(){
    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <title>Bikes for Rent Near Me | 2Wheels Directory</title>
        </Head>
        <nav id="topnav" className="flex flex-row items-center px-2 justify-between w-full sm:w-3/4 md:w-2/3 py-6">
          <Link href="/">
            <div className="flex flex-row items-center">
              <MdOutlineDirectionsBike size="28" className="text-green-600" />
              <span className="ml-2 text-xl xl:text-2xl font-Inter text-green-600 font-bold">2Wheels Directory</span>
            </div>
          </Link>
          <input id="search" type="search" placeholder="Search" className="hidden border border-slate-300 rounded-xl px-3 py-1 w-1/4 outline-none focus:ring-2 focus:ring-blue-500" />
          <ul id="navlist" className="hidden lg:flex flex-row items-center">
            <li>
              <Link href="/submit" className="flex flex-row items-center mr-4 text-lg font-semibold rounded-full px-6 py-2 hover:bg-slate-100">
                <IoMdAddCircleOutline />
                <span className='ml-2'>Submit</span>
              </Link>
            </li>
            <li>
              <Link href="/bike-shops" className="text-lg rounded-full font-bold px-5 py-3 hover:bg-green-700 bg-green-600 text-white">Browse Shops</Link>
            </li>
          </ul>
        </nav>
      </>
        
    )
}