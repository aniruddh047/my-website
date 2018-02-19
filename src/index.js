import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {Header} from './components/header-component/Header';
import {Body1} from './components/body1/Body1';
import {Skills} from './components/skills/Skills';
import {Testimonials} from './components/testimonials/testimonials';
import {AboutNContact} from './components/about-and-contact/About-and-contact';

class App extends Component {

   componentDidMount() {
   window.addEventListener('scroll',function(){
      checkOffset();
     });
   }

  render() {
    return (
      <div className="App" >
        <div id="page-top"></div>
        <div className="header-n-body1">
          <Header />
          <Body1 />
        </div>
        <Skills />
        <Testimonials />
        <AboutNContact />
        <div className="scroll-top-button" id="top" onClick={()=>{
            document.getElementById('page-top').scrollIntoView({
              behavior:'smooth'
          });
        }}>
        </div>
      </div>
    );
  }
}


function checkOffset(){
  if( window.innerWidth > 992 && window.pageYOffset > 500){
     document.getElementsByClassName("scroll-top-button")[0].style.display="block";
     document.getElementsByClassName("header-styling")[0].classList.add('header-styling-alt');
  }
  else{
    document.getElementsByClassName("scroll-top-button")[0].style.display="none";
    document.getElementsByClassName("header-styling")[0].classList.remove('header-styling-alt');
  } 
}

// export default App;

ReactDOM.render(
    <App />,document.getElementById('app')
);

