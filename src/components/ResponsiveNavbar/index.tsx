'use client';

import React, { useState } from 'react'

export const ResponsiveNavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <div className='bg-transparent '>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <MobileMenu>{navLinks}</MobileMenu>}
    </div>
  )
}

const pages: string[] = ['About Me', 'History', 'Projects', 'Contact']
const navLinks = pages.map((page) => (
  <a
    key={page}
    className='no-underline text-gray-600 lg:text-gray-50 font-semibold hover:text-gray-300 dark:text-black'
    href={`#${page}`}>
    {page}
  </a>
))

interface NavbarProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => (
  <div className='flex items-center justify-between p-4'>
    <div className='flex items-center'>
      <span className='inline-flex w-14 h-14 lg:mt-4 border-black font-header font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full dark:border-white'>
        JA
      </span>
    </div>
    <nav className='hidden lg:block space-x-6'>{navLinks}</nav>
    <button
      type='button'
      aria-label='Toggle mobile menu'
      onClick={() => setMenuOpen(!menuOpen)}
      className='rounded lg:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50'>
      <MenuAlt4Svg menuOpen={menuOpen} />
    </button>
  </div>
)

interface MobileMenuProps {
  children: React.ReactNode
}

const MobileMenu: React.FC<MobileMenuProps> = ({ children }) => (
  <nav className='p-4 flex flex-col absolute w-screen space-y-6 lg:hidden bg-white'>{children}</nav>
)

interface MenuAlt4SvgProps {
  menuOpen: boolean
}

const MenuAlt4Svg: React.FC<MenuAlt4SvgProps> = ({ menuOpen }) => (
  <>
    <svg
      viewBox='64 64 896 896'
      focusable='false'
      data-icon='menu'
      width='1em'
      height='1em'
      className={`transition text-gray-600 duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`}
      fill='currentColor'
      aria-hidden='true'>
      <path d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'></path>
    </svg>
  </>
)
