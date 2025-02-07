//src\app\faq\page.tsx

import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import React from 'react'

function page() {
  return (
    <>
     <HeaderMenu heroHeading="FAQ" pageName="faq" />
     <Faq/>
     <Footer/>   
    </>
  )
}

export default page