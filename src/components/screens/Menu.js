import React from "react";
import styled from "styled-components";

export default function () {
    return (
        <Container>
            <ComingSoonImage
                src={require("../Assets/images/coming.png")}
                alt="Coming"
            />
        </Container>
    );
}

const Container = styled.section`
    margin: auto;
    width: 30%;
`;

const ComingSoonImage = styled.img`
    width: 100%;
    display: block;
`;
