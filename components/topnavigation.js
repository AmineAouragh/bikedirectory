import Link from 'next/link'

import { MdOutlineDirectionsBike } from "react-icons/md"


export function TopNavigation(){
    return (
        <nav id="topnav" className="flex flex-row items-center px-2 justify-between w-full lg:w-2/3 py-4">
          <Link href="/">
            <div className="flex flex-row items-center">
              <MdOutlineDirectionsBike size="32" className="text-green-800" />
              <span className="ml-2 text-lg md:text-xl xl:text-2xl text-green-800 font-bold">BikeDirectory</span>
            </div>
          </Link>
          <input id="search" type="search" placeholder="Search" className="hidden border border-slate-300 rounded-xl px-3 py-1 w-1/4 outline-none focus:ring-2 focus:ring-blue-500" />
          <ul id="navlist" className="hidden lg:flex flex-row items-center">
            <li className="mr-8 text-lg">
              <Link href="">About</Link>
            </li>
            <li className="mr-8 text-lg">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mr-8 text-lg">
              <Link href="/submit">Submit</Link>
            </li>
            <li className="text-lg rounded-full px-6 py-2 bg-green-800 text-white">
              <Link href="">Browse Bikes</Link>
            </li>
          </ul>
        </nav>
    )
}