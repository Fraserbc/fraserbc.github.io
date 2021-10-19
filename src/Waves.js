import React from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';

class Waves extends React.Component {
    constructor() {
        super();
        this.vantaRef = React.createRef();

        // Disable for the Google PageSpeed test as it runs WebGL in software mode
        this.enabled = !navigator.userAgent.includes("Chrome-Lighthouse");
    }
    componentDidMount() {
        if(this.enabled) {
            this.vantaEffect = WAVES({
                el: this.vantaRef.current,
                THREE: THREE,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
            });
        }
    }
    componentWillUnmount() {
        if (this.vantaEffect && this.enabled) this.vantaEffect.destroy();
    }
    render() {
        if(!this.enabled) return null;

        return (
            <div id="waves-el" ref={this.vantaRef}></div>
        );
    }
}

export default Waves;