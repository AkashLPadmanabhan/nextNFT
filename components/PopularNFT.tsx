import React from 'react'
import NFTcard from './Helper/NFTcard'

const PopularNFT = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-blue-950'>
      <div className='text-center'>
        <p className='heading__mini'>Popular Item</p>
        <h1 className='heading__primary'>Explore Popular <span className='text-yellow-300'>NFTs</span></h1>
      </div>
      <div className='w-[80%] pt-[5rem] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1.5rem]'>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <NFTcard image="/images/nft1.svg" title="Warrior" author="Alexandria" price="0.34"/>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay='100'>
          <NFTcard image="/images/nft2.svg" title="Magnificent" author="Drake" price="1.66"/>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay='200'>
          <NFTcard image="/images/nft3.svg" title="Conqueror" author="=Joe" price="0.51"/>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay='300'>
          <NFTcard image="/images/nft4.svg" title="Terrible" author="Tarley" price="1.02"/>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay='400'>
          <NFTcard image="/images/nft5.svg" title="Great" author="Baldwin" price="2.94"/>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay='500'>
          <NFTcard image="/images/nft6.svg" title="Sick" author="Connor" price="0.44"/>
        </div>
      </div>
    </div>
  )
}

export default PopularNFT