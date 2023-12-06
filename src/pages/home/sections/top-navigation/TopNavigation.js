import "./TopNavigation.css";
import logo from "../../../../assets/logo.svg";

const links = [
    { text: "Products", link: "https://google.com" },
    { text: "Rooms", link: "https://facebook.com" },
    { text: "Inspiration", link: "" },
    { text: "Support", link: "" }
];

const Link = (props) => {
    return (
        <li>
            <a href={props.link}>{props.text}</a>
        </li>
    );
};

export const TopNavigation = () => {
    return (
        <header id="header">
            <div className="navigation container">
                <img className="logo" src={logo} alt="Whiter logo" />

                <nav className="navigation__actions">
                    <ul className="navigation__links">
                        {links.map((link, idx) => {
                            return (
                                <Link
                                    key={idx}
                                    link={link.link}
                                    text={link.text}
                                />
                            );
                        })}
                    </ul>
                    <div className="sign-in__wrapper">
                        <a href="">Sign in</a>
                    </div>
                </nav>
                <img src="./images/menu.svg" alt="" id="mobile-nav-icon" />

                <nav className="mobile-nav">
                    <img
                        className="mobile-nav_logo"
                        src="./images/logo.svg"
                        alt="Whiter logo"
                    />
                    <span className="close-icon">&times;</span>
                    <ul className="mobile-navigation__links">
                        {links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <a href={link.link}>{link.text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
