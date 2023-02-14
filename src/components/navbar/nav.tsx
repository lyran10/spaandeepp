import React, { useState } from 'react'
import Icon  from '../utils/svg'
import { Hamburger } from './hamburger'
import { SideMenu } from './sideMenu'
import { Links } from './links'

export const NavBar = () => {
  const ulClas = "flex gap-8 items-center text-lightBlue sm:hidden xs:hidden lg:flex xl:flex"
  const [showMenu,setShowMenu] = useState<string>("translate-x-80")

  const linkClas = (string : string,setString1 :React.Dispatch<React.SetStateAction<string>>,setString2 :React.Dispatch<React.SetStateAction<string>>,setString3 :React.Dispatch<React.SetStateAction<string>>,setString4 :React.Dispatch<React.SetStateAction<string>>) => {
    string === "bg-lightBlue text-white" ? setString1("") : setString1("bg-lightBlue text-white")
  setString2("")
  setString3("")
  setString4("")
  }

  return (
    <nav className='flex items-center justify-around w-full shadow-md top-0 left-0 bg-offWhite h-20 fixed z-[100]'>
          <div className='mb-3'>
            <Icon wid1={100} wid2={100} hig1={303} hig2={396}/>
          </div>
         <Links string={"nav"} linkclas={linkClas} ulclas={ulClas}/>
          <Hamburger setShowMenu={setShowMenu} showMenu={showMenu}/>
          <SideMenu showMenu={showMenu}/>
    </nav>
  )
}

// before:content-'' before:transition before:duration-200 before:w-2/12 before:absolute before:h-1/4 before:bottom-0 before:right-0 before:border-b-2 before:border-b-lightBlue before:border-r-2 before:border-r-lightBlue after:content-'' after:transition after:duration-200 after:w-2/12 after:absolute after:h-1/4 after:top-0 after:left-0 after:border-t-2 after:border-t-lightBlue after:border-l-2 after:border-l-lightBlue