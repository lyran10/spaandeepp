import React,{useState} from 'react'
import { Linc } from '../utils/interface'
import {Link} from "react-scroll"

export const Links = ({linkclas,ulclas,string} : Linc) => {
  const [home,setHome] = useState<string>("")
  const [solution,setSolution] = useState<string>("")
  const [contact,setContact] = useState<string>("")
  const [about,setAbout] = useState<string>("")

  const clas = (state : string,string : string) => {
    if(string === "nav"){
      return `${state} p-2 relative transition duration-500 hover:bg-lightBlue hover:text-offWhite cursor-pointer`
    }else{
      return `${state} flex mt-1 flex-col ${state === "bg-offWhite text-lightBlue" ? "" : "text-white"} hover:bg-offWhite hover:text-lightBlue p-2 transition duration-500 cursor-pointer`
    }
  }

  return (
    <ul className={ulclas}>
            <li><Link onClick={ () => linkclas(home,setHome,setAbout,setSolution,setContact)} className={clas(home,string)} to="home" spy={true} smooth={true} offset={50} duration={500}>HOME</Link></li>

            <li><Link onClick={ () => linkclas(about,setAbout,setHome,setSolution,setContact)} to="aboutUs" className= {clas(about,string)} spy={true} smooth={true} offset={50} duration={500}>ABOUT US</Link></li>

            <li><Link onClick={ () => linkclas(solution,setSolution,setAbout,setHome,setContact)} className= {clas(solution,string)} to="solutions" spy={true} smooth={true} offset={50} duration={500}>OUR SOLUTIONS</Link></li>

            <li><Link className= {clas(contact,string)} to="contact" onClick={ () => linkclas(contact,setContact,setAbout,setHome,setSolution)} spy={true} smooth={true} offset={50} duration={500}>CONTACT US</Link></li>
          </ul>
  )
}