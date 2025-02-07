import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function OrderSuccess() {
  return (
    <div>
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-md text-center'>
                <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4'/>
                <h1 className='text-2xl font-bold md-4 text-black'>Order Placed Successfully!</h1>
                <p className='text-gray-600 mb-6'>Thank you for your purchase. Your order has been received and is being processed.</p>
                <Link href="/">
                <Button className='bg-[#FF9F0D]/90 text-white px-6 py-2'>Continue Shopping</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default OrderSuccess