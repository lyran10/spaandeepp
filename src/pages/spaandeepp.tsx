import React,{useState} from 'react'
import { Home } from '../components/home/home'
import { NavBar } from '../components/navbar/nav'
import { AboutUs } from '../components/aboutUs/aboutUs'
import { AttentionInAdvertising } from '../components/attentionInAdvertising/attentionInAdvertising'
import { GroupImage } from '../components/groupImage/groupImage'
import { PartnerWithUs } from '../components/partnerWithUs/partnerWithUs'
import { Trusted } from '../components/trusted/trusted'
import { Footer } from '../components/footer/footer'
import { Ending } from '../components/ending/ending'

export const Spaandeepp = () => {
 
  return (
    <main className='bg-offWhite w-full h-full'>
      <NavBar/>
      <Home/>
      <AboutUs/>
      <AttentionInAdvertising/>
      <GroupImage/>
      <PartnerWithUs/>
      <Trusted/>
      <Footer/>
      <Ending/>
    </main>
  )
}