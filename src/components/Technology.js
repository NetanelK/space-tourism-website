import { useState } from "react";
import styled from "styled-components";

import DotSelection from "./utils/DotSelection";
import { technology } from "../data.json";
import classes from "./Technology.module.css";

const Image = styled.img`
    height: 170px;
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
            {window.outerWidth > 1024 ? (
                // <Image src={activeTechnologyData.images.portrait} />
                "a"
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

            <div>
                <h5 className={classes.terminology}>THE TERMINOLOGY…</h5>
                <h1 className={classes.name}>{activeTechnologyData.name}</h1>
                <p>{activeTechnologyData.description}</p>
            </div>
        </div>
    );
};

export default Technology;
