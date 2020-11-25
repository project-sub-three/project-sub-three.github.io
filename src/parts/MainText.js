import React from "react";
import MainTextData from '../data/MainTextData.json';

class MainText extends React.Component{

constructor(props){
  super(props);
  this.state={
    data:MainTextData,
    complete:0
  }
}




render(){
  var {title,subtitle,paragraphs}=this.state.data;
    return(
      <div id="MainText" className="flex">
        <div className="MainText MainTextGrid">

          <div className="g1 g">
            <i class="far fa-calendar-alt"></i>
            <div className="g-title">Date</div>
            <div className="g-info">2/11/2020</div>
          </div>
          <div className="g2 g">
            <i class="fas fa-wind"></i>
            <div className="g-title">Wind Speed</div>
            <div className="g-info">00 kmph</div>
          </div>
          <div className="g3 g">
            <i class="far fa-clock"></i>
            <div className="g-title">Start Time</div>
            <div className="g-info">10:00</div>
          </div>
          <div className="g4 g">
            <i class="fas fa-map-signs"></i>
            <div className="g-title">Route</div>
            <div className="g-info">North East</div>
          </div>
          <div className="g5 g">
            <i class="fas fa-map-marker-alt"></i>
            <div className="g-title">Destination</div>
            <div className="g-info">Norwich</div>
          </div>
          <div className="g6 g">
            <i class="fas fa-street-view"></i>
            <div className="g-title">Record</div>
            <div className="g-info">2:57:58</div>
          </div>

        </div>
      </div>
    )
  }

}

export default MainText
