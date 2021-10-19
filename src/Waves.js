import React from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';
import mapboxgl from '@mapbox/mapbox-gl-supported';

class Waves extends React.Component {
    constructor() {
        super();
        this.vantaRef = React.createRef();

        // Test for WebGL Hardware Mode support
        this.webglHWMode = mapboxgl.supported({failIfMajorPerformanceCaveat: true});
    }
    componentDidMount() {
        if(this.webglHWMode) {
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
        if(this.webglHWMode && this.vantaEffect) {
            this.vantaEffect.destroy();
        }
    }
    render() {
        if(this.webglHWMode) {
            return (
                <div id="waves-el" ref={this.vantaRef}></div>
            );
        } else {
            return null;
        }
    }
}

export default Waves;