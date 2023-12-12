import React from "react";
import "./TopNavigation.css";
import { links } from "./data";
import logo from "../../../../assets/logo.svg";
import burgerIcon from "../../../../assets/menu.svg";

const NavigationLinks = (props) => {
    return (
        <ul className="navigation__links">
            {props.links.map((link, idx) => {
                return (
                    <li key={idx}>
                        <a href={link.link}>{link.text}</a>
                    </li>
                );
            })}
        </ul>
    );
};

export class TopNavigation extends React.Component {
    state = {
        showMenu: false
    };

    openMenu = () => {
        this.setState({
            showMenu: true
        });
    };

    closeMenu = () => {
        this.setState({
            showMenu: false
        });
    };

    render() {
        const menuClass = this.state.showMenu ? "show-menu" : "";

        return (
            <header id="header">
                <div className="navigation container">
                    <img className="logo" src={logo} alt="Whiter logo" />

                    <nav className="navigation__actions">
                        <NavigationLinks links={links} />
                        <div className="sign-in__wrapper">
                            <a href="">Sign in</a>
                        </div>
                    </nav>

                    <img
                        onClick={this.openMenu}
                        src={burgerIcon}
                        alt=""
                        id="mobile-nav-icon"
                    />

                    {this.state.showMenu ? (
                        <nav className={`mobile-nav ${menuClass}`}>
                            <img
                                className="mobile-nav_logo"
                                src={logo}
                                alt="Whiter logo"
                            />
                            <span
                                className="close-icon"
                                onClick={this.closeMenu}
                            >
                                &times;
                            </span>
                            <NavigationLinks links={links} />
                        </nav>
                    ) : null}
                </div>
            </header>
        );
    }
}
