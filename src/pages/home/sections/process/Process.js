import "./Process.css";

export const Process = () => {
    return (
        <section id="process-section">
            <div className="process-section container">
                <h5 className="uppercase-text-1">OUR WORKING PROCESS</h5>

                <div className="process-row">
                    <p className="number">01.</p>
                    <h4 className="process-heading heading-4">
                        Discuss the concept with us.
                    </h4>

                    <p className="process-text text-lg">
                        Engage in an insightful conversation with our team to
                        explore your project's vision, goals, and desired
                        outcomes
                    </p>
                    <div className="process-link">
                        <div className="orange-line"></div>
                        <a className="uppercase-text-2" href="">
                            {" "}
                            LEARN MORE
                        </a>
                    </div>
                </div>

                <div className="process-row">
                    <p className="number">02.</p>

                    <h4 className="process-heading heading-4">
                        Confirm the provided design.
                    </h4>

                    <p className="process-text text-lg">
                        Once you provide us with the design you envision, our
                        experienced team will meticulously review and validate
                        every aspect.
                    </p>

                    <div className="process-link">
                        <div className="orange-line"></div>
                        <a className="uppercase-text-2" href="">
                            {" "}
                            LEARN MORE
                        </a>
                    </div>
                </div>

                <div className="process-row">
                    <p className="number">03.</p>

                    <h4 className="process-heading heading-4">
                        Get delivered the furniture on time.
                    </h4>

                    <p className="process-text text-lg">
                        Our dedicated team prioritizes punctuality and efficient
                        logistics to ensure that your furniture arrives
                        precisely.
                    </p>

                    <div className="process-link">
                        <div className="orange-line"></div>
                        <a className="uppercase-text-2" href="">
                            {" "}
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
