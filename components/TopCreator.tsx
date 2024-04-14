import React from 'react'
import CreatorCard from './Helper/CreatorCard'

const TopCreator = () => {
  return (
    <div className='pb-[3rem] bg-blue-950 pt-[5rem]'>
        <div className='text-center'>
            <p className='heading__mini'>Creator</p>
            <h1 className='heading__primary'>Top <span className='text-yellow-300'>Creators</span> of Today</h1>
        </div>
        <div className='w-[80%] mx-auto pt-[5rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[2rem]'>
            <div data-aos='zoom-in' data-aos-anchor-placement='top-center' >
              <CreatorCard image="/images/user6.png" user="Alexandria Cortes" price="0.34 ETH"/>
            </div>
            <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='100'>
              <CreatorCard image="/images/user5.png" user="Tory Cortes" price="0.34 ETH"/>
            </div>
            <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='200'>
              <CreatorCard image="/images/user4.png" user="Sienna Simpson" price="0.34 ETH"/>
            </div>
            <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='300'>
              <CreatorCard image="/images/user3.png" user="Eden Hill" price="0.34 ETH"/>
            </div>
            <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='400'>
              <CreatorCard image="/images/user2.png" user="George O'Connel" price="0.34 ETH"/>
            </div>
            <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='500'>
              <CreatorCard image="/images/user1.png" user="Emily Bright" price="0.34 ETH"/>
            </div>
        </div>
    </div>
  )
}

export default TopCreator