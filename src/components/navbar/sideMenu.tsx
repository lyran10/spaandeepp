import React,{useState} from 'react'
import { Menu } from '../utils/interface'
import { Links } from './links'



export const SideMenu = ({showMenu} : Menu) => {

  const linkClas = (string : string,setString1 :React.Dispatch<React.SetStateAction<string>>,setString2 :React.Dispatch<React.SetStateAction<string>>,setString3 :React.Dispatch<React.SetStateAction<string>>,setString4 :React.Dispatch<React.SetStateAction<string>>) => {
    string === "bg-offWhite text-lightBlue" ? setString1("") : setString1("bg-offWhite text-lightBlue")
  setString2("")
  setString3("")
  setString4("")
  }
  const [ulClas,setUlClas] = useState<string>("flex flex-col gap-3")


  return (
    <div className={`transition duration-300 w-52 h-[700px] bg-lightBlue absolute top-[80px] right-0 ${showMenu}`}>
    <Links string={"sideNav"} linkclas={linkClas} ulclas={ulClas}/>
    </div>
  )
}