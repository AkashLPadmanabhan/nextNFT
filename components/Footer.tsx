import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-blue-900'>
        <div className='w-[80%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[3rem]'>
            <div>
            <h1 className='text-[20px] sm:text-[30px] text-white'>
                Nf<span className='text-yellow-300'>tf</span>y
            </h1>
            <p className='text-[14px] text-white opacity-60 mt-[1rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                fugit optio accusantium, aperiam vero iure sed, fugiat nostrum id
                commodi maiores obcaecati blanditiis harum laudantium?
            </p>
            <p className='text-[14px] text-white opacity-60 mt-[1.4rem]'>
                Contact : (+100) 912-4221-998
            </p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>Information</h1>
                <p className='footer__link'>About Us</p>
                <p className='footer__link'>Privacy Policy</p>
                <p className='footer__link'>Wallet</p>
                <p className='footer__link'>Bidding</p>
                <p className='footer__link'>FAQ</p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>Account</h1>
                <p className='footer__link'>Dashboard</p>
                <p className='footer__link'>My Bidding</p>
                <p className='footer__link'>My Wishlist</p>
                <p className='footer__link'>Account Details</p>
                <p className='footer__link'>Track My Sell</p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>Shop</h1>
                <p className='footer__link'>Affiliate</p>
                <p className='footer__link'>Best Sellers</p>
                <p className='footer__link'>Discount</p>
                <p className='footer__link'>Latest Product</p>
                <p className='footer__link'>Sale Products</p>
            </div>
        </div>
        <div className='mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto'>
            <p className='text-[14px] text-white opacity-60'>© 2022 Nftfy. All rights reserved</p>
            <Image src="/images/pay.svg" alt="pay" width={2300} height={230} className='object-contain sm:ml-auto' />
        </div>
    </div>
  )
}

export default Footer