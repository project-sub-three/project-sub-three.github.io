import React from "react";
import MainTextData from '../data/MainTextData.json';
import MainTextDataJon from '../data/MainTextDataJon.json';

class MainStory extends React.Component{

constructor(props){
  super(props);
  this.state={
    data:MainTextData,
    dataJon:MainTextDataJon,
    section:0
  };
  this.scroll=this.scroll.bind(this);
  this.changesection=this.changesection.bind(this);
}

changesection(){
  this.setState(()=>{
    if (this.state.section==0){
      return {
        data:MainTextData,
        dataJon:MainTextDataJon,
        section:1
      }
    }
    else {
      return {
        data:MainTextData,
        dataJon:MainTextDataJon,
        section:0
      }

    }
  });
  document.querySelector('.MainStory-right').scrollTop=0;
  console.log(this.state.section);

}
scroll(){
  var TDTS=document.querySelector('.MainStory-right').scrollHeight-document.querySelector('.MainStory-right').clientHeight
  var ToGo=(TDTS-document.querySelector('.MainStory-right').scrollTop)/TDTS;
  document.getElementById('MainStoryBorder').style.height=Math.round(ToGo*100)+"%";
}

render(){
var {paragraphs}=this.state.data;
var {paragraphsJon}=this.state.dataJon;
//console.log(paragraphs);
    if(this.state.section==0){
      return(
        <div id="MainStory" className="flex">
          <div className="MainStory">

              <div className="MainStory-left MainStory-test">
                <div id="author"></div>
                <div>Breaking 3</div>
                <div>Relive the challenge </div>
                <div onClick={()=>{this.changesection()}}>More about Jon</div>
                <div id="MainStoryBorder"></div>
              </div>

              <div className="MainStory-right MainStory-test" onScroll={()=>{this.scroll()}}>

              {
                paragraphs.map((a,b)=>{
                  return(
                      <div className="normp" dangerouslySetInnerHTML={{__html:a.text}} key={b+"MainStory"}>
                      </div>
                  )
                })

              }
              </div>

          </div>
        </div>
      )

    }
    else {
        return(
          <div id="MainStory" className="flex">
            <div className="MainStory">

                <div className="MainStory-left MainStory-test">
                  <div id="author"></div>
                  <div>Breaking 3</div>
                  <div>Relive the challenge </div>
                  <div onClick={()=>{this.changesection()}}>Back to the challenge</div>
                  <div id="MainStoryBorder"></div>
                </div>

                <div className="MainStory-right MainStory-test" onScroll={()=>{this.scroll()}}>

                {
                  paragraphsJon.map((a,b)=>{
                    return(
                        <div className="normp" dangerouslySetInnerHTML={{__html:a.text}} key={b+"MainStory"}>
                        </div>
                    )
                  })

                }
                </div>

            </div>
          </div>
        )
    }



}

}

export default MainStory
