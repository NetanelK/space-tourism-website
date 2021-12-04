import { useState, useEffect } from "react";

import Header from "./components/Header";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import "./App.css";

function App() {
    const [activePage, setActivePage] = useState("home");
    const [platform, setPlatform] = useState("");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setPlatform(
                width < 475 ? "mobile" : width > 1024 ? "desktop" : "tablet"
            );
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    });

    const clickHandler = (pageTitle) => {
        setActivePage(pageTitle);
    };

    return (
        <div
            className='App'
            style={{
                background: `right / cover no-repeat url(/assets/${activePage}/background-${activePage}-${platform}.jpg)`,
                height:
                    Math.max(
                        document.body.scrollHeight,
                        document.documentElement.clientHeight || 0
                    ) + "px"
            }}
        >
            <Header
                activePage={activePage}
                onClick={clickHandler}
                platform={platform}
            />

            {activePage === "home" && (
                <div className='home'>
                    <div className='content'>
                        <h5>SO, YOU, WANT TO TRAVEL TO</h5>
                        <h1>SPACE</h1>
                        <p>
                            Let’s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world
                            experience!
                        </p>
                    </div>
                    <a
                        href='#'
                        onClick={() => clickHandler("destination")}
                        className='explore'
                    >
                        EXPLORE
                    </a>
                </div>
            )}
            {activePage === "destination" && <Destination />}
            {activePage === "crew" && <Crew platform={platform} />}
            {activePage === "technology" && <Technology />}
        </div>
    );
}

export default App;
