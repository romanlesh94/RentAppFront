import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Contacts = () => {
    return (
        <div className="info">
            <div className="info__container">
                <h3 className="info__title">Contacts</h3>
                <p className="info__text">
                    For any inquiries or assistance regarding your booking, please feel free to contact our customer
                    support team. Our team is available 24/7 to provide you with prompt and reliable assistance. We
                    understand the importance of providing comprehensive support, so we are continuously working to
                    expand our team and resources to ensure an even higher level of service. Rest assured, we are
                    committed to meeting your needs and exceeding your expectations.
                </p>
                <div className="info__contact-box">
                    <div className="info__contact">
                        <FontAwesomeIcon icon={faEnvelope} className="info__icon"/>
                        <a href="mailto:romanlesh94@gmail.com">romanlesh94@gmail.com</a>
                    </div>
                    <div className="info__contact">
                        <FontAwesomeIcon icon={faPhone} className="info__icon"/>
                        <a href="tel:+375336320415">+375336320415</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;