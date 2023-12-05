import "./Designs.css";
import arrowRight from "../../../../assets/arrow-right.svg";
import arrowLeft from "../../../../assets/arrow-left.svg";
import chairLight from "../../../../assets/chair-light.jpeg";
import chairDark from "../../../../assets/chair-dark.jpeg";
import couch from "../../../../assets/couch.jpeg";
import arrowRight2 from "../../../../assets/arrow-right-2.svg";

export const Designs = () => {
    return (
        <section id="designs-section">
            <div className="designs-section container">
                <h3 className="heading-3">Explore our exclusive design.</h3>
                <div className="arrows">
                    <img
                        className="arrow-right"
                        src={arrowRight}
                        alt="arrow right"
                    />
                    <img
                        className="arrow-left"
                        src={arrowLeft}
                        alt="arrow left"
                    />
                </div>

                <div className="left design-img-box">
                    <img
                        className="design-img chair-light"
                        src={chairLight}
                        alt="Chair"
                    />
                </div>

                <div className="middle design-img-box">
                    <img
                        className="design-img chair-dark"
                        src={chairDark}
                        alt="Chair"
                    />
                </div>

                <div className="right design-img-box">
                    <img className="design-img couch" src={couch} alt="Couch" />
                    <div className="design-inner-card">
                        <span>$271</span>
                        <p id="inner-card-text">White Phonix</p>
                        <img src={arrowRight2} alt="" />
                    </div>
                </div>

                <div className="arrows-hidden">
                    <img
                        className="arrow-right"
                        src={arrowRight}
                        alt="arrow right"
                    />
                    <img
                        className="arrow-left"
                        src={arrowLeft}
                        alt="arrow left"
                    />
                </div>
            </div>
        </section>
    );
};
