import { useState } from "react";

import NavBar from "./utils/NavBar";
import classes from "./Header.module.css";

const navItems = ["00 home", "01 destination", "02 crew", "03 technology"];
const tabletNavItems = navItems.map((item) =>
    item.replace(/[0-9]/g, "".trim())
);

const Header = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuTouch = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const handleClick = (selectedPage) => {
        handleMenuTouch();
        props.onClick(selectedPage);
    };

    return (
        <header>
            <img
                src='/assets/shared/logo.svg'
                alt='logo'
                className={classes.logo}
            />
            {props.platform === "desktop" && (
                <span className={classes.vl}></span>
            )}

            {props.platform === "mobile" && !isMenuOpen && (
                <img
                    src='/assets/shared/icon-hamburger.svg'
                    alt='Open Menu'
                    className={classes.hamburger}
                    onClick={handleMenuTouch}
                />
            )}
            {props.platform === "mobile" && isMenuOpen && (
                <div className={classes["nav-wrap"]}>
                    <img
                        src='/assets/shared/icon-close.svg'
                        alt='Close Menu'
                        className={classes.close}
                        onClick={handleMenuTouch}
                    />
                    <NavBar
                        items={navItems}
                        activeTab={props.activePage}
                        onClick={handleClick}
                        lineHeight='60px'
                        direction='column'
                    />
                </div>
            )}
            {props.platform === "tablet" && (
                <div className={classes["nav-wrap"]}>
                    <NavBar
                        items={tabletNavItems}
                        activeTab={props.activePage}
                        onClick={handleClick}
                        lineHeight='53px'
                        direction='row'
                    />
                </div>
            )}

            {props.platform === "desktop" && (
                <div className={classes["nav-wrap"]}>
                    <NavBar
                        items={navItems}
                        activeTab={props.activePage}
                        onClick={handleClick}
                        lineHeight='60px'
                        direction='row'
                    />
                </div>
            )}
        </header>
    );
};

export default Header;
