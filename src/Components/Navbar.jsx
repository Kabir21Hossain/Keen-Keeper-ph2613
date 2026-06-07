"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiHome } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
    const pathname = usePathname();

    const links = <>
        <li><Link href="/" className={`${pathname == '/' ? 'bg-[#244D3F] text-white' : 'bg-gray-100 text-black'} font-semibold rounded-lg`}> <span className="-mr-2"><CiHome /></span>Home</Link></li>
        <li><Link href="/timeline" className={`${pathname == '/timeline' ? 'bg-[#244D3F] text-white' : 'bg-gray-100 text-black'} font-semibold rounded-lg`}> <span className="-mr-2"><MdAccessTime /></span>Timeline</Link></li>
        <li><Link href="/stat" className={`${pathname == '/stat' ? 'bg-[#244D3F] text-white' : 'bg-gray-100 text-black'} font-semibold rounded-lg`}><span><TfiStatsUp /></span>Stat</Link></li>

    </>
    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-sm p-2 lg:px-[80px] justify-between">
                <div className="navbar-start">
                    <div className="dropdown flex-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>

                    </div>
                    <Link href="/" className="text-2xl font-extrabold text-black"> Keen <span className="text-[#244D3F]">Keeper</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar;