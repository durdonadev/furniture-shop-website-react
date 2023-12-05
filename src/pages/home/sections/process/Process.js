import "./Process.css";
import { processes } from "./data";

const ProcessRow = (props) => {
    return (
        <div className="process-row">
            <p className="number">{props.order}</p>
            <h4 className="process-heading heading-4">{props.title}</h4>

            <p className="process-text text-lg">{props.description}</p>
            <div className="process-link">
                <div className="orange-line"></div>
                <a className="uppercase-text-2" href={props.link}>
                    {" "}
                    LEARN MORE
                </a>
            </div>
        </div>
    );
};

export const Process = () => {
    return (
        <section id="process-section">
            <div className="process-section container">
                <h5 className="uppercase-text-1">OUR WORKING PROCESS</h5>
                {processes.map((process, idx) => {
                    return (
                        <ProcessRow
                            key={idx}
                            order={process.order}
                            title={process.title}
                            description={process.description}
                            link={process.link}
                        />
                    );
                })}
            </div>
        </section>
    );
};
