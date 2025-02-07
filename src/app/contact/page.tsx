//src\app\contact\page.tsx

import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import SignUp from '@/components/SignUp'
import React from 'react'

function page() {
  return (
    <>
      <HeaderMenu pageName='contact' heroHeading='CONTACT'/>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default page