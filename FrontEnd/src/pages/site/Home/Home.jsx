import React from 'react'
import Section1 from '../../../components/Section1/Section1'
import Section2 from '../../../components/Section2/Section2'
import { Helmet } from 'react-helmet'
import Section3 from '../../../components/Section3/Section3'
import Section4 from '../../../components/Section4/Section4'
import Section5 from '../../../components/Section5/Section5'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    </>
  )
}

export default Home