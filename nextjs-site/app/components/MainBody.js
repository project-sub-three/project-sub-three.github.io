import  MainBreak from './MainBreak.js'
import  MainInfo from './MainInfo.js'
import  MainLeft from './MainLeft.js'
import  MainStory from './MainStory.js'
import  MainText from './MainText.js'
import  MainBars from './MainBars.js'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo

} from "@fortawesome/free-solid-svg-icons";


export default function MainBody(){

  return (
    <div id="MainBodyboxupper">



            <div id="MainBodybox">
              <div className="youtube">
              <a href="https://www.youtube.com/watch?v=h9NMi0Td1XA&ab_channel=GlobalCyclingNetwork">
              <FontAwesomeIcon icon={faVideo}/>
                <div>Watch the video</div>
              </a>
              </div>
            </div>
      <MainBreak/>
      <MainInfo/>
      <MainLeft/>
      <MainStory/>
      <MainText/>
      <MainBars/>
    </div>
  )
}

