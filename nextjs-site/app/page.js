import 'bootstrap/dist/css/bootstrap.css' // Add this line

import NavIcon from './components/NavIcon'
import MainBody from './components/MainBody'
import MainFooter from './components/MainFooter'

import './styles/Main.css'
import './styles/Mainbreakpoint.css'

import "./styles/MainInfo.css"
import "./styles/MainGallery.css"
import "./styles/MainStory.css"
import "./styles/MainText.css"
import "./styles/MainBars.css"
import "./styles/MainFooter.css"


export default function Home() {
  return (
    
    <div id="box">


        <NavIcon/>
        <MainBody/>
        <MainFooter/>   

    </div>
  )
}
