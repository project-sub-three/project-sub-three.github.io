import React from "react";


class MainLeft extends React.Component{

constructor(props){
  super(props);
}

render(){
  return(
    <div id="MainLeft" className="flex">
      <div className="MainLeft">

          <div className="leftbox testbox">
            <div className="leftbox-img">
                <img src="../../images/rra.jpg"/>
            </div>
            <div className="normp rratitle">
                Road Records Association
            </div>
          </div>

          <div className="rightbox testbox">
          <div className="normp flexp">
              <span>The <a href=" http://www.rra.org.uk/index.html">RRA</a> was established in 1888 with the responsibility of
              certifying the claims to records made by cyclists on British highways over set distances and for
              place to place records.

              The RRA does not organise record attempts, but provides the
              framework and high standards for timing and authentication of records.
              </span>
            </div>
          </div>

      </div>
    </div>

  )
}

}

export default MainLeft
