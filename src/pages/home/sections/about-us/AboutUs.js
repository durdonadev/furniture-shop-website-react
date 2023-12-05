import "./AboutUs.css";
import aboutImg from "../../../../assets/wife-husband.jpeg";
import aboutShape from "../../../../assets/shape-2.svg";

export const AboutUs = () => {
    return (
        <section id="about-section">
            <div className="about-section container">
                <div className="about-section__left">
                    <div className="img-box">
                        <img
                            className="about-section__img"
                            src={aboutImg}
                            alt="Wife and husband"
                        />
                        <img
                            className="about-section__shape"
                            src={aboutShape}
                            alt=""
                        />
                    </div>
                </div>

                <div className="about-section__right">
                    <h3 className="heading-3">
                        Spend your happy time with full comfort.
                    </h3>
                    <p className="text-lg">
                        Embrace blissful comfort: Revel in delightful moments,
                        surrounded by unmatched tranquility and exquisite
                        relaxation.
                    </p>
                    <div className="orange-line"></div>
                    <a className="uppercase-text-2" href="">
                        EXPLORE OUR PRODUCTS
                    </a>
                </div>
            </div>
        </section>
    );
};
