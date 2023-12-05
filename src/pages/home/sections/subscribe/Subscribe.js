import "./Subscribe.css";
import lock from "../../../../assets/lock.svg";

export const Subscribe = () => {
    return (
        <section id="subscribe-section">
            <div className="subscribe-section container">
                <div className="subscribe-wrapper">
                    <h3 className="heading-3">
                        Subscribe to our newsletter to get updated
                    </h3>
                    <p className="text-lg">
                        Get our latest update on your inbox. With lots of unique
                        blocks, you can easily build a page without coding.
                        Build your next consultancy website within few minutes.
                    </p>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        id="emailInput"
                    />
                    <input
                        type="submit"
                        value="Subscribe"
                        id="subscribeInput"
                    />

                    <div className="promise-container">
                        <img className="lock-img" src={lock} alt="lock icon" />
                        <p className="text-md">
                            We don’t spam at all, our promise!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
