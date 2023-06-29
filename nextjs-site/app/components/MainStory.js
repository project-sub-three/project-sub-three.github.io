'use client'
import {useState} from 'react';
import MainTextData from '../data/MainTextData.json';


function MainStory(){
  const [scrollTop, setScrollTop] = useState('100%');
  const handleScroll = event => {

    //event.currentTarget.scrollTop
    let TDTS=document.querySelector('.MainStory-right').scrollHeight-document.querySelector('.MainStory-right').clientHeight
    let ToGo=(TDTS-document.querySelector('.MainStory-right').scrollTop)/TDTS;
    let per = Math.round(ToGo*100)+"%";

    setScrollTop(per);
  };
  

    return(
      <div id="MainStory" className="flex paddingBottom">
        <div className="MainStory row maxWidth marginAuto">

            <div className="MainStory-left MainStory-test col-md-3 col-sm-12">
              <div id="author"></div>
              <div>Breaking 3</div>
              <div style={{'margin-bottom':'20px'}} className="textCenter">Relive the challenge</div>
              <div id="MainStoryBorder" style={{
                height:scrollTop
              }}></div>
              <div id="MainStoryBorderMobile" style={{
                width:scrollTop
              }}></div>
            </div>

            <div className="MainStory-right MainStory-test col-md-9 col-sm-12 col-sm-12" onScroll={handleScroll}>
              {
                  MainTextData.paragraphs.map((item,pos)=>{
                    return (
                      <div className="normp" key={`MainStory-${pos}`}>
                        {item.text}
                      </div>
                    )
                  })
                }
            </div>

        </div>
      </div>
    )
}

export default MainStory