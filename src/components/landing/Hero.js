import React, { Component } from 'react';
import thumbnail_1 from '../../images/thumb_1.jpg';
import thumbnail_2 from '../../images/thumb_2.jpg';
import thumbnail_3 from '../../images/thumb_3.jpg';

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = { video: 'https://www.youtube.com/embed/qgJs7uluwlU' };
    }

    render() {
        return (
            <div className="hero">
                <div className="video-container">
                    <iframe title="showcase-video" className="hero-panel-video" src={this.state.video} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
                </div>
                <div className="video-list">
                    <figure onClick={() => this.setState({ video: 'https://www.youtube.com/embed/dQpGwnN3dfc' })}>
                        <img src={thumbnail_1} alt="Peter Weyland 2023 Ted Talk video thumbnail" />
                        <figcaption>Peter Weyland's 2023 TED Talk</figcaption>
                    </figure>
                    <figure onClick={() => this.setState({ video: 'https://www.youtube.com/embed/R2pMXsYXZyQ' })}>
                        <img src={thumbnail_2} alt="Weyland Industries testimonial video thumbnail" />
                        <figcaption>Weyland Industries Testimonial</figcaption>
                    </figure>
                    <figure onClick={() => this.setState({ video: 'https://www.youtube.com/embed/qgJs7uluwlU' })}>
                        <img src={thumbnail_3} alt="Introducing the David 8 video thumbnail" />
                        <figcaption>Introducing the David 8</figcaption>
                    </figure>
                </div>
            </div>
        );
    }
}

export default Hero;
