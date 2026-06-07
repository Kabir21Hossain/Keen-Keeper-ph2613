import Image from 'next/image'
import Link from 'next/link'
import insta from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
const Footer = () => {
    return (
        <div className='bg-[#244D3F] w-full '>

            <footer className="container mx-auto footer footer-horizontal footer-center text-base-content rounded pt-[80px] pb-[30px] px-[80px] min-w-full flex flex-col justify-center items-center gap-2">
                <h2 className='text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#fff] md:mb-[5px]'>KeenKeeper</h2>
                <p className='text-gray-400 text-xs mb-[12px] '>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h4 className="text-lg text-white">Social Links</h4>
                <nav className="grid grid-flow-col gap-4 mt-2 mb-[20px]">
                    <Link href="/">
                        <Image src={insta} alt="" width={30} height={30} className='hover:scale-110 duration-300 ease-in-out'></Image>
                    </Link>
                    <Link href="/">
                        <Image src={twitter} alt="" width={30} height={30} className='hover:scale-110 duration-300 ease-in-out'></Image>
                    </Link>
                    <Link href="/">
                        <Image src={facebook} alt="" width={30} height={30} className='hover:scale-110 duration-300 ease-in-out'></Image>
                    </Link>
                </nav>

                <div className='container mx-auto flex flex-col-reverse md:flex-row lg:flex-row justify-between '>
                    <p className='text-gray-400 text-xs mb-[12px] '> © {new Date().getFullYear()} - KeenKeeper. All rights reserved.</p>

                    <ul className='text-gray-400 text-xs mb-[12px] flex gap-4'>
                        <li><Link href="">Privacy Policy</Link></li>
                        <li><Link href="">Terms Of Service</Link></li>
                        <li><Link href="">Cookies</Link></li>
                    </ul>
                </div>
            </footer>

        </div>
    )
}

export default Footer;