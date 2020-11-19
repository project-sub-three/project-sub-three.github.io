import React from "react";


class MenuIcon extends React.Component{

constructor(props){
  super(props);
  this.open=this.open.bind(this);
  this.state={
    menu:0
  }

}

open(){
  this.setState(()=>{
    if (this.state.menu==0){
      return {menu:1}
    }
    else {
      return {menu:0}
    }
  })
}

render(){
  if(this.state.menu==0){
    return(
      <div>
      <div id="Menubox" className="MenuboxClosed">
        <ul>
          <li>Project x Sub 3xx</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>

      <div id="MenuIconbox" onClick={()=>{this.open()}}>
        menu icon box{this.state.menu}x
      </div>
      </div>

    )
  }
  else {
    return(
      <div>
      <div id="Menubox" className="MenuboxOpen">
        <ul>
          <li>Project x Sub 3</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>

      <div id="MenuIconbox" onClick={()=>{this.open()}}>
        menu icon box{this.state.menu}x
      </div>
      </div>
    )
  }

}

}

export default MenuIcon
