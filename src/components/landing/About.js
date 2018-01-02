import React from 'react';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';

const About = () => {
    return (
        <div className="about">
                <div className="about_text">
                <h1>Building Better Worlds</h1>
                <p>
                Consectetur deserunt Lorem elit proident ex. 
                Adipisicing enim proident reprehenderit fugiat enim amet anim aute enim amet esse dolor. Amet nostrud ut duis occaecat officia nulla non proident veniam nisi consequat. Nisi labore incididunt eu irure consequat ut deserunt elit commodo est cillum nostrud. Irure nostrud adipisicing ea labore eiusmod sint culpa enim qui mollit qui qui reprehenderit. Et adipisicing excepteur cillum deserunt nostrud laboris deserunt. 
                Magna sit commodo qui anim dolor sint. 
                <br></br><br></br>
                Consectetur deserunt Lorem elit proident ex. 
                Adipisicing enim proident reprehenderit fugiat enim amet anim aute enim amet esse dolor. Amet nostrud ut duis occaecat officia nulla non proident veniam nisi consequat. Nisi labore incididunt eu irure consequat ut deserunt elit commodo est cillum nostrud. Irure nostrud adipisicing ea labore eiusmod sint culpa enim qui mollit qui qui reprehenderit. Et adipisicing excepteur cillum deserunt nostrud laboris deserunt. 
                Magna sit commodo qui anim dolor sint.
                <br></br><br></br>
                Consectetur deserunt Lorem elit proident ex. 
                Adipisicing enim proident reprehenderit fugiat enim amet anim aute enim amet esse dolor. Amet nostrud ut duis occaecat officia nulla non proident veniam nisi consequat. Nisi labore incididunt eu irure consequat ut deserunt elit commodo est cillum nostrud. Irure nostrud adipisicing ea labore eiusmod sint culpa enim qui mollit qui qui reprehenderit. Et adipisicing excepteur cillum deserunt nostrud laboris deserunt. 
                Magna sit commodo qui anim dolor sint.
                </p>
            </div>
            <div className="about_images">
                <img className="about_image" src={image1} alt="Prometheus ship concept" />
                <img className="about_image" src={image2} alt="Orbital solar panels in space" />
            </div>
        </div>
    );
}

export default About;
