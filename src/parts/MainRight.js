import React from "react";


class MainRight extends React.Component{

constructor(props){
  super(props);
}

render(){
  return(
    <div id="MainRight" className="flex">
      <div className="MainRight">

          <div className="Right center introofevent">
            <p>On 2nd November 2020 in England, Jonathan Shubert of Arctic Aircon Race Team broke the 100 mile cycing record.</p>
            <p>Finishing with a time of 02:57:58. That’s an average speed of 33.7142mph / 54.2577kph.</p>
            <p>Watch the challenge here</p>
            <button className="gcnVideo bcbutton">WATCH HERE</button>
          </div>

          <div className="Left center">
            <img src="../../images/bike.jpg"/>
          </div>

      </div>
    </div>

  )
}

}

export default MainRight
