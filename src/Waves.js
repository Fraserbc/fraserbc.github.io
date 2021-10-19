import React from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';

class Waves extends React.Component {
    constructor() {
        super();
        this.vantaRef = React.createRef();
    }
    componentDidMount() {
        this.vantaEffect = WAVES({
            el: this.vantaRef.current,
            THREE: THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
        });
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy();
    }
    render() {
        return (
            <div id="waves-el" ref={this.vantaRef}></div>
        );
    }
}

export default Waves;