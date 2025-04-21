import { getProfitFromDb } from '@/utils/data'
import React from 'react'

export default async function ProfitPage() {
    const profit = await getProfitFromDb()
  return (
    <div className='card bg-blue-950'>
      {profit}
    </div>
  )
}
