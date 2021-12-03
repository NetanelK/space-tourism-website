import styled from "styled-components";

const Dot = styled.span`
    display: inline-block;
    background: #979797;
    border-radius: 50%;
    margin: 2em 0 2em 1em;
    width: 10px;
    height: 10px;
    cursor: pointer;
    ${(props) =>
        props?.content &&
        `& {
        content: ${props?.content};
        width: 40px;
        height: 40px;
        border: 1px solid rgba(255, 255, 255, 0.25);
        color: white;
        background: transparent;
        line-height: 40px;
        text-align:center;

    }`}

    &:first-of-type {
        margin-left: 0;
    }

    ${(props) =>
        props.active === props.value &&
        `& {background: white; border: none; color:  #0B0D17;}`}
`;

const DotSelection = (props) => {
    const dotsArray = new Array(props.amount);

    for (let i = 0; i < dotsArray.length; i++) {
        dotsArray[i] = (
            <Dot
                onClick={() => props.onClick(props.items[i])}
                value={props.items[i]}
                active={props.active}
                key={Math.random()}
                content={props?.content?.[i]}
            >
                {props?.content?.[i]}
            </Dot>
        );
    }

    return <div>{dotsArray}</div>;
};

export default DotSelection;
