import './Body1.scss';
import React  from 'react';
import scrollImg from "../../assets/images/top-button.svg" 
export class Body1 extends React.Component{
 
render() {
    return (
    <div>
      <div className="nameTextDiv">
        <span className="word-one">HI </span><span className="word-two">THERE, </span> <span className="word-three">I'M </span><span className="word-four">ANIRUDDH </span> 
      </div>
      <div className="scroll-styling">
        <img className="scroll-image" alt="mouse-scroll" src={scrollImg} /> 
      </div>
    </div>
    );
}
};


