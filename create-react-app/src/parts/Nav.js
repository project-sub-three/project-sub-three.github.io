import React from "react";


class Nav extends React.Component{

constructor(props){
  super(props);
  this.state={
    menu:0
  }

}


render(){
    return(
      <div id="Navbox">
        <div id="NavboxOptions">
          <div className="navoption"><p></p>Home</div>
          <div className="navoption"><p></p>Bars</div>
          <div className="navoption"><p></p>News</div>
          <div className="navoption"><a href="#" className="fa fa-facebook"></a></div>
          <div className="navoption"><a href="#" className="fa fa-twitter"></a></div>
        </div>
      </div>
    )
  }
}

export default Nav
