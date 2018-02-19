import './about-and-contact.scss';
import React  from 'react';
import profilepic from '../../assets/images/pic4.jpg';
import fbLogo from '../../assets/images/facebook.png';
import instaLogo from '../../assets/images/instagram.png';
import linkedinLogo from '../../assets/images/linkedin.png';
import gitLogo from '../../assets/images/github.png';


export class AboutNContact extends React.Component{

render() {
    return (
    <div>
        <div className="about-container">
          <div id="js-about-pointer" className="component-pointers"></div>
            <div className="component-heading about-heading">About me</div>
            <div className="about-text-container">
              <div className="about-text">   
                <div className="quote-text">
                  <h3 className="quote-content">"Live as if you were to die tomorrow. Learn as if you were to live forever." </h3>
                  <span>- Mahatma Gandhi</span>
                </div>
                <br/>
                <div className="bio">  
                 <p>Hi, I'm Aniruddh.</p>
                 <p>I am a front-end web-developer passionate about creating great user experiences.</p> 
                 <p>I'm excited about learning new stuff in the ever changing front end space.</p>
                </div>
              </div>
            </div>
        </div>
        <div id="contact-section" className="contact-container">
          <div className="contact-text" >Contact me via:</div>
          <div className="social-section">
          <a href="https://www.facebook.com/aniruddh.upparna.9" target="_blank" rel="noopener noreferrer" ><img className = "social-logos" alt="facebook-logo" src={fbLogo} /></a>
          <a href="https://www.instagram.com/ak_047_m41a" target="_blank" rel="noopener noreferrer"><img className = "social-logos" alt="instagram-logo" src={instaLogo} /></a>
          <a href="https://www.linkedin.com/in/aniruddh-upparna-72570494" target="_blank" rel="noopener noreferrer"><img className = "social-logos" alt="linkedin-logo" src={linkedinLogo} /></a>
          <a href="https://github.com/aniruddh047" target="_blank" rel="noopener noreferrer"><img className = "social-logos" alt="github-logo" src={gitLogo} /></a>
          </div>
          <div className="copyright-info">
            <div>&copy; {(new Date()).getFullYear()} Aniruddh Upparna </div>
            <div>All designated trademarks, logos and brands are the property of their respective owners.</div>
          </div>  
        </div>
    </div>
    );
}
};

