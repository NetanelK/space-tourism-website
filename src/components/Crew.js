import { useState, useEffect } from "react";

import DotSelection from "./utils/DotSelection";
import { crew } from "../data.json";
import classes from "./Crew.module.css";

const crewNames = crew.map((crewman) =>
    crewman.name.split(" ")[0].toLowerCase()
);
const loopCrew = crewNames.map((crew) => crew);

const Crew = (props) => {
    const [activeCrew, setActiveCrew] = useState("douglas");

    const activeCrewData = crew.filter(
        (crewman) => crewman.name.toLowerCase().includes(activeCrew) && crewman
    )[0];

    useEffect(() => {
        let selectedCrew;
        setTimeout(() => {
            selectedCrew = loopCrew.shift();
            loopCrew.push(selectedCrew);
            console.log(selectedCrew, loopCrew, crewNames);
            setActiveCrew(selectedCrew);
        }, 5000);
    });

    const handleClick = (crew) => {
        setActiveCrew(crew);
    };

    return (
        <div>
            <h5>
                <strong>02</strong>MEET YOUR CREW
            </h5>
            <img
                src={activeCrewData.images.webp}
                alt={activeCrewData.name}
                className={classes.avatar}
            />
            <span className={classes.vl} />

            <DotSelection
                amount={4}
                onClick={handleClick}
                items={crewNames}
                active={activeCrew}
            />

            <div>
                <span className={classes.role}>{activeCrewData.role}</span>
                <h1 className={classes.name}>{activeCrewData.name}</h1>
                <p>{activeCrewData.bio}</p>
            </div>
        </div>
    );
};

export default Crew;
