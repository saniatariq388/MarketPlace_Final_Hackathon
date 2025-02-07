//src\app\home\page.tsx

import Blog from '@/components/Blog'
import FoodItem from '@/components/FoodItem'
import Footer1 from '@/components/Footer1'
import HeroHeader from '@/components/HeroHeader'
import MenuItem from '@/components/MenuItem'
import Partner from '@/components/Partner'
import Reviews from '@/components/Reviews'
import Team from '@/components/Team'
import WhyChoose from '@/components/WhyChoose'
import React from 'react'

function HomePage() {
  return (
    <div>
        <div className='w-full bg-white'>
            <HeroHeader />
            <FoodItem/>
            <WhyChoose/>
            <MenuItem/>
            <Team/>
            <Reviews/>
            <Blog/>
            <Partner/>
            <Footer1/>
        </div>
    </div>
  )
}

export default HomePage