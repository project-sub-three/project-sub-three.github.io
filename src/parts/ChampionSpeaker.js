import React from "react";
import styles  from "../../css/ChampionSpeaker.css";
//import "../../css/ChampionSpeaker.css";





class ChampionSpeaker extends React.Component{
constructor(props){
  super(props)
  this.state={
    "active":"true",
    "start":"none"
  };
  this.stuff=this.stuff.bind(this);
  //this.handleScroll=this.handleScroll.bind(this);
}

stuff(){
  //console.log("aaa",this.state.active)
  this.setState((state)=>{
    if(this.state.active=="false"){
      return {"active":"true","start":this.state.start}
    }
    else{
      return {"active":"false","start":this.state.start}
    }
  })
}
/*
componentDidMount(){
  //window.addEventListener('scroll', this.handleScroll);

}

componentWillUnmount(){
    //window.removeEventListener('scroll', this.handleScroll);
}

handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);

    this.setState({
      "active":this.state.active,"start":"block"
    });
}
*/

  render(){
    let hide={'diplay':"none"};
    //console.log("hide",this.state.start);
    if(this.state.active=="true"){
      return(
        <div id="ChampionSpeakerBox" >
          <div className={styles.ChampionSpeakerBoxInner}>
            <div className={styles.ChampionSpeakerBoxInnerwrapper} id="ChampionSpeakerBoxInnerwrapper">
            <div id="ChampionSpeakerBoxStatus"  onClick={()=>{this.stuff()}}>
              <div className={styles.statusup}></div>
              <div className={styles.statusdown}></div>
            </div>

            <div id="test">
              <div className={styles.speakertop}>
                  <img src="../../img/speaker.svg" alt="zzz"/>
                  <img src="../../img/speakerjon.jpg" alt="zzz"/>
              </div>
              <div className={styles.speakerbottom}>
                <div className="speakerbottombutton" ><a href="https://champions-speakers.co.uk/speaker-agent/jonathan-shubert#off-canvas-form">View Now</a></div>
              </div>
            </div>

            </div>

          </div>

        </div>
      )
    }
    else{
      return(
        <div id="ChampionSpeakerBox" >
          <div className={styles.ChampionSpeakerBoxInner} id="s1">
            <div className={styles.ChampionSpeakerBoxInnerwrapper} id="ChampionSpeakerBoxInnerwrapper">
            <div id="ChampionSpeakerBoxStatus"  className="s2" onClick={()=>{this.stuff()}}>
              <div className={styles.statusup}></div>
              <div className={styles.statusdown} id="statusdown"></div>
            </div>

            <div id="test">
              <div className={styles.speakertop}>
                  <img src="../../img/speaker.svg" alt="zzz"/>
                  <img src="../../img/speakerjon.jpg" alt="zzz"/>
              </div>
              <div className={styles.speakerbottom}>
                <div className="speakerbottombutton" ><a href="https://champions-speakers.co.uk/speaker-agent/jonathan-shubert#off-canvas-form">View Now</a></div>
              </div>
            </div>

            </div>

          </div>

        </div>
      )
    }


  }
}


export default ChampionSpeaker
