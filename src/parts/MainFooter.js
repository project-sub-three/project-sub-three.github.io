import React from "react";


class MainFooter extends React.Component{

constructor(props){
  super(props);
  this.state={
    complete:0,
    message:"aaaa"
  }
  this.convert=this.convert.bind(this);
  this.emailcheck=this.emailcheck.bind(this);
}
emailcheck(val){
  console.log(val)
  if(val.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)==null){
      this.setState((state)=>{
        return  {
          complete:2,
          message:"Invalid Email",
          email:0
        }
      });
    }
    else{
      this.setState((state)=>{
        return  {
          complete:0,
          message:"Send",
          email:1
        }
      });
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

  if(test==1 && this.state.email==1 && this.state.complete==0  ){

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
          return {message:"Sent",complete:1}
        })

      }
  else if(test==1 && this.state.email==0 && this.state.complete!==1 ){
          this.setState((state)=>{
            return  {message:"Your Email doesn't look right",complete:2}
          });

          this.change = setTimeout(() => {
                 this.setState({complete:0})
             }, 2000)

  }
  else{
          this.setState((state)=>{
            return  {message:"You Missed a Field",complete:2}
          });

          this.change = setTimeout(() => {
                 this.setState({message:"Sent",complete:0})
             }, 2000)
        }
}


render(){
var sendstatus={
  'color': 'white',
'fontSize': '20px',
'textAlign': 'center'
};
var space={
  'color':'white'
};

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
                    <input className="inputdata" id="email" type="text" name="email" placeholder="Email" required onChange={()=>{this.emailcheck(document.getElementById('email').value)}}/>
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
                    </div>
                    <p id="sendstatus" style={sendstatus}>{this.state.message}</p>
                  </div>
                </form>

                <div id="space" style={space}>Follow Jonathan on Zwift Jonathan Shubert (ProjectSub3)
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
                    <input className="inputdata" id="email" type="text" name="email" placeholder="Email" required onChange={()=>{this.emailcheck(document.getElementById('email').value)}}/>
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
                    </div>
                    <p id="sendstatus" style={sendstatus}>{this.state.message}</p>
                  </div>
                </form>

                <div id="space" style={space}>Follow Jonathan on Zwift Jonathan Shubert (ProjectSub3)
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
                    <input className="inputdata" id="email" type="text" name="email" placeholder="Email" required onChange={()=>{this.emailcheck(document.getElementById('email').value)}}/>
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
                    </div>
                    <p id="sendstatus" style={sendstatus}>Send</p>
                  </div>
                </form>

                <div id="space" style={space}>Follow Jonathan on Zwift Jonathan Shubert (ProjectSub3)
                </div>

              </div>
            </div>

          )
        }

}

}

export default MainFooter
