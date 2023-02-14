// sideMenu component
export interface Menu {
  showMenu : string
}

// hamburger component
export interface Ham {
  setShowMenu : React.Dispatch<React.SetStateAction<string>>,
  showMenu : string
}

// links component
export interface Linc {
  linkclas : (string : string, setString1 : React.Dispatch<React.SetStateAction<string>>,setString2 : React.Dispatch<React.SetStateAction<string>>,setString3 : React.Dispatch<React.SetStateAction<string>>,setString4 : React.Dispatch<React.SetStateAction<string>>) => void
  ulclas? : string,
  string : string
}

// AttentionData components

export interface Data {
  icon : React.ReactElement
  title : string
  line1 : string
  line2 : string
  line3? : string
}

// partner component
export interface PartnerData {
  line1 : string
  line2 : string
  line3? : string
  line4? : string
  line5? : string
}