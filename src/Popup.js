import React from 'react';
import './Popup.css'

class Popup extends React.Component {
    render() {
        return(
            <div className={`popup-container ${this.props.showing ? 'popup-shown' : 'popup-hidden'}`}>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Popup;