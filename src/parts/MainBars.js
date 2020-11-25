import React from "react";
import MainBarsData from '../data/MainBarsData.json';

class MainBars extends React.Component{

constructor(props){
  super(props);
}

render(){
  var {title,subtitle,paragraphs}=MainBarsData;

  return(
    <div id="MainBars" className="flex radius">
      <div className="MainBars">


              <div className="MainBars-right MainBars-test">
                <div className="normp">
                As a two time British time trial champion, Shubert appreciates the significance
                of aerodynamics to a cyclist’s performance; in a constantly evolving arms race
                it is innovation that keeps the champions at the forefront of the sport.
                </div>
                <div className="normp">
                The Project-Sub-3 aerobars were the brainchild of looking beyond conventional
                wisdom to create a strong, functional designed which effectively interacts with the airflow as it reaches the rider to reduce overall CdA. These bars were instrumental in the breaking of the impossible 3-hour barrier for 100-miles on 2nd November 2020 in the UK                </div>
                </div>

              <div className="MainBars-left MainBars-test">
                <div id="bars"></div>
                <div>Aerobars</div>
                <div>#Sub3</div>
              </div>


      </div>
    </div>

  )
}

}

export default MainBars
