import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <ul className="footer__list">
                    <Link to="/bookingPolicy">
                        <li className="footer__list-item">Booking Info</li>
                    </Link>
                    <Link to="/contacts">
                        <li className="footer__list-item">Contacts</li>
                    </Link>
                    <Link to="/faq">
                        <li className="footer__list-item">FAQs</li>
                    </Link>
                    <Link to="/about">
                        <li className="footer__list-item">About Us</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Footer;