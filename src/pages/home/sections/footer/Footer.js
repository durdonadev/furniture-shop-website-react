import "./Footer.css";
import logo from "../../../../assets/logo.svg";

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
                        <a
                            href="mailto: sales@furnatur.com"
                            className="text-lg"
                        >
                            sales@furnatur.com
                        </a>
                        <a href="+1 800 726 915273" className="text-lg">
                            +1 800 726 915273
                        </a>
                    </div>

                    <div className="footer__product">
                        <h4 className="footer__heading uppercase-text-2">
                            PRODUCT
                        </h4>
                        <a href="" className="text-lg">
                            Living Room
                        </a>
                        <a href="" className="text-lg">
                            Bed Room
                        </a>
                        <a href="" className="text-lg">
                            Office Room
                        </a>
                    </div>

                    <div className="footer__about-us">
                        <h4 className="footer__heading uppercase-text-2">
                            OUR COMPANY
                        </h4>
                        <a href="" className="text-lg">
                            About us
                        </a>
                        <a href="" className="text-lg">
                            Services
                        </a>
                        <a href="" className="text-lg">
                            Products
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
