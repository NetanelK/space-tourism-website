import React from "react";
import styled from "styled-components";

import "./NavBar.module.css";

const List = styled.ul`
    display: flex;
    align-items: center;
    max-width: max-content;
    height: 100%;
    gap: 3rem;
    position: relative;

    @media (max-width: 450px) {
        all: unset;
        display: flex;
        list-style: none;
        text-align: left;
        width: 100%;
    }

    ${(props) =>
        props.direction === "column"
            ? `
            & {
                flex-direction: column;
                margin-top: 6.64em;
                gap: 2em;
            }
        
    `
            : `
            &{
                flex-direction: row;
                justify-content: center;
                gap: 2em;
                margin-bottom: 1.4em;
        }`}
`;

const ListItem = styled.li`
    font-size: 1rem;
    letter-spacing: 2.35px;
    position: relative;
    cursor: pointer;

    transition: color 0.5s ease;

    & a {
        color: inherit;
        text-decoration: none;
    }

    ${(props) =>
        props.active
            ? `&::after {
        content: "";
        position: absolute;
        top: ${props.lineHeight};
        left: 0;
        height: 3px;
        width: 100%;
        background: ${props.active ? "white" : "rgba(255, 255, 255, 0.5)"};
        animation: slideDown ease-in-out 0.5s;
    }`
            : `&:hover::after{
        content: "";
        position: absolute;
        top: ${props.lineHeight};
        left: 0;
        height: 3px;
        width: 100%;
        background: rgba(255, 255, 255, 0.5);

        animation: slideDown 0.5s;
    }`}

    ${(props) =>
        props.direction === "column" &&
        `
        & {
            display:block;
            padding-left: 2em;
            width: 100%;
        }
    

        &::after {
            width: 3px;
            height: 100%;
            left: 100%;
            top: 0;
            transform: translateX(-100%);
        }

        &:hover::after {
            content: none;
        }
    
            
    `} 

    @keyframes slideDown {
        from {
            top: 100%;
            opacity: 50%;
        }
        to {
            opacity: 100%;
        }
    }
`;

const NavBar = (props) => {
    const clickHandler = (event) => {
        const selectedPage = event.currentTarget.textContent
            .toLowerCase()
            .replace(/[0-9]/g, "")
            .trim();
        props.onClick(selectedPage);
    };

    const listItems = props.items.map((item) => {
        return (
            <ListItem
                key={Math.random()}
                onClick={clickHandler}
                lineHeight={props.lineHeight}
                active={
                    item.replace(/[0-9]/g, "").trim().toLowerCase() ===
                    props.activeTab
                }
                direction={props.direction}
            >
                <a href='#'>{item.toUpperCase()}</a>
            </ListItem>
        );
    });

    return <List direction={props.direction}>{listItems}</List>;
};

export default NavBar;
