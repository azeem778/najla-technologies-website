import React from 'react'
import { Aboutcompany, Herosection, Ourservices, Ourvalues, Ourworkflow, Testimonials, Whychooseus } from '../../components'

const Home = () => {
  return (
    <div className='m-top-80'>
        <Herosection/>
        <Ourvalues/>
        <Ourservices/>
        <Aboutcompany/>
        <Whychooseus/>
        <Ourworkflow/>
        <Testimonials/>
    </div>
  )
}

export {Home}