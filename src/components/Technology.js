import { useState } from "react";
import styled from "styled-components";

import DotSelection from "./utils/DotSelection";
import { technology } from "../data.json";
import classes from "./Technology.module.css";

const Image = styled.img`
    max-height: 527px;

    @media (min-width: 476px) and (max-width: 1024px) {
        width: 100%;
        height: 310px;
        max-height: 310px;
        margin-block: 3.75em 0.5em;
    }

    @media (max-width: 475px) {
        max-height: 170px;
    }
`;

const Technology = () => {
    const [activeTechnology, setActiveTechnology] = useState("launch vehicle");

    const activeTechnologyData = technology.filter(
        (tech) => tech.name.toLowerCase() === activeTechnology && tech
    )[0];
    const techNames = technology.map((tech) => tech.name.toLowerCase());

    const clickHandler = (tech) => {
        setActiveTechnology(tech);
    };

    return (
        <div>
            <h5>
                <strong>03</strong>SPACE LAUNCH 101
            </h5>
            <div className={classes.grid}>
                {window.outerWidth > 1025 ? (
                    <Image src={activeTechnologyData.images.portrait} />
                ) : (
                    <Image src={activeTechnologyData.images.landscape} />
                )}
                <DotSelection
                    amount={3}
                    onClick={clickHandler}
                    items={techNames}
                    content={[1, 2, 3]}
                    active={activeTechnology}
                />
                <div className={classes.content}>
                    <h5 className={classes.terminology}>THE TERMINOLOGY…</h5>
                    <h1 className={classes.name}>
                        {activeTechnologyData.name}
                    </h1>
                    <p>{activeTechnologyData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Technology;
