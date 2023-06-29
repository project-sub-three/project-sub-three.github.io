import MainTextData from '../data/MainTextData.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faWind,faCalendar,faClock,faMapSigns,faMapMarker,faStreetView

} from "@fortawesome/free-solid-svg-icons";


export default function MainText(){
return(
      <div id="MainText" className="flex paddingBottom">
        <div className="MainText MainTextGrid">

          <div className="g1 g">
          <FontAwesomeIcon icon={faCalendar}/>
            <div className="g-title">Date</div>
            <div className="g-info">2/11/2020</div>
          </div>
          <div className="g2 g">
          <FontAwesomeIcon icon={faWind}/>
            <div className="g-title">Wind Speed</div>
            <div className="g-info">00 kmph</div>
          </div>
          <div className="g3 g">
          <FontAwesomeIcon icon={faClock}/>
            <div className="g-title">Start Time</div>
            <div className="g-info">10:00</div>
          </div>
          <div className="g4 g">
             <a className="center" style={{"color":"black"}} href="https://www.strava.com/routes/3106531353966593522" target="_blank"> 
            <FontAwesomeIcon icon={faMapSigns}/>
            <div className="g-title">Route</div>
            <div className="g-info">North East</div>
            </a>
          </div>
          <div className="g5 g">
            <FontAwesomeIcon icon={faMapMarker}/>
            <div className="g-title">Destination</div>
            <div className="g-info">Norwich</div>
          </div>
          <div className="g6 g">
          <FontAwesomeIcon icon={faStreetView}/>
            <div className="g-title">Record</div>
            <div className="g-info">2:57:58</div>
          </div>


          <div className="g1 g">
            <div className="img1 img imgrey"></div> 
          </div>
          <div className="g2 g ">
            <div className="img2 img"></div> 
          </div>
          <div className="g3 g">
            <div className="img3 img imgrey"></div> 
          </div>
          <div className="g4 g">
            <div className="img4 img"></div> 
          </div>
          <div className="g5 g">
            <div className="img5 img imgrey"></div> 
          </div>
          <div className="g6 g">
            <div className="img6 img"></div> 
          </div>


        </div>
      </div>
    )
}
