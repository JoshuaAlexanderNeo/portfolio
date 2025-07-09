import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  tagList: string[]
  title: string
  description: string
  github?: string
  site?: string
  image: string
}

const Project: React.FC<ProjectProps> = ({ tagList, title, description, github, site, image }) => {
  return (
    <div className='container mx-auto w-full h-full'>
      <div className='py-1'>
        <div className='grid grid-cols-1 overflow-hidden bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-600 rounded-lg group sm:grid-cols-8'>
          <div className='relative'>
            <Image className='absolute inset-0 object-cover object-left w-full h-full' width={500} height={300} src={image} alt='' />
          </div>

          <div className='p-8 sm:col-span-6'>
            <ul className='flex space-x-1'>
              {tagList &&
                tagList.map((tag, key) => {
                  return (
                    <li
                      key={key}
                      className='inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 dark:bg-blue-900 rounded-full'>
                      {tag}
                    </li>
                  )
                })}
            </ul>

            <h5 className='mt-4 font-bold dark:text-gray-100'>{title}</h5>

            <div className='mt-2 text-sm text-gray-500 dark:text-gray-300'>{description}</div>

            <div className='mt-4 flex'>
              {github && (
                <Link href={github}>
                  <div
                    className={`flex align-middle pr-3 py-1 text-xs font-semibold text-black dark:text-gray-200 leading-5 cursor-pointer`}>
                    <svg className='w-4 h-4 mr-1 dark:fill-white' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <title>GitHub</title>
                      <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                    </svg>
                    View Github Project
                  </div>
                </Link>
              )}
              {site && (
                <Link href={site}>
                  <div
                    className={`flex align-middle pr-3 py-1 text-xs font-semibold text-black dark:text-gray-200 leading-5 divide-x-4 cursor-pointer`}>
                    <svg className='w-4 h-4 mr-1 dark:fill-white' role='img' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
                      <title>Website</title>
                      <path d='M24 44q-4.2 0-7.85-1.575Q12.5 40.85 9.8 38.15q-2.7-2.7-4.25-6.375Q4 28.1 4 23.9t1.55-7.825Q7.1 12.45 9.8 9.75t6.35-4.225Q19.8 4 24 4q4.2 0 7.85 1.525Q35.5 7.05 38.2 9.75q2.7 2.7 4.25 6.325Q44 19.7 44 23.9t-1.55 7.875Q40.9 35.45 38.2 38.15t-6.35 4.275Q28.2 44 24 44Zm7.9-27.5h7.5q-1.65-3.45-4.525-5.75Q32 8.45 28.25 7.5q1.25 1.85 2.125 4t1.525 5Zm-12.7 0h9.7q-.55-2.65-1.85-5.125T24 7q-1.6 1.35-2.7 3.55-1.1 2.2-2.1 5.95ZM7.6 28.45h7.95q-.15-1.35-.175-2.425-.025-1.075-.025-2.125 0-1.25.05-2.225.05-.975.2-2.175h-8q-.35 1.2-.475 2.15T7 23.9q0 1.3.125 2.325.125 1.025.475 2.225ZM19.75 40.5q-1.25-1.9-2.15-4.1-.9-2.2-1.5-4.95H8.6Q10.5 35 13 37.025q2.5 2.025 6.75 3.475ZM8.6 16.5h7.55q.55-2.7 1.4-4.825.85-2.125 2.15-4.125-3.75.95-6.55 3.2T8.6 16.5ZM24 41.1q1.75-1.8 2.925-4.125Q28.1 34.65 28.85 31.45H19.2q.7 3 1.875 5.4Q22.25 39.25 24 41.1Zm-5.35-12.65H29.4q.2-1.55.25-2.525.05-.975.05-2.025 0-1-.05-1.925T29.4 19.5H18.65q-.2 1.55-.25 2.475-.05.925-.05 1.925 0 1.05.05 2.025.05.975.25 2.525Zm9.65 12q3.6-1.15 6.475-3.45 2.875-2.3 4.625-5.55h-7.45q-.65 2.7-1.525 4.9-.875 2.2-2.125 4.1Zm4.1-12h8q.35-1.2.475-2.225Q41 25.2 41 23.9q0-1.3-.125-2.25T40.4 19.5h-7.95q.15 1.75.2 2.675.05.925.05 1.725 0 1.1-.075 2.075-.075.975-.225 2.475Z' />
                    </svg>
                    Visit Website
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
