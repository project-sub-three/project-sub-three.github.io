import React from "react";


class MainGallery extends React.Component{
constructor(props){
  super(props);
  this.state={
    "show":1
  }
}

componentDidMount(){
  setInterval(function(){
      var num=parseInt(document.querySelector('li.active').getAttribute("data-slide-to"))+1
      switch(num){
        case 1:
          document.getElementById('Gallery-timeline-before').style.width="33%";
          break;
        case 2:
          document.getElementById('Gallery-timeline-before').style.width="66%";
          break;
        case 3:
          document.getElementById('Gallery-timeline-before').style.width="100%";
          break;
        default:
        console.log(num)
        break;

      }

  },300)
}

render(){
  if (this.state.show==1){
    return(
      <div id="MainGallery">
        <div className="MainGallery">

          <div className="bccontainer">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators" >
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner">

                <div className="item active">
                  <img src="../../images/hank.jpg" alt="Los Angeles" />
                  <div className="carousel-caption">
                    <h3></h3>
                    <p></p>
                  </div>
                </div>

                <div className="item">
                  <img src="../../images/solo.jpg" alt="Chicago" />
                  <div className="carousel-caption">
                    <h3></h3>
                    <p></p>
                  </div>
                </div>

                <div className="item">
                  <img src="../../images/threecars.jpg" alt="New York" />
                  <div className="carousel-caption">
                    <h3></h3>
                    <p></p>
                  </div>
                </div>

              </div>

              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <div id="boot"></div>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <div id="shoot" className="boot"></div>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
  else {return(<div id="MainGallery"><div className="MainGallery"><p class="teststyles">testing change state when done</p></div></div>)}
}


}


export default MainGallery
