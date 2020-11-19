import React from "react";


class MainFooter extends React.Component{

constructor(props){
  super(props);
  this.convert=this.convert.bind(this);
}

convert(){
  /*                    */
  var inputobject = {};
  document.querySelectorAll('.inputdata').forEach((node,num)=>{
    inputobject[node.id] = node.value;
  })
  var json = JSON.stringify(inputobject);
  console.log(json);

  if(Object.values(inputobject).join(",").replace(/,/g,"").length>5){
        var settings = {
          "url": "https://zq2ov74bee.execute-api.us-east-1.amazonaws.com/test/sendMessageWithTwilio",
          "method": "POST",
          "Access-Control-Allow-Origin":"*",
          "timeout": 0,
          "headers": {
            "Content-Type": "application/json"
          },
          "data": json,
        };

        $.ajax(settings).done(function (response) {
          console.log(response);
        });

  }/*end of if*/
  else{
    console.log("Didn't enter enough data");
  }


}


render(){
  return(
    <div id="MainFooterbox">
      <div id="MainFooter" className="MainFooter">

        <div id="formheader">
            <p>Register Interest</p>
            <p>Get notified when sub3 are ready to order</p>
        </div>

        <form>
          <div className="formgroup flexCol">
            <label for="firstname">First Name</label>
              <input className="inputdata" id="firstname" type="text" name="firstname" placeholder="First Name" required />
          </div>

          <div className="formgroup flexCol">
            <label for="lastname">Last Name</label>
            <input className="inputdata" id="lastname" type="text" name="lastname" placeholder="Last Name" required />
          </div>
          <div className="formgroup flexCol">
            <label for="email">Email</label>
            <input className="inputdata" id="email" type="text" name="email" placeholder="Email" required/>
          </div>
          <div className="formgroup flexCol">
            <label for="interest">Interest</label>
            <textarea className="inputdata" id="interest" type="text"  name="interest" placeholder="Message" required />
          </div>

          <div className="formgroup flexCol">
            <input type="button" value="Submit" onClick={()=>{this.convert()}}/>
          </div>
        </form>

        <div id="space">
        </div>

      </div>
    </div>

  )
}

}

export default MainFooter
