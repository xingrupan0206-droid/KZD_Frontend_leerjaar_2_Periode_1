import infoImage from '../assets/info.jpg';

function Info() {
    return (
    <>
        <section className="offers-section">

                <div className="offers-image">
                    <img src={infoImage} alt="infoimage" />
                </div>

                <div className="offers-content">

                    <p className="small-title">
                    ELABORATED CODE AND CREATIVE DESIGN
                    </p>

                    <h1>WHAT WE OFFERS</h1>

                    <div className="intro-text">
                    <p>
                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris
                        ipsuy veli. Nam nec tellus a odio tincidunt auctor
                    </p>
                    </div>

                    <div className="offers">

                    <div className="offer">
                        <div className="offer-icon">♞</div>

                        <h3>Clean Modern Code</h3>

                        <p>
                        Phasellus enim libero, blandit vel sapien vitae,
                        condimentum ultricies magna et. Quisque lobortis...
                        </p>

                        <a href="#">READ MORE »</a>
                    </div>

                    <div className="offer">
                        <div className="offer-icon">♞</div>

                        <h3>Design To Brag About</h3>

                        <p>
                        Phasellus enim libero, blandit vel sapien vitae,
                        condimentum ultricies magna et. Quisque lobortis...
                        </p>

                        <a href="#">READ MORE »</a>
                    </div>

                    </div>

                    <button className="view-offers">
                    VIEW ALL OFFERS »
                    </button>

                </div>

        </section>
    </>
    )
}

export default Info;