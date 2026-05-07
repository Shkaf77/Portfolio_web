import avatar from '../assets/avatar.jpg';

function Hero() { 
    return (
        <section id = "home" className = "hero">
            <div className = "hero-text">
                <p className = "intro">Hi, I'm</p>
                <h1>Niroshi.</h1>

                <p className = "description">
                    I build clean and efficient web applications.
                </p>

                <div className = "buttons">
                    <a href="#projects" className="btn primary">
                        View Projects
                    </a>

                    <a href="#contact" className="btn secondary">
                        Contact Me
                    </a>
                </div>
            </div>

            <div className = "hero-avatar">
                <img src={avatar} alt="Niroshi avatar"/>
            </div>
        </section>
    );    
}

export default Hero