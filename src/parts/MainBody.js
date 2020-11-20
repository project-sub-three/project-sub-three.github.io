import React from "react";
import  MainBreak from './MainBreak.js'
import  MainInfo from './MainInfo.js'
import  MainLeft from './MainLeft.js'
import  MainGallery from './MainGallery.js'
import  MainRight from './MainRight.js'

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
              <div id="time" className="timered">
                2:57:<span id="seconds">{this.state.time}{this.Setme()}</span>
              </div>
                <img src="../../images/banner.jpg" />
            </div>
            <MainBreak/>
            <MainInfo/>
            <MainLeft/>
            <MainGallery/>
            <MainRight/>
        </div>
      )
  }
  else {
      return(
        <div id="MainBodyboxupper">
            <div id="MainBodybox" className="center">
              <div id="time">
                2:57:<span id="seconds">{this.state.time}{this.Setme()}</span>
              </div>
                <img src="../../images/banner.jpg" />
            </div>
            <MainBreak/>
            <MainInfo/>
            <MainLeft/>
            <MainGallery/>
            <MainRight/>
        </div>
      )
  }

}

}

export default MainBody
