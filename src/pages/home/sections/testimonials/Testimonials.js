import "./Testimonials.css";
import testimonial from "../../../../assets/lady-drinking-coffee.jpeg";
import playIcon from "../../../../assets/play.svg";
import { Line } from "../../../../design-system/Line/Line";

export const Testimonials = () => {
    return (
        <section id="testimonials-section">
            <div className="testimonials-section container">
                <div className="testimonials-section__left">
                    <h3 className="heading-3">
                        “It was super easy to share my unique concept. I got
                        exactly what I ordered. Great service!”
                    </h3>
                    <Line color="white"></Line>
                    <span className="testimonials-name">Jenny Wilson</span>
                    <p className="text-md">St. Celina, Delaware</p>
                </div>

                <div className="testimonials-section__right">
                    <div className="testimonials-img-box">
                        <img
                            className="testimonials-img"
                            src={testimonial}
                            alt="Jenny Wilson drinking coffee"
                        />
                        <button className="play-btn">
                            <img
                                className="play-icon"
                                src={playIcon}
                                alt="Play icon"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
