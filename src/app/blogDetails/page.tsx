//src\app\blogDetails\page.tsx

import BlogDetails from '@/components/BlogDetails'
import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import React from 'react'

function page() {
  return (
    
    <>
    <HeaderMenu pageName='blog post' heroHeading='BLOG POST'/>
    <BlogDetails/>
    <Footer/>
    </>
    
  )
}

export default page