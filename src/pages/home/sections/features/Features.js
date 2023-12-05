import "./Features.css";
import { features } from "./data";

const Feature = (props) => {
    return (
        <div className="feature">
            <div className="feature-icon ellipse-1">
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
                    return (
                        <Feature
                            key={idx}
                            title={feature.title}
                            description={feature.description}
                            image={feature.image}
                        />
                    );
                })}
            </div>
        </section>
    );
};
