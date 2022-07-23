import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='h-40 relative'>
      <div className='w-full h-full z-20 block '>
        <Image
          alt='background'
          src={'/banner04.svg'}
          width='1365px'
          height='158px'
          layout={'responsive'}
          quality={100}
        />
      </div>
    </div>
  )
}

export default Footer
