import React from "react";


class MainInfo extends React.Component{

constructor(props){
  super(props);
}

render(){
  return(
    <div id="MainInfo" className="flex">
      <div className="MainInfo">
          <div className="Left center introofevent">
            <p>On 2nd November 2020 in England, Jonathan Shubert of Arctic Aircon Race Team broke the 100 mile cycing record.</p>
            <p>Finishing with a time of 02:57:58. That’s an average speed of 33.7142mph / 54.2577kph.</p>
            <p>Watch the challenge here</p>
            <button className="gcnVideo bcbutton">WATCH HERE</button>
          </div>

          <div className="Right center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/h9NMi0Td1XA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
          </div>

      </div>
    </div>

  )
}

}

export default MainInfo
