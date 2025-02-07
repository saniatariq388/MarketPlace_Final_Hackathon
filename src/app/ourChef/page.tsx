//src\app\ourChef\page.tsx

import Footer from '@/components/Footer'
import HeaderMenu from '@/components/HeaderMenu'
import OurChef from '@/components/OurChef'
import React from 'react'

function ourChef() {
  return (
    <>
       <HeaderMenu heroHeading="CHEFS" pageName="chefs" />
       <OurChef/>
       <Footer/>

    </>
  )
}

export default ourChef
