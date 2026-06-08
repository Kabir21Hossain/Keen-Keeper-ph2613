import Image from 'next/image'
import Link from 'next/link'
import insta from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
const Footer = () => {
    return (
        <div className='bg-[#244D3F] w-full'>
            <footer className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
                <div className="flex w-full flex-col items-center text-center gap-4 rounded-xl bg-[#244D3F] p-6 sm:p-8">
                    <h2 className='text-2xl font-extrabold text-white sm:text-3xl lg:text-5xl'>KeenKeeper</h2>
                    <p className='text-gray-300 text-sm sm:text-base max-w-2xl'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <h4 className="text-lg text-white">Social Links</h4>
                    <nav className="grid grid-flow-col place-items-center gap-4 mt-2 mb-4">
                        <Link href="/">
                            <Image src={insta} alt="Instagram" width={30} height={30} className='hover:scale-110 duration-300 ease-in-out' />
                        </Link>
                        <Link href="/">
                            <Image src={twitter} alt="Twitter" width={30} height={30} className='hover:scale-110 duration-300 ease-in-out' />
                        </Link>
                        <Link href="/">
                            <Image src={facebook} alt="Facebook" width={30} height={30} className='hover:scale-110 duration-300 ease-in-out' />
                        </Link>
                    </nav>
                </div>

                <div className='mt-8 flex w-full flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-300 md:flex-row md:items-center md:justify-between'>
                    <p className='text-center md:text-left'>© {new Date().getFullYear()} - KeenKeeper. All rights reserved.</p>
                    <ul className='flex flex-wrap justify-center gap-4 text-center md:justify-end'>
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