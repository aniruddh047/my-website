import './Body1.scss';
import React  from 'react';
import scrollImg from "../../assets/images/mousescroll2.gif" 
export class Body1 extends React.Component{
 
render() {
    return (
    <div>
      <div className="nameTextDiv">
        Hi there!
       <br/> 
        Welcome to my website 
      </div>
      <div className="scroll-styling">
        <img className="scroll-image" alt="mouse-scroll" src={scrollImg} /> <br/> for more
      </div>
    </div>
    );
}
};


