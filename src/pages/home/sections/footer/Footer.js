import "./Footer.css";
import logo from "../../../../assets/logo.svg";
import { contactLinks, productLinks, aboutUsLinks } from "./data.js";

export const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <img src={logo} alt="Whiter logo" />
                        <p className="text-lg">
                            We make furniture with love and passions. No doubt,
                            really.
                        </p>
                        <p className="text-lg">&copy; TuranTech Inc.</p>
                    </div>

                    <div className="footer__contact">
                        <h4 className="footer__heading uppercase-text-2">
                            CONTACT
                        </h4>
                        <p className="text-lg">62 Orp St, Seattle, USA</p>
                        {contactLinks.map((link, idx) => {
                            return (
                                <a
                                    href={link.link}
                                    className="text-lg"
                                    key={idx}
                                >
                                    {link.text}
                                </a>
                            );
                        })}
                    </div>

                    <div className="footer__product">
                        <h4 className="footer__heading uppercase-text-2">
                            PRODUCT
                        </h4>
                        {productLinks.map((link, idx) => {
                            return (
                                <a
                                    href={link.link}
                                    className="text-lg"
                                    key={idx}
                                >
                                    {link.text}
                                </a>
                            );
                        })}
                    </div>

                    <div className="footer__about-us">
                        <h4 className="footer__heading uppercase-text-2">
                            OUR COMPANY
                        </h4>
                        {aboutUsLinks.map((link, idx) => {
                            return (
                                <a
                                    href={link.link}
                                    className="text-lg"
                                    key={idx}
                                >
                                    {link.text}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};
