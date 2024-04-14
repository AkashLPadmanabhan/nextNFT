import Image from 'next/image'
import React from 'react'

interface Props {
    image: string
    user: string
    price: string
}

const CreatorCard = ({ image, user, price }:Props) => {
  return (
    <div className='text-center'>
        <div>
            <Image src={`${image}`} alt={user} width={200} height={200} className='mx-auto'/>
        </div>
        <h1 className='text-[25px] text-white mt-[1.5rem]'>{user}</h1>
        <p className='text-yellow-400'>{price}</p>
    </div>
  )
}

export default CreatorCard