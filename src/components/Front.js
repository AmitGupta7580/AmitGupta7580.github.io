import '../css/intro.css';
import '../css/glitch.css'
import '../css/fontawesome-free-5.15.4-web/css/all.css';
import '../css/w3.css';

import Particle from './Particle';
import Typewriter from "typewriter-effect";

function Front() {

    return (
        <div id="front">

            <div className="w3-xxxlarge w3-text-white front-next-cur">
                <a href="/home"><i className="fas fa-arrow-right"></i></a>
            </div>

            <Particle/>

            <div className="w3-display-middle">
                <div className="w3-container">
                    <h1>
                        <p id="typer1" href="" className="typewrite glitch">
                            <Typewriter
                                options={{
                                    strings: [ "Explore, Learn, Exploit", "Amit Gupta", "I Love to Develop.", "I Love to Code.", "I Love to Learn." ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    pauseFor: 2000
                                }}
                            />
                        </p>
                        <p id="typer2" href="" className="typewrite glitch">
                            <Typewriter
                                options={{
                                    strings: [ "Explore, Learn, Exploit", "Amit Gupta", "I Love to Develop.", "I Love to Code.", "I Love to Learn." ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    pauseFor: 2000
                                }}
                            />
                        </p>
                        <p id="typer3" href="" className="typewrite glitch">
                            <Typewriter
                                options={{
                                    strings: [ "Explore, Learn, Exploit", "Amit Gupta", "I Love to Develop.", "I Love to Code.", "I Love to Learn." ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    pauseFor: 2000
                                }}
                            />
                        </p>
                    </h1>
                </div>

                <br/><br/>
            
                <hr className="w3-border-grey" style={{ margin:"auto", width: 250}}/><br/>
                <div className="container">
                    <p id="date1" className="w3-large w3-center glitch">Programmer, Roboticist, Learner.</p>
                    <p id="date2" className="w3-large w3-center glitch">Programmer, Roboticist, Learner.</p>
                    <p id="date3" className="w3-large w3-center glitch">Programmer, Roboticist, Learner.</p>
                </div>

            </div>
        </div>
    );
}

export default Front;