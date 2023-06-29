

export default function MainFooter(){

  return(
    <div id="MainFooterbox">
      <div id="MainFooter" className="MainFooter">

        <div id="formheader">
            <p className="title">Contact Jon</p>
            <p className="normp">For speaking or collaboration enquiries, please contact Jon below:</p>
        </div>

        <form id="contactform" action="https://formsubmit.io/send/project.sub.three@gmail.com" method="POST">
           <input name="_redirect" type="hidden" id="name" value="https://project-sub3.com/"/>

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
            <input name="_formsubmit_id" type="text" style={{"display":"none"}}/>
          </div>
          
          <div className="formgroup flexCol formCenter">
            <input id="formSend" value="Submit" type="submit"/>
          </div>
        </form>

        <div id="space">
        </div>

      </div>
    </div>

  )
}

