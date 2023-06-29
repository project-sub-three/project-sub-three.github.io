import React from "react";
import MainTextData from '../data/MainTextData.json';

class MainStory extends React.Component{

constructor(props){
  super(props);
  this.state={data:MainTextData};
  this.scroll=this.scroll.bind(this);
}


scroll(){
  var TDTS=document.querySelector('.MainStory-right').scrollHeight-document.querySelector('.MainStory-right').clientHeight
  var ToGo=(TDTS-document.querySelector('.MainStory-right').scrollTop)/TDTS;
  document.getElementById('MainStoryBorder').style.height=Math.round(ToGo*100)+"%";
}

render(){
var {paragraphs}=this.state.data;
console.log(paragraphs);

    return(
      <div id="MainStory" className="flex">
        <div className="MainStory">

            <div className="MainStory-left MainStory-test">
              <div id="author"></div>
              <div>#ProjectSub3</div>
              <div>Words from Jon</div>
              <div id="MainStoryBorder"></div>
            </div>

            <div className="MainStory-right MainStory-test" onScroll={()=>{this.scroll()}}>
            {
              paragraphs.map((a,b)=>{
                return(
                  <div className="normp" key={b+"MainStory"}>
                    {a.text}
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

export default MainStory
