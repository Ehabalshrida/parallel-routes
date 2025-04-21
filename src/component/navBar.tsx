import Link from 'next/link'
import React from 'react'

export default function navBar() {
  return (
    <div className='flex gap-5 bg-gray-800 text-white p-4'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
        <Link href="/blog">Blog</Link>

      
    </div>
  )
}
