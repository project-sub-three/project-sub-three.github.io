'use client'
import {useState} from 'react';
import MainBarsData from '../data/MainBarsData.json';


export default function MainBars(){

  const [scrollTop, setScrollTop] = useState('100%');
  const handleScroll = event => {

    //event.currentTarget.scrollTop
    let TDTS=document.querySelector('.MainBars-right').scrollHeight-document.querySelector('.MainStory-right').clientHeight
    let ToGo=(TDTS-document.querySelector('.MainBars-right').scrollTop)/TDTS;
    let per = Math.round(ToGo*100)+"%";

    setScrollTop(per);
  };

  return(
    <div id="MainBars" className="flex paddingBottom">
      <div className="MainBars row flexCenter maxWidth marginAuto">


              <div className="MainBars-right col-md-9 col-sm-12" onScroll={handleScroll}>
                        {
                            MainBarsData.paragraphs.map((item,pos)=>{
                              return (
                                <div className="normp" key={`MainBars-${pos}`}>
                                  {item.text}
                                </div>
                              )
                            })
                          }
                </div>

              <div className="MainBars-left col-md-3 col-sm-12">
                <div id="bars">
                  <a href="http://www.rra.org.uk/" target="_blank"></a>
                </div>
                <div className="textCenter">History of the RRA</div>
                <div className="textCenter" style={{'margin-bottom':'20px'}}>100 mile record</div>
                <div id="MainBarsBorder" style={{
                        height:scrollTop
              }}></div>
               <div id="MainBarsBorderMobile" style={{
                        width:scrollTop
              }}></div>
              </div>


      </div>
    </div>

  )
}
