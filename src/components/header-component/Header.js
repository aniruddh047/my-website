import './Header.scss';
import React  from 'react';
import a_logo from "../../assets/images/a-logo.png";
import logoSound from "../../assets/sounds/logosound.mp3";
import more_btn from "../../assets/images/more-image.svg"


function redirect(target){
   document.getElementById(target).scrollIntoView({behavior: 'smooth',block: "start", inline: "nearest"});
   toggleMobileMenu();
}   

function toggleMobileMenu(){
  if(window.innerWidth < 993){
  var navState = document.getElementById('js-navbar');
  if(navState.style.display === 'none'){
    navState.style.display = 'block';
  }
  else {
    navState.style.display = 'none';
  }
}
} 
export class Header extends React.Component{

play() {
  var audio = document.getElementById('audio');
  audio.play();
} 

render() {
    return (
    <div className="header-styling">
    <audio id="audio">
      <source src={logoSound} type="audio/mpeg" />
    </audio>
        <span className="logo-styling"><img className="image-styling" alt="main-logo"  onClick={this.play}/></span>
        <span><img src={more_btn} onClick={toggleMobileMenu} alt="more-options" id="js-more-options" className="more-options"/></span>
        <nav id="js-navbar">
          <ul>
            <li  onClick={() =>{redirect("js-skills-pointer");}} className="nav-links ripple-container">
            SKILLS
            </li>/
             <li onClick={() => {redirect( "js-testimonials-pointer");}} className="nav-links ripple-container">
             TESTIMONIALS
            </li>/
            <li onClick={() => {redirect("js-about-pointer");}} className="nav-links ripple-container">
            ABOUT
            </li>/
             <li onClick={() => {redirect("contact-section");}} className="nav-links ripple-container">
            CONTACT
            </li>
          </ul>
        </nav>
    </div> 
    );
}
};

