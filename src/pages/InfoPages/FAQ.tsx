import {Accordion} from "react-bootstrap";

const FAQ = () => {
    return (
        <div className="info">
            <div className="info__container">
                <h3 className="info__title">Frequently asked questions</h3>
                <div className="info__text">
                    Welcome to our FAQ section! Here, we aim to address any questions or concerns you may have regarding
                    your booking. We understand that planning and organizing can sometimes be overwhelming, which is why
                    we are here to provide you with clear and concise answers. Our goal is to make your experience as
                    seamless as possible, so please take a moment to browse through our frequently asked questions. If
                    you can't find the information you're looking for, don't hesitate to reach out to our dedicated
                    customer support team. We are here to assist you every step of the way.
                </div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How do I make a booking on your website?</Accordion.Header>
                        <Accordion.Body>
                            Making a booking on our website is quick and easy! Simply navigate to the booking page,
                            select your desired dates, and choose from the available options. Once you have made your
                            selection, proceed to the checkout page and provide the necessary details. Finally, complete
                            the payment process to secure your booking.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Can I modify or cancel my booking after it has been confirmed?
                        </Accordion.Header>
                        <Accordion.Body>
                            Yes, you can modify or cancel your booking, but it is subject to our cancellation policy. To
                            make changes, please contact our customer support team as soon as possible. Depending on the
                            circumstances, there may be fees associated with modifications or cancellations.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            What payment methods are accepted for bookings?
                        </Accordion.Header>
                        <Accordion.Body>
                            We accept various payment methods, including major credit cards (Visa, Mastercard, American
                            Express) and online payment platforms (such as PayPal). When making a booking, you will be
                            prompted to select your preferred payment method.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            Is it possible to request additional services or amenities for my booking?
                        </Accordion.Header>
                        <Accordion.Body>
                            Absolutely! If you have any specific requests or require additional services or amenities,
                            please mention them in the special requests section during the booking process. We will do
                            our best to accommodate your needs and make your stay more enjoyable.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            What happens if I encounter any issues during my stay?
                        </Accordion.Header>
                        <Accordion.Body>
                            We strive to provide a seamless experience for our guests, but in the rare event that you
                            encounter any issues during your stay, please reach out to our customer support team
                            immediately. We have a dedicated team available 24/7 to assist you and resolve any concerns
                            you may have. Your comfort and satisfaction are our top priorities.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQ;