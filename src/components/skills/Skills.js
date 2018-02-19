import './skills.scss';
import React  from 'react';
import angular_logo from "../../assets/images/angular_logo.png";
import css3_logo from "../../assets/images/css3_logo.png";
import HTML5_logo from "../../assets/images/HTML5_Logo.png";
import jquery_logo from "../../assets/images/jquery_logo.png";
import js_logo from "../../assets/images/js_logo.png";
import photoshop_logo from "../../assets/images/photoshop.png";
import react_logo from "../../assets/images/react_logo.svg";
import bootstrap_logo from "../../assets/images/bootstrap_logo.png";
import node_logo from "../../assets/images/node_logo.png"

export var skillArray  = [
  {
  skillName:'HTML-5', 
  proficiency:3 ,
  iconPath:HTML5_logo
  } ,
  {
  skillName:'CSS-3', 
  proficiency:3 ,
  iconPath:css3_logo
 },
 {
  skillName:'Javascript', 
  proficiency:3 ,
  iconPath:js_logo
 },
  {
  skillName:'jQuery', 
  proficiency:3 ,
  iconPath:jquery_logo
 },
 {
  skillName:'Adobe Photoshop', 
  proficiency:1 ,
  iconPath:photoshop_logo
 },
 {
  skillName:'Angular', 
  proficiency: 2 ,
  iconPath:angular_logo
 },
 {
  skillName:'React', 
  proficiency:2 ,
  iconPath:react_logo
 },
 {
  skillName:'Bootstrap', 
  proficiency:3 ,
  iconPath:bootstrap_logo
 },
 {
  skillName:'Node Js', 
  proficiency:1 ,
  iconPath:node_logo
 }
];
 
var skillTiles = skillArray.map(function(obj){
  var proficiencyString;
   switch(obj.proficiency){
    case 2 : proficiencyString = "Intermediate";
    break;
    case 3 :proficiencyString="Proficient";
    break;
    default: proficiencyString = "Beginner";
   }
return (
        <div className="skill-item" key={obj.skillName}>
          <img className="image-div" alt="skill-logo" src={obj.iconPath} />
          <div className="skill-info"><div className="skill-backface"><p className="skill-name">{obj.skillName}</p><span>Level:</span><p className="proficiency">{proficiencyString}</p></div></div>
        </div>
       )
  });

export class Skills extends React.Component{
render() {
    return (
      <div  className="skill-container">
        <div id="js-skills-pointer" className="component-pointers"></div>
        <div className="component-heading skills-heading"><b>Skills</b></div>
        <div className="skills-block">
            {skillTiles} 
        </div>
      </div>
    );
}
};






