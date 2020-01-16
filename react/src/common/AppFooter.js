import React, { Component } from 'react';

class AppFooter extends Component {
    render() {
        return (
    <React.Fragment>
    <footer id="footer" className="midnight-blue hidden-xs">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <ul className="">
              <div className="col-md-4">
                <li><a href="#"><h6>ABOUT US</h6></a></li>
                <div className="foo-text">
                  <p>Giftinglife Foundation is an NGO in<br /> India directly benefitting<br /> over 750,000 children<br /> and families through more than<br /> 350 welfare projects in education,<br /> health, livelihood and woman <br/>empowerment spread across <br/> over 1000 remote villages and slums in 25 <br/>states in India.</p>
                  <p>
                    <li><a href="http://www.giftinglifefoundationindia.org/impact.html">Our Impact</a></li>
                    <li><a href="http://www.giftinglifefoundationindia.org/our_presence.html">Reach & Presence</a></li>
                    <li><a href="http://www.giftinglifefoundationindia.org/civic-driven-change.html">Civic Driven Change</a></li>
                    <li><a href="http://www.giftinglifefoundationindia.org/smilestones.html">Smilestones</a></li>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <li><a href="#"><h6>OUR WORK</h6></a></li>
                <div className="foo-text">
                  <p>
                    <li><a href="http://www.giftinglifefoundationindia.org/education.html">Education</a></li>
                    <li><a href="http://www.giftinglifefoundationindia.org/smile_on_wheels.html">Health</a></li>
                    <li><a href="http://www.giftinglifefoundationindia.org/e_learning.html">Livelihood</a></li>
                    <li><a href="http://www.giftinglifefoundationindia.org/swabhiman.html">Women Empowerment</a></li>
                    <li><a href="http://www.giftinglifefoundationindia.org/disaster_management.html">Disaster Response</a></li>
                    <li><a href="http://www.giftinglifefoundationindia.org/empowering-grassroots.html">Empowering Grassroots</a></li>
                    <li><a href="http://www.giftinglifefoundationindia.org/childforchild.html">Child for Child</a></li>
                  </p>
                </div>
                <li><a href="#"><h6>CAMPAIGNS</h6></a></li>
                <div className="foo-text">
                  <p>
                    <li><a href="http://www.giftinglifefoundationindia.org/me/">Every Child in School</a></li>
                    <li><a href="https://www.giftinglifefoundationindia.org/plate-half-full/">Plate Half-Full</a></li>
                    <li><a href="http://www.giftinglifefoundationindia.org/she-can-fly/">She Can Fly</a></li>
                    <li><a href="http://www.giftinglifefoundationindia.org/health-cannot-wait.html">Health Cannot Wait</a></li>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <li><a href="#"><h6>GET INVOLVED</h6></a></li>
                <div className="foo-text">
                  <p><li><a href="http://www.giftinglifefoundationindia.org/donation.html">Individual Support</a></li>
                  <li><a href="http://www.giftinglifefoundationindia.org/csr.html">Corporate Partnerships</a></li>
                  <li><a href="http://youvolunteer.in/">Volunteer</a></li>
                  <li><a href="http://www.giftinglifefoundationindia.org/career.html">Careers</a></li>
                </p>
                </div>
                <li><a href="http://www.giftinglifefoundationindia.org/faq.html"><h6>FAQS</h6></a></li>
                <li><a href="http://www.giftinglifefoundationindia.org/press.html"><h6>MEDIA CENTRE</h6></a></li>
                <li><a href="#"><h6>RESOURCE CENTRE</h6></a></li>
                <div className="foo-text">
                  <p><li><a href="http://www.giftinglifefoundationindia.org/annual-report.html">Annual Report</a></li>
                 <li><a href="http://www.giftinglifefoundationindia.org/newsletter.html"> Newsletter</a></li>
                  <li><a href="http://www.giftinglifefoundationindia.org/photo-journey.html">Photo Journey</a></li>
                  <li><a href="http://www.giftinglifefoundationindia.org/case_studies_resource.html">Stories of Change </a></li></p>
                </div>
                <div className="">
                  <img className="footer-child" src="images/swabhiman/child-footer.png" />
                </div>
              </div>
            </ul>
          </div>
          <div className="col-sm-4">
            <div className="form-area">
              <h4>WRITE TO US</h4>
              <h5><b>Giftinglife Foundation</b></h5>
              <p>161 B/4, 3rd Floor, Gulmohar House<br/>
              Yusuf Sarai Community Centre<br/>
              New Delhi-110049<br/>
              Phone : +91-11-43123700</p>
              <form role="form" style={{"marginTop": "-10px"}} action="contact_submit.asp" id="emailForm" method="post">
                <div className="form-group">
                  <input type="text" className="form-control" id="name" required name="name" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="email" required name="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" type="textarea" required id="textarea" name="textarea" placeholder="Message"  ></textarea>  
                </div>
                 <button type="submit" className="btn btn-details4 pull-left"><b>Send Message</b></button>
         <input type="hidden" name="formtype" id="formtype" value="writetous" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    <div className="bottom-footer text-center">
      <div className="container">
        <p>&copy; 2019 <a target="_blank" href="http://giftinglifefoundationindia.org/">Giftinglife Foundation</a>. All Rights Reserved. | <a href="https://mail.giftinglifefoundationindia.org/" target="_blank">Staff Login</a>&nbsp; | <a href="http://www.giftinglifefoundationindia.org/elearning/login.asp" target="_blank">Partners Login</a> | <span  style={{"cursor": "pointer"}} data-toggle="modal" data-target="#policy">Privacy Policy </span></p>
        
      </div>
    </div>    
        <div className="modal fade" id="policy" role="dialog">
        <div className="modal-dialog modal-lg">
        
           <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Privacy Policy - Giftinglife Foundation</h4>
            </div>
            <div className="modal-body">
                 <div className="embed-responsive embed-responsive-16by9">
                   <iframe className="embed-responsive-item" src="privacy-policy.html" allowFullScreen></iframe>
                 </div>                   
               </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
          
        </div>
        </div>
    <div className="modal fade" id="about-us" tabIndex="-1" role="dialog" aria-labelledby="project-4-label" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
             <h3 className="modal-title" id="project-4-label">About Giftinglife Foundation India</h3>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <p>Giftinglife Foundation is an NGO in India directly benefitting over 750,000 children and their families every year, through more than 350 live welfare projects on education, healthcare, livelihood and women empowerment, in over 1000 remote villages and slums across 25 states of India.</p>
                <p>Education is both the means as well as the end to a better life: the means because it empowers an individual to earn his/her livelihood and the end because it increases one's awareness on a range of issues â from healthcare to appropriate social behaviour to understanding one's rights â and in the process help him/her evolve as a better citizen.</p>
                <p>Doubtless, education is the most powerful catalyst for social transformation. But child education cannot be done in isolation. A child will go to school only if the family, particularly the mother, is assured of healthcare and empowered. Moreover, when an elder sibling is relevantly skilled to be employable and begins earning, the journey of empowerment continues beyond the present generation.</p>
                <p>Realizing this, Giftinglife Foundation an NGO in India, beginning in the corridors of education, adopted a lifecycle approach of development, focusing its interventions on children, their families and the larger community.</p>
                <p>Giftinglife Foundation believes that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Following this model of Civic Driven Change, Giftinglife Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives.</p>
                <p>Today, 8 million children in India are out of school â surrounded by poverty, illness and despair; they are fighting a daily battle for their survival. Together, we can help a child and bring hope in their lives. Together, we can bring change and make it last.</p>
                
              </div>
              
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-details2" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    
    
<div id="shareModal" className="modal fade" role="dialog">
      <div className="modal-dialog">
    
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">Spread the word</h4>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <div >
                <p className="text-center">Share this page with your friends and spread the smiles further! Use 
                <br/></p>
        <div className="text-center" >
                <ul className="horizantalUL">
                    <li><a href="https://www.facebook.com/giftinglifefoundationindia.org"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                    <li><a href="https://twitter.com/giftinglifefoundation"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.youtube.com/user/tubeforchange"><i className="fa fa-youtube-square" aria-hidden="true"></i></a></li>
                    <li><a href="mailto:yours@email.com?Subject=Please check this site"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                    <li><a href="https://plus.google.com/+giftinglifefoundation"><i className="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/smile-foundation"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                  </ul>
          </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  
  <div id="signupModal" className="modal fade" role="dialog">
      <div className="modal-dialog">
        
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">Sign Up</h4>
          </div>
          <div className="modal-body">
            
          </div>
         
        </div>
      </div>
    </div>
</React.Fragment>
);
}
}

export default AppFooter;