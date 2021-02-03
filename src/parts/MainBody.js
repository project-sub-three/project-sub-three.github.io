import React from "react";
import  MainBreak from './MainBreak.js'
import  MainInfo from './MainInfo.js'
import  MainLeft from './MainLeft.js'
import  MainGallery from './MainGallery.js'
import  MainStory from './MainStory.js'
import  MainText from './MainText.js'
import  MainBars from './MainBars.js'
import  ChampionSpeaker from './ChampionSpeaker.js'

class MainBody extends React.Component{

constructor(props){
  super(props);
  this.state={
    "time":53,
    "countdown":10
  };
this.Setme=this.Setme.bind(this);
}


Setme(){
  setTimeout(() => {
      this.setState((state)=>{
          if(state.time<58){
            return {time:state.time+1}
          }
      });
  }, 1000);
}



render(){
  if(this.state.time==58){
      return(
        <div id="MainBodyboxupper">
            <div id="MainBodybox" className="center">
              <div className="youtube">
              <a href="https://www.youtube.com/watch?v=h9NMi0Td1XA&ab_channel=GlobalCyclingNetwork">
                <i className="fa fa-youtube-play"></i>
                <div>Watch the video</div>
              </a>
              </div>
            </div>
            <ChampionSpeaker/>
            <MainBreak/>
            <MainInfo/>
            <MainLeft/>
            <MainStory/>
            <MainText/>
            <MainBars/>
        </div>
      )
  }
  else {
      return(
        <div id="MainBodyboxupper">
            <div id="MainBodybox" className="center">
              <div className="youtube">
              <a href="https://www.youtube.com/watch?v=h9NMi0Td1XA&ab_channel=GlobalCyclingNetwork">
                <i className="fa fa-youtube-play"></i>
                <div>Watch the video</div>
              </a>
              </div>
            </div>
            <ChampionSpeaker/>
            <MainBreak/>
            <MainInfo/>
            <MainLeft/>
            <MainStory/>
            <MainText/>
            <MainBars/>
        </div>
      )
  }

}

}

export default MainBody
