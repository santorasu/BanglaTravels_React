
const ContactUs = () => {
    return (
        <section id="contact" className="contact-us">
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>If you have any questions or need assistance, we are here to help. Feel free to reach out to us through any of the methods below:</p>
                <div className="contact-info">
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <h3>Email</h3>
                        <p>rashedul.cse.engineer@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <h3>Phone</h3>
                        <p>+880 1785 412 308</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>Address</h3>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
