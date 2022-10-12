import { Nav, Navbar, Button, InputGroup, Form } from "react-bootstrap"
import {
    faInstagram,
    faFacebook,
    faTwitter,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <footer>
            <div className="newsletter-container">
                <h2 className="text-center">Newsletter</h2>
                <InputGroup className="mb-3 w-50 m-auto mt-5 ">
                    <Form.Control placeholder="your email" />
                    <Button variant="outline-secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </div>
            <div className="nav-social">
                <div className="footer-link">
                    <p>
                        <a href="">Home</a>
                    </p>
                    <p>
                        <a href="">About</a>
                    </p>
                    <p>
                        <a href="">Menu</a>
                    </p>
                    <p>
                        <a href="">Buy</a>
                    </p>
                </div>
                <div className="social-media">
                    <button>
                        <span>
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </button>
                    <button>
                        <span>
                            <FontAwesomeIcon icon={faFacebook} />
                        </span>
                    </button>
                    <button>
                        <span>
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                    </button>
                    <button>
                        <span>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </span>
                    </button>
                </div>
                <p className="text-center mt-4 pb-4">
                    Copyright&copy; Dapur's. All right reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
