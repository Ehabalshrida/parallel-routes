'use client'
import React from 'react'
// import { useRouter } from 'next/navigation'
export default function Page() {
// const router = useRouter()
  return (
    <>
    <div>
      Product interceptor
    </div>
    <button onClick={() => window.location.reload()}>Close</button>
    </>
  )
}
