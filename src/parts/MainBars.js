import React from "react";
import MainBarsData from '../data/MainBarsData.json';

class MainBars extends React.Component{

constructor(props){
  super(props);

  this.scroll=this.scroll.bind(this);
}

scroll(){
  var TDTS=document.querySelector('.MainBars-right').scrollHeight-document.querySelector('.MainBars-right').clientHeight
  var ToGo=(TDTS-document.querySelector('.MainBars-right').scrollTop)/TDTS;
  document.getElementById('MainBarsBorder').style.height=Math.round(ToGo*100)+"%";
}


render(){
  var {title,subtitle,paragraphs}=MainBarsData;

  return(
    <div id="MainBars" className="flex radius">
      <div className="MainBars">


              <div className="MainBars-right MainBars-test" onScroll={()=>{this.scroll()}}>
                <div className="normp">
                We don't just make history, we make aerobars. ProjectSub3 was built on the belief that we should strive to push our limits physiologically,
                mentally, and technologically. In sport's constantly evolving arms race, it is innovation that keeps champions at the forefront. Jonathan’s
                 historic sub-3-hour 100-miles is a testament to attention detail and stepping beyond the constraints of conventional wisdom to develop the
                 fastest aerobar in the world.
                </div>
                <div className="normp">
                The ProjectSub3 aerobar setup effectively interact with the airflow in advance of it reaching a rider’s leading edge, with the effect of
                dramatically reducing total system CdA. Real world testing demonstrates an 11W saving over a standard aerobar system mounted at the same angle.
                </div>
                <div className="normp">
                The Project Sub-3-bars will be reaching the market by early 2021 and are designed to interface with an array of base bars and to be installed
                at angles from 0-50°. <br/><br/>For enquiries and pre-orders please contact the Jonathan Shubert: <a href="mailto:jonathanshubert1@gmail.com">jonathanshubert1@gmail.com</a>
                </div>
                </div>

              <div className="MainBars-left MainBars-test">
                <div id="bars"></div>
                <div id="instagram"><i className="fa fa-instagram"></i><div style={{'marginLeft':'-10px'}}>_projectsub3</div></div>
                <div>#aerobars</div>
                <div id="MainBarsBorder"></div>
              </div>


      </div>
    </div>

  )
}

}

export default MainBars
