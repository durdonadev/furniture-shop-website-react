import "./Line.css";

export const Line = ({ color, children }) => {
    const classNames = {
        orange: "orange-line-color",
        white: "white-line-color"
    };
    return <div className={`line ${classNames[color]}`}>{children}</div>;
};
