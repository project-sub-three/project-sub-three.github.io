import React from "react";


class NavIcon extends React.Component{

constructor(props){
  super(props);
  this.state={
    menu:0,
    started:0
  };
  this.start=this.start.bind(this);

}

start(){
  console.log("started");
  this.setState(()=>{
    if(this.state.started==0){
      return {started:1}
    } else{
      return {started:0}
    }

  })
}



render(){

if(this.state.started==0){
  return(
    <div id="NavIcon">
        <div id="iconbox">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             id="svgbike" viewBox="0 0 1280.000000 1024.000000"
             preserveAspectRatio="xMidYMid meet" onClick={()=>{this.start()}}>
            <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
            id="cyclist" stroke="none" fill="white">
            <path d="M8398 10230 c-281 -48 -531 -240 -643 -495 -55 -123 -70 -199 -69
            -350 1 -162 19 -246 79 -366 133 -265 360 -431 648 -475 115 -18 197 -13 323
            16 307 72 548 314 626 630 29 116 29 292 -1 405 -69 261 -249 469 -499 579
            -126 55 -325 79 -464 56z"/>
            <path d="M6855 8526 c-82 -21 -152 -63 -233 -140 -42 -40 -547 -517 -1122
            -1060 -575 -543 -1071 -1015 -1104 -1048 -84 -88 -119 -167 -124 -283 -6 -139
            38 -250 135 -336 21 -19 381 -290 800 -604 l762 -570 1 -1195 c0 -1300 -1
            -1276 56 -1381 150 -275 598 -275 748 0 57 106 56 71 56 1492 0 902 -3 1324
            -11 1365 -14 75 -48 148 -96 203 -20 24 -189 158 -376 298 -186 140 -337 258
            -335 264 2 5 114 114 249 242 135 127 479 453 763 722 285 270 521 491 525
            493 5 1 160 -200 345 -447 361 -481 372 -493 496 -544 55 -22 56 -22 750 -25
            743 -3 780 -1 879 45 155 74 249 266 221 451 -20 133 -92 242 -203 306 -89 52
            -133 56 -737 56 l-555 0 -595 792 c-631 840 -633 844 -750 890 -50 20 -76 22
            -275 25 -155 1 -235 -2 -270 -11z"/>
            <path d="M2365 5114 c-652 -67 -1176 -308 -1612 -742 -403 -402 -650 -905
            -735 -1497 -20 -137 -16 -523 5 -665 47 -305 122 -543 252 -801 120 -239 256
            -428 450 -628 226 -232 420 -373 710 -517 889 -439 1957 -321 2730 303 130
            105 340 321 436 448 458 611 621 1371 453 2119 -164 734 -672 1378 -1354 1717
            -251 124 -489 199 -780 244 -101 15 -467 28 -555 19z m466 -870 c471 -75 881
            -340 1150 -742 127 -190 219 -419 260 -648 30 -167 30 -421 0 -588 -126 -707
            -681 -1261 -1387 -1387 -167 -30 -421 -30 -588 0 -376 67 -743 273 -987 554
            -206 237 -346 528 -400 833 -30 167 -30 421 0 588 81 454 342 857 720 1114
            255 174 507 262 846 296 70 7 290 -4 386 -20z"/>
            <path d="M10045 5114 c-652 -67 -1176 -308 -1612 -742 -403 -402 -650 -905
            -735 -1497 -20 -137 -16 -523 5 -665 47 -305 122 -543 252 -801 120 -239 256
            -428 450 -628 226 -232 420 -373 710 -517 889 -439 1957 -321 2730 303 130
            105 340 321 436 448 458 611 621 1371 453 2119 -164 734 -672 1378 -1354 1717
            -251 124 -489 199 -780 244 -101 15 -467 28 -555 19z m466 -870 c471 -75 881
            -340 1150 -742 127 -190 219 -419 260 -648 30 -167 30 -421 0 -588 -126 -707
            -681 -1261 -1387 -1387 -167 -30 -421 -30 -588 0 -376 67 -743 273 -987 554
            -206 237 -346 528 -400 833 -30 167 -30 421 0 588 81 454 342 857 720 1114
            255 174 507 262 846 296 70 7 290 -4 386 -20z"/>
            </g>
            </svg>
            <div id="a" className="rotate"><div><a href="#"><i className="fa fa-facebook"></i></a></div></div>
            <div id="b" className="rotate"><div><a href="#" className="fa fa-twitter"></a></div></div>
            <div id="c" className="rotate"><div><a href="#" className="fa fa-instagram"></a></div></div>
            <div id="time">2:57:58</div>
        </div>
    </div>
  )
} else{
  return(
    <div id="NavIcon">
        <div id="iconbox">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             id="svgbike" viewBox="0 0 1280.000000 1024.000000"
             preserveAspectRatio="xMidYMid meet" onClick={()=>{this.start()}}>
            <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
            id="cyclist" stroke="none" fill="white">
            <path d="M8398 10230 c-281 -48 -531 -240 -643 -495 -55 -123 -70 -199 -69
            -350 1 -162 19 -246 79 -366 133 -265 360 -431 648 -475 115 -18 197 -13 323
            16 307 72 548 314 626 630 29 116 29 292 -1 405 -69 261 -249 469 -499 579
            -126 55 -325 79 -464 56z"/>
            <path d="M6855 8526 c-82 -21 -152 -63 -233 -140 -42 -40 -547 -517 -1122
            -1060 -575 -543 -1071 -1015 -1104 -1048 -84 -88 -119 -167 -124 -283 -6 -139
            38 -250 135 -336 21 -19 381 -290 800 -604 l762 -570 1 -1195 c0 -1300 -1
            -1276 56 -1381 150 -275 598 -275 748 0 57 106 56 71 56 1492 0 902 -3 1324
            -11 1365 -14 75 -48 148 -96 203 -20 24 -189 158 -376 298 -186 140 -337 258
            -335 264 2 5 114 114 249 242 135 127 479 453 763 722 285 270 521 491 525
            493 5 1 160 -200 345 -447 361 -481 372 -493 496 -544 55 -22 56 -22 750 -25
            743 -3 780 -1 879 45 155 74 249 266 221 451 -20 133 -92 242 -203 306 -89 52
            -133 56 -737 56 l-555 0 -595 792 c-631 840 -633 844 -750 890 -50 20 -76 22
            -275 25 -155 1 -235 -2 -270 -11z"/>
            <path d="M2365 5114 c-652 -67 -1176 -308 -1612 -742 -403 -402 -650 -905
            -735 -1497 -20 -137 -16 -523 5 -665 47 -305 122 -543 252 -801 120 -239 256
            -428 450 -628 226 -232 420 -373 710 -517 889 -439 1957 -321 2730 303 130
            105 340 321 436 448 458 611 621 1371 453 2119 -164 734 -672 1378 -1354 1717
            -251 124 -489 199 -780 244 -101 15 -467 28 -555 19z m466 -870 c471 -75 881
            -340 1150 -742 127 -190 219 -419 260 -648 30 -167 30 -421 0 -588 -126 -707
            -681 -1261 -1387 -1387 -167 -30 -421 -30 -588 0 -376 67 -743 273 -987 554
            -206 237 -346 528 -400 833 -30 167 -30 421 0 588 81 454 342 857 720 1114
            255 174 507 262 846 296 70 7 290 -4 386 -20z"/>
            <path d="M10045 5114 c-652 -67 -1176 -308 -1612 -742 -403 -402 -650 -905
            -735 -1497 -20 -137 -16 -523 5 -665 47 -305 122 -543 252 -801 120 -239 256
            -428 450 -628 226 -232 420 -373 710 -517 889 -439 1957 -321 2730 303 130
            105 340 321 436 448 458 611 621 1371 453 2119 -164 734 -672 1378 -1354 1717
            -251 124 -489 199 -780 244 -101 15 -467 28 -555 19z m466 -870 c471 -75 881
            -340 1150 -742 127 -190 219 -419 260 -648 30 -167 30 -421 0 -588 -126 -707
            -681 -1261 -1387 -1387 -167 -30 -421 -30 -588 0 -376 67 -743 273 -987 554
            -206 237 -346 528 -400 833 -30 167 -30 421 0 588 81 454 342 857 720 1114
            255 174 507 262 846 296 70 7 290 -4 386 -20z"/>
            </g>
            </svg>
            <div id="a" className="rotate svgbikea"><div><a href="#" class="fa fa-facebook"></a></div></div>
            <div id="b" className="rotate svgbikeb"><div><a href="#" class="fa fa-twitter"></a></div></div>
            <div id="c" className="rotate svgbikec"><div><a href="#" class="fa fa-instagram"></a></div></div>
            <div id="time">2:57:58</div>
        </div>
    </div>
  )
}



  }
}

export default NavIcon
