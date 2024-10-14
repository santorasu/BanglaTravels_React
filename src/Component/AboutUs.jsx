import React from 'react';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFull: false
        };
    }

    toggleDescription = () => {
        this.setState({ showFull: !this.state.showFull });
    };

    render() {
        return (
            <section id="about" className="about-us">
                <div className="about-container">
                    <h2>About Us</h2>
                    <div className="about-content">
                        {this.state.showFull ? (
                            <p id="full-description">
                                From breathtaking landscapes to vibrant cultural experiences, we are dedicated to helping you explore the beauty and diversity of this amazing country. Our mission is to provide travelers with the best resources and insights for planning an unforgettable journey. Whether you are an adventure seeker, culture enthusiast, or simply looking to relax, BanglaTravels is here to make your trip memorable. Join us as we explore the rich history, diverse culture, and stunning natural beauty that make Bangladesh a unique destination.
                            </p>
                        ) : (
                            <p id="short-description">
                                BanglaTravels is your ultimate guide to discovering the hidden gems of Bangladesh.
                            </p>
                        )}
                        <button onClick={this.toggleDescription}>
                            {this.state.showFull ? "Show Less" : "Show More"}
                        </button>
                    </div>
                    <div className="about-image">
                        <img src="https://tvkstudio.com/assets/images/caregif.gif" alt="About Us" />
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;
