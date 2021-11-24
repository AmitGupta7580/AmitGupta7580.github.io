import './css/intro.css';
import './css/glitch.css';
import React from 'react';
import LinkBar from './components/NavBar';
import Front from './components/Front';
import WelcomeIntro from './components/WelcomeIntro';
import { Component } from 'react';
import Anime, { anime } from 'react-anime';

class App extends Component {

  componentDidMount(){

    // var front_elem = document.getElementById('front');
    // var intro_elem = document.getElementsByClassName('intro')[0];
    // front_elem.style.display = "none";

    // var welcome_text_elem = document.getElementsByClassName('ml12')[0];
    // var welcome_text = welcome_text_elem.innerHTML;

    // welcome_text_elem.innerHTML = "";
    // welcome_text.split('').forEach(letter => {
    //   if(letter !== " "){
    //     welcome_text_elem.innerHTML += "<span class='letter'>" + letter + "</span>";
    //   }
    // });

    // this.animationRef.current.restart();

    // animation

    // var in_duration = 1200;
    // var out_duration = 1000;
    // var translateX = 30;
    // var target_elems = document.getElementsByClassName('letter');

    // // display animation
    // for(var i=0; i<elems.length; i++){
    //   var target_elem = elems[i];
    // }

    
    // setTimeout(function(){
    //   // document.getElementById("front").style.backgroundImage = "url('https://ammmy.me/images/front.jpg')";
    //   intro_elem.style.display = "none";
    //   front_elem.style.display = "block";
    // },4600);
  }

  render() {
    return (
      <>
        <LinkBar/>
        {/* <WelcomeIntro/> */}
        <Front/>
      </>
    );
  }
}

export default App;
