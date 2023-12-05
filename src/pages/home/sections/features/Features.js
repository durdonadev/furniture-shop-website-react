import "./Features.css";
import heart from "../../../../assets/heart.svg";
import zap from "../../../../assets/zap.svg";
import headphones from "../../../../assets/headphones.svg";

export const Features = () => {
    return (
        <section id="features-section">
            <div className="features-section container">
                <div className="feature">
                    <div className="feature-icon ellipse-1">
                        <img className="icon" src={heart} alt="heart shape" />
                    </div>
                    <div className="feature-text">
                        <h4 className="heading-6">Best quality</h4>
                        <p className="text-md">
                            Uncompromising excellence delivered in every product
                            and experience
                        </p>
                    </div>
                </div>

                <div className="feature">
                    <div className="feature-icon ellipse-2">
                        <img className="icon" src={zap} alt="heart shape" />
                    </div>
                    <div className="feature-text">
                        <h4 className="heading-6">Fastest delivery</h4>
                        <p className="text-md">
                            Swift and efficient shipping to bring your order to
                            you promptly.
                        </p>
                    </div>
                </div>

                <div className="feature">
                    <div className="feature-icon ellipse-3">
                        <img
                            className="icon"
                            src={headphones}
                            alt="heart shape"
                        />
                    </div>
                    <div className="feature-text">
                        <h4 className="heading-6">Great support</h4>
                        <p className="text-md">
                            Exceptional customer service to assist and guide you
                            effectively
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
