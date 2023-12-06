import "./Features.css";
import { features } from "./data";

const Feature = (props) => {
    return (
        <div className="feature">
            <div className={`feature-icon ${props.ellipseClass}`}>
                <img className="icon" src={props.image} alt="heart shape" />
            </div>
            <div className="feature-text">
                <h4 className="heading-6">{props.title}</h4>
                <p className="text-md">{props.description}</p>
            </div>
        </div>
    );
};

export const Features = () => {
    return (
        <section id="features-section">
            <div className="features-section container">
                {features.map((feature, idx) => {
                    const ellipseClass =
                        idx === 1
                            ? "ellipse-2"
                            : idx === 2
                            ? "ellipse-3"
                            : "ellipse-1";

                    return (
                        <Feature
                            key={idx}
                            title={feature.title}
                            description={feature.description}
                            image={feature.image}
                            ellipseClass={ellipseClass}
                        />
                    );
                })}
            </div>
        </section>
    );
};
