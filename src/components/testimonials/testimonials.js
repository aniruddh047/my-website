import './testimonials.scss';
import React from 'react';

export var dataArray = [{
        name: 'Hemakumar Kakaraparti',
        designation: 'Manager (Experience Technology), SapientRazorfish, Bengaluru',
        testimonial: 'I would like to nominate Aniruddh Upparna for Best Debutant award. Being first real time project and new to hybris domain he picked-up the momentum so quickly and delivered the stories on his own by taking extra responsibility. He worked on critical modules (Login, Registration, Potency Report, Account Management etc..) on his own without dependent on someone to come and guide him how to start. He is a calm person, easy going, eager to learn new technologies, ready to take challenges.'
    },
    {
        name: 'Yatish Kumaraswamy ',
        designation: 'Manager (Program Management), SapientRazorfish, Bengaluru',
        testimonial: 'I would like to nominate Aniruddh Upparna for "Best Debutant" award for his contribution to KPMG Baxalta Shire Digital eCommerce PLatform US Release. He is a promising UX resource and believes in accountability. He delivers as per agreed quality and timeline. he is approachable by team members and does not hesitate to reach out to different people if he is stuck somewhere. Despite working in a distributed team model, he is doing good work in leveraging & supporting the team across different geo locations both within India and US. In parallel out of his own interest he has been learning to work on reactJS and AngularJS. Hybris team loves working with Aniruddh because of his easy going nature. He is a great asset to Studio'
    },
    {
        name: 'Bijoy Anupam',
        designation: 'Senior UI Developer (Experience Technology), SapientRazorfish, Bengaluru',
        testimonial: 'For Openness, he is one of the person in the team who is open to take up any challenge. For his age and experience, he has the ability to understand bigger problems and work out in a systematic way. A punctual person and always calm. Keep it up, Aniruddh, you are going on the right track.'
    }
];

var testimonialObj = dataArray.map(function(obj){
    return(
        <div className="testimonial-block" key={obj.name}>
            <div className="testimonial-title"><b>{obj.name}</b></div>
            <div className="testimonial-title"><b>{obj.designation}</b></div>
            <div className="testimonial-body">{obj.testimonial}</div>
         </div>   
    );
});


export class Testimonials extends React.Component {
    render() {
        return ( 
            <div  className = "testimonials-container" >
             <div id="js-testimonials-pointer" className="component-pointers"></div>
                <div className="testimonials-heading">Testimonials</div>
                <div>
                    {testimonialObj}
                </div>
            </div>
        );
    }
};