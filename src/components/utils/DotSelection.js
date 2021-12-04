import styled from "styled-components";

const Dot = styled.span`
    display: inline-block;
    background: #979797;
    border-radius: 50%;
    margin: 2em 0 2em 1em;
    width: 10px;
    height: 10px;
    cursor: pointer;
    font-family: "Bellefair";

    @media (min-width: 1025px) {
        height: 15px;
        width: 15px;
        margin-left: 24px;
    }

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
        font-family: "Bellefair";

        @media (min-width: 476px) and (max-width: 1024px) {
            font-size: 24px;
            width: 60px;
            height: 60px;
            line-height: 60px;
        }

        @media (min-width: 1025px) {
            font-size: 32px;
            width: 80px;
            height: 80px;
            line-height: 80px;
            margin: 0 0 1em 0;
        }

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

    return (
        <>
            {props.page === "crew" ? (
                <div>{dotsArray}</div>
            ) : (
                <div className='dots-wrapper'>{dotsArray}</div>
            )}
        </>
    );
};

export default DotSelection;
