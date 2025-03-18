import Link from 'next/link'

import { MdOutlineDirectionsBike } from "react-icons/md"
import { IoMdAddCircleOutline } from "react-icons/io"


export function TopNavigation(){
    return (
        <nav id="topnav" className="flex flex-row items-center px-2 justify-between w-full sm:w-3/4 md:w-2/3 py-2">
          <Link href="/">
            <div className="flex flex-row items-center">
              <MdOutlineDirectionsBike size="32" className="text-green-800" />
              <span className="ml-2 text-lg md:text-xl xl:text-2xl text-green-800 font-bold">BikeDirectory</span>
            </div>
          </Link>
          <input id="search" type="search" placeholder="Search" className="hidden border border-slate-300 rounded-xl px-3 py-1 w-1/4 outline-none focus:ring-2 focus:ring-blue-500" />
          <ul id="navlist" className="hidden lg:flex flex-row items-center">
            <li>
              <Link href="/about" className='mr-4 text-lg font-semibold rounded-full px-6 py-2 hover:bg-slate-100'>About</Link>
            </li>
            <li>
              <Link href="/blog" className="mr-4 text-lg font-semibold rounded-full px-6 py-2 hover:bg-slate-100">Blog</Link>
            </li>
            <li>
              <Link href="/submit" className="flex flex-row items-center mr-4 text-lg font-semibold rounded-full px-6 py-2 hover:bg-slate-100">
                <IoMdAddCircleOutline />
                <span className='ml-2'>Submit</span>
              </Link>
            </li>
            <li>
              <Link href="/browse-bike-shops" className="text-lg rounded-full font-bold px-6 py-2 hover:bg-green-800 bg-green-700 text-white">Browse Shops</Link>
            </li>
          </ul>
        </nav>
    )
}