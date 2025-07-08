import Image from 'next/image'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='relative'>
      <div className='w-full h-full z-20 block '>
        <Image
          alt='background'
          src={'/banner04.svg'}
          width={1365}
          height={158}
          style={{ width: '100%', height: 'auto' }}
          quality={100}
        />
      </div>
    </div>
  )
}

export default Footer
