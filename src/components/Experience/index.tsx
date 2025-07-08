import React from 'react'

interface ExperienceItemProps {
  company: string
  title: string
  date: string
}

const RightBox: React.FC<ExperienceItemProps> = ({ company, title, date }) => {
  return (
    <div className='mb-8 flex justify-between items-center w-full right-timeline'>
      <div className='order-1 w-5/12'></div>
      <div className='z-20 flex items-center justify-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full'>
        <div className='z-21 justify-center order-1 bg-blue-400 shadow-xl w-6 h-6 rounded-full'></div>
      </div>
      <div className='order-1 w-5/12 py-4 '>
        <h3 className='mb-1 font-bold text-gray-800 text-sm sm:text-xl dark:text-gray-200'>{company}</h3>
        <h2 className='mb-1 text-gray-800 text-xs sm:text-base dark:text-gray-200'>{title}</h2>
        <h1 className='font-light text-gray-500 text-xs sm:text-base dark:text-gray-200'>{date}</h1>
      </div>
    </div>
  )
}

const LeftBox: React.FC<ExperienceItemProps> = ({ company, title, date }) => {
  return (
    <div className='mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline'>
      <div className='order-1 w-5/12'></div>
      <div className='z-20 flex items-center justify-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full'>
        <div className='z-21 justify-center order-1 bg-blue-400 shadow-xl w-6 h-6 rounded-full'></div>
      </div>
      <div className='order-1 w-5/12 justify-center py-4'>
        <h3 className='mb-1 font-bold text-gray-800 flex justify-end text-sm sm:text-xl dark:text-gray-200'>{company}</h3>
        <h2 className='mb-1 text-gray-800 flex justify-end text-xs sm:text-base dark:text-gray-200'>{title}</h2>
        <h1 className='font-light text-gray-500 flex justify-end text-xs sm:text-base dark:text-gray-200'>{date}</h1>
      </div>
    </div>
  )
}

const Experience: React.FC = () => {
  return (
    <div id='History' className='container mx-auto w-full h-full'>
      <div className='flex justify-center text-5xl mb-10 font-semibold font-robotoCondensed'>History</div>
      <div className='relative wrap overflow-hidden h-full'>
        <div
          className='absolute border-opacity-20 border-gray-900 h-full border-2-2 border dark:border-gray-200'
          style={{ left: '50%' }}></div>
        <LeftBox company={'Digital Innovation Lab'} title={'Full Stack Developer'} date={'November 2022 - October 2025'} />
        <RightBox company={'Exoriens GmbH'} title={'Junior Fullstack Developer'} date={'October 2021 - November 2022'} />
        <LeftBox company={'Acadia University'} title={'Operating Systems TA'} date={'September 2019 - December 2019'} />
        <RightBox company={'Acadia University'} title={'BSc. Computer Science'} date={'January 2016 - May 2020'} />
      </div>
    </div>
  )
}

export default Experience
