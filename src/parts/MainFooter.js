import React from "react";


class MainFooter extends React.Component{

constructor(props){
  super(props);
  this.state={
    complete:0
  }
  this.convert=this.convert.bind(this);
}

convert(){
  var  d=new Date();
  var date=d.getDate()+"/"+d.getMonth()+"/"+d.getUTCFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
  var inputobject = {"created":date,"status":"pending"};
  var test=1;
  document.querySelectorAll('.inputdata').forEach((node,num)=>{
    inputobject[node.id] = node.value;
    (node.value==""?test=test*0:test=test*1);
  })
  var json = JSON.stringify(inputobject);
  //console.log(json);


  if(test==1 && this.state.complete==0){
        var settings = {
          "url": "https://grj5cny95m.execute-api.us-east-1.amazonaws.com/prod/sub3-insert-record",
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

        this.setState(()=>{
          return {complete:1}
        })

  }/*end of if*/
  else{
    console.log("Didn't enter enough data");
  }


}


render(){
        if(this.state.complete==1){
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

                  <div className="formgroup flexCol finishgroup">
                    <div className="" onClick={()=>{this.convert()}} id="circle">
                      <div className="circlebox circleboxgreen">
                      </div>
                      <p id="sendstatus">Sent</p>
                    </div>
                  </div>
                </form>

                <div id="space">
                </div>

              </div>
            </div>

          )
        }
        else {
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

                  <div className="formgroup flexCol finishgroup">
                    <div className="" onClick={()=>{this.convert()}} id="circle">
                      <div className="circlebox">
                      </div>
                      <p id="sendstatus">Send</p>
                    </div>
                  </div>
                </form>

                <div id="space">
                </div>

              </div>
            </div>

          )
        }

}

}

export default MainFooter
