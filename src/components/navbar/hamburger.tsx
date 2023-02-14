import React,{useState} from 'react'
import { Ham } from '../utils/interface'

export const Hamburger = ({setShowMenu,showMenu} : Ham) => {
  const [hamAnimationDiv1,setHamAnimationDiv1] = useState<string>("")
  const [hamAnimationDiv2,setHamAnimationDiv2] = useState<string>("")
  const [hamAnimationDiv3,setHamAnimationDiv3] = useState<string>("")

  const hamburger = () => {
      showMenu === "translate-x-80" ?setShowMenu("") :setShowMenu("translate-x-80")
      hamAnimationDiv1 === "rotate-45 translate-y-2" ? setHamAnimationDiv1("") :setHamAnimationDiv1("rotate-45 translate-y-2")
      hamAnimationDiv2 === "-rotate-45 -translate-y-2" ? setHamAnimationDiv2("") :setHamAnimationDiv2("-rotate-45 -translate-y-2")
      hamAnimationDiv3 === "-translate-x-10 opacity-0" ? setHamAnimationDiv3("") :setHamAnimationDiv3("-translate-x-10 opacity-0")
  }

  return (
    <div onClick={() => hamburger()} className='group flex flex-col gap-1 cursor-pointer lg:hidden sm:flex xs:flex'>
                <div className={`w-10 h-1 rounded-md bg-lightBlue transition duration-500 ${hamAnimationDiv1}`}></div>

                <div className={`w-10 h-1 rounded-md bg-lightBlue transition duration-500 ${hamAnimationDiv3}`}></div>

                <div className={`w-10 h-1 rounded-md bg-lightBlue transition duration-500 ${hamAnimationDiv2}`}></div>
          </div>
  )
}