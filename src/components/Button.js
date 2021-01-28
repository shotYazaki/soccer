import React from 'react';
import { Button } from 'react-bootstrap';

function VideoButton() {
    return (
        <div>
            <Button color="primary" active={true} onClick={() => {this.handleClick()}}>Youtube-start</Button>{' '}
        </div>
    );
}

export default VideoButton;