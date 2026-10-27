import { useState } from 'react';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';

const afbeeldingen = [hero1, hero2];

function Hero() {
    const [slide, setSlide] = useState(0);

    function vorigeSlide() {
        setSlide((huidige) =>
            (huidige - 1 + afbeeldingen.length) % afbeeldingen.length
        );
    }

    function volgendeSlide() {
        setSlide((huidige) =>
            (huidige + 1) % afbeeldingen.length
        );
    }

    return (
        <section
            className="hero-banner"
            style={{ backgroundImage: `url(${afbeeldingen[slide]})` }}
        >
            <button className="hero-pijl links" onClick={vorigeSlide} aria-label="Vorige afbeelding">
                ❮
            </button>

            <div className="hero-inhoud">
                <h1 className="hero-title">Business YOUR SATISFACTION</h1>
                <p className="hero-tekst">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="login">Login</button>
                <button className="register">Registeren</button>
            </div>

            <button className="hero-pijl rechts" onClick={volgendeSlide} aria-label="Volgende afbeelding">
                ❯
            </button>
        </section>
    );
}

export default Hero;