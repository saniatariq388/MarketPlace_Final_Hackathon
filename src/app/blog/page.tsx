//src\app\blog\page.tsx

import BlogPage from '@/components/BlogPage'
import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import React from 'react'

function page() {
  return (
    <>
     <div className='w-full'>
      <HeaderMenu pageName="blog" heroHeading="BLOG" />
      <BlogPage/>
      <Footer/>
     </div>
    </>
  )
}

export default page