'use client'
import { ArrowRight } from 'lucide-react'
import React from 'react'

function Booking() {
  return (
    <div className='mb-3 mt-6'>
        <form className='flex flex-col gap-3'>
            <input type="date" className='py-3 bg-gray-100 px-2' />
            <button className='bg-brand py-3 text-white cursor-pointer'>Book Now <ArrowRight className='inline'/> </button>
        </form>
    </div>
  )
}

export default Booking