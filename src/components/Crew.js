import { useState, useEffect, Fragment } from "react";

import DotSelection from "./utils/DotSelection";
import { crew } from "../data.json";
import classes from "./Crew.module.css";

const crewNames = crew.map((crewman) =>
    crewman.name.split(" ")[0].toLowerCase()
);
const loopCrew = crewNames.map((crew) => crew);
loopCrew.push(loopCrew.shift());

const Crew = (props) => {
    const [activeCrew, setActiveCrew] = useState("douglas");

    useEffect(() => {
        let selectedCrew = loopCrew.shift();
        console.log("hi");
        loopCrew.push(selectedCrew);
        setTimeout(() => {
            console.log(selectedCrew, loopCrew);
            setActiveCrew(selectedCrew);
        }, 15000);
    }, [activeCrew]);

    const activeCrewData = crew.filter(
        (crewman) => crewman.name.toLowerCase().includes(activeCrew) && crewman
    )[0];

    const handleClick = (crew) => {
        setActiveCrew(crew);
    };

    return (
        <div className={classes.crew}>
            <h5>
                <strong>02</strong>MEET YOUR CREW
            </h5>
            {props.platform === "mobile" && (
                <>
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
                    <div className={classes.content}>
                        <span className={classes.role}>
                            {activeCrewData.role}
                        </span>
                        <h1 className={classes.name}>{activeCrewData.name}</h1>
                        <p>{activeCrewData.bio}</p>
                    </div>
                </>
            )}

            {props.platform === "desktop" && (
                <div className={classes.flex}>
                    <div className={classes.content}>
                        <span className={classes.role}>
                            {activeCrewData.role}
                        </span>
                        <h1 className={classes.name}>{activeCrewData.name}</h1>
                        <p>{activeCrewData.bio}</p>
                        <DotSelection
                            amount={4}
                            onClick={handleClick}
                            items={crewNames}
                            active={activeCrew}
                            page='crew'
                        />
                    </div>
                    <img
                        src={activeCrewData.images.webp}
                        alt={activeCrewData.name}
                        className={classes.avatar}
                    />
                </div>
            )}

            {props.platform === "tablet" && (
                <>
                    <div className={classes.content}>
                        <span className={classes.role}>
                            {activeCrewData.role}
                        </span>
                        <h1 className={classes.name}>{activeCrewData.name}</h1>
                        <p>{activeCrewData.bio}</p>
                    </div>
                    <DotSelection
                        amount={4}
                        onClick={handleClick}
                        items={crewNames}
                        active={activeCrew}
                    />
                    <img
                        src={activeCrewData.images.webp}
                        alt={activeCrewData.name}
                        className={classes.avatar}
                    />
                </>
            )}
        </div>
    );
};

export default Crew;
