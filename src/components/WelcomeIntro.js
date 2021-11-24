import '../css/intro.css'
import Anime, { anime } from 'react-anime';

export default function WelcomeIntro() {
    return (
        <>
        <div className="intro">
            <div className="ml12 w3-display-middle">
            {/* <div className="ml12 w3-display-middle">Welcome to my Webiste</div> */}

                <Anime easing={["easeOutExpo", "easeInExpo"]}
                    duration={[1200, 1000]}
                    delay={(el, i) => 500 + 30 * i}
                    translateX={[[30,0], [0, -30]]}
                    opacity={[[0,1], [1, 0]]}
                    className="letter">
                    <span>W</span>
                    <span>e</span>
                    <span>l</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>e</span>
                    <span>&nbsp;</span>
                    <span>t</span>
                    <span>o</span>
                    <span>&nbsp;</span>
                    <span>m</span>
                    <span>y</span>
                    <span>&nbsp;</span>
                    <span>W</span>
                    <span>e</span>
                    <span>b</span>
                    <span>i</span>
                    <span>s</span>
                    <span>t</span>
                    <span>e</span>
                </Anime>
            </div>
        </div>
        </>
    )
}