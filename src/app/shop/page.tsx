//src\app\shop\page.tsx

import FoodList from '@/components/FoodList'
import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'

import React from 'react'

function ShopPage() {

  
  return (
    <div>
        <div className='w-full'>      
        <HeaderMenu pageName='shop' heroHeading='SHOP'/> 
        <FoodList/>
        <Footer/>
        </div>
    </div>
  )
}

export default ShopPage