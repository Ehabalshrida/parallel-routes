import { getProfitFromDb } from '@/utils/data'
import React from 'react'

export default async function DefaultProfitPage() {
    const profit = await getProfitFromDb()
  return (
    <div className='card bg-blue-950'>
      Default {profit}
    </div>
  )
}
