import React from "react";


class MainFooter extends React.Component{

constructor(props){
  super(props);
  this.state={
    complete:0
  }
  this.convert=this.convert.bind(this);
  this.emailcheck=this.emailcheck.bind(this);
}
emailcheck(){
  if(document.getElementById('email').value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)==null){
      document.getElementById('email').value="";
      document.getElementById('email').placeholder="Your input doesn't match a pattern we expect";
    }
    else{
      document.getElementById('emailerror').innerHTML="";
    }
}
convert(){
  let  d=new Date();
  let date=d.getDate()+"/"+d.getMonth()+"/"+d.getUTCFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
  let inputobject = {"created":date,"status":"pending"};
  let test=1;
  document.querySelectorAll('.inputdata').forEach((node,num)=>{
    inputobject[node.id] = node.value;
    (node.value==""?test=test*0:test=test*1);
    return;
  })
  let json = JSON.stringify(inputobject);

  if(test==1 && this.state.complete!==1  ){
        document.getElementById('emailerror').innerHTML="";
        let settings = {
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
    this.setState(()=>{
      return {complete:2}
    })
      console.log("Didn't enter enough data");
  }


}


render(){

        if(this.state.complete==1){
          return(
            <div id="MainFooterbox">
              <div id="MainFooter" className="MainFooter">

                <div id="formheader">
                    <p className="title">Register Interest</p>
                    <p className="normp">For enquiries and pre-orders please contact us below.</p>
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
                    <p id="emailerror" style={{'color':'white'}}></p>
                  </div>
                  <div className="formgroup flexCol">
                    <label for="interest">Interest</label>
                    <textarea className="inputdata" id="interest" type="text"  name="interest" placeholder="Message" required />
                  </div>

                  <div className="formgroup flexCol finishgroup">
                    <div className="" id="circle">
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
        else if(this.state.complete==2){
          return(
            <div id="MainFooterbox">
              <div id="MainFooter" className="MainFooter">

                <div id="formheader">
                    <p className="title">Register Interest</p>
                    <p className="normp">For enquiries and pre-orders please contact us below.</p>
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
                    <input className="inputdata" id="email" type="text" name="email" placeholder="Email" required onBlur={()=>{this.emailcheck()}}/>
                    <p id="emailerror"  style={{'color':'white'}}></p>
                  </div>
                  <div className="formgroup flexCol">
                    <label for="interest">Interest</label>
                    <textarea className="inputdata" id="interest" type="text"  name="interest" placeholder="Message" required />
                  </div>

                  <div className="formgroup flexCol finishgroup">
                    <div className="" onClick={()=>{this.convert()}} id="circle">
                      <div className="circlebox circleboxred">
                      </div>
                      <p id="sendstatus">Error</p>
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
                    <p className="title">Register Interest</p>
                    <p className="normp">For enquiries and pre-orders please contact us below.</p>
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
                    <input className="inputdata" id="email" type="text" name="email" placeholder="Email" required onBlur={()=>{this.emailcheck()}}/>
                    <p id="emailerror"  style={{'color':'white'}}></p>
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
