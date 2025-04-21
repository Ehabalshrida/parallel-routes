import { getSalesFromDB } from '@/utils/data'
import React from 'react'

export default async function DefaultSalesPage() {
    const sales = await getSalesFromDB()
  return (
    <div className='card bg-amber-950'>
      Default {sales}
    </div>
  )
}
