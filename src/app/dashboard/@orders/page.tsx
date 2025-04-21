import { getOrdersCountFromDB } from '@/utils/data'
import React from 'react'

export default async function OrdersPage() {
    const ordersCount  = await getOrdersCountFromDB()
  return (
    <div className='card bg-yellow-300'>
      {ordersCount}
    </div>
  )
}
