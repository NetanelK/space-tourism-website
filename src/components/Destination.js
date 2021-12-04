import { useState } from "react";

import { destinations } from "../data.json";
import NavBar from "./utils/NavBar";
import classes from "./Destination.module.css";

const Destination = (props) => {
    const [activeDestination, setActiveDestination] = useState("moon");

    const destinationsName = destinations.map(
        (destination) => destination.name
    );
    const activeDestinationData = destinations.filter((destination) => {
        return (
            destination.name.toLowerCase() === activeDestination && destination
        );
    })[0];

    console.log(activeDestinationData);
    const clickHandler = (destinationName) => {
        setActiveDestination(destinationName);
    };

    return (
        <div>
            <h5>
                <strong>01</strong>PICK YOUR DESTINATION
            </h5>
            <div className={classes.flex}>
                <img
                    src={activeDestinationData.images.webp}
                    alt={activeDestination}
                    className={classes.object}
                />
                <div className={classes.content}>
                    <NavBar
                        items={destinationsName}
                        activeTab={activeDestination}
                        onClick={clickHandler}
                        lineHeight='32px'
                    />
                    <h1>{activeDestination.toUpperCase()}</h1>
                    <p>{activeDestinationData.description}</p>
                    <div class={classes.trip}>
                        <div class='distance'>
                            <h6>AVG. DISTANCE</h6> {/* change this tag */}
                            {/* change this tag */}
                            <h4>{activeDestinationData.distance}</h4>{" "}
                        </div>
                        <div class='time'>
                            <h6>Est. travel time</h6> {/* change this tag */}
                            {/* change this tag */}
                            <h4>{activeDestinationData.travel}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;
