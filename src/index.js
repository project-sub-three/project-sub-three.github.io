import React from "react";
import ReactDOM from "react-dom";
//import { createStore  } from 'redux';
//import { Provider } from 'react-redux';
//import { connect } from 'react-redux';
//import axios from 'axios';

import "../css/main.css";
import "../css/NavIcon.css";
import "../css/MainInfo.css";
import "../css/MainLeft.css";
import "../css/MainGallery.css";
import "../css/MainRight.css";
import "../css/MainFooter.css";

import NavIcon from './parts/NavIcon.js';
import MainBody from './parts/MainBody.js';
import MainFooter from './parts/MainFooter.js';



class App extends React.Component {
constructor(props){
  super(props);
}

render(){
  return(
    <div id="box">
      <NavIcon/>
      <MainBody/>
      <MainFooter/>
    </div>

  )
}


}











ReactDOM.render(<App/>,document.getElementById('render'));
