import React from 'react';
import Nav from './components/Nav';

const Home = () => {
    return(
        <div>
            <Nav/>
            <section id="hero">
                <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Welcome to Regna</h1>
                    <h2>We are team of talented designers making websites with Bootstrap</h2>
                    <a href="#about" className="btn-get-started">Get Started</a>
                </div>
            </section>
        </div>
    )
}
export default Home;