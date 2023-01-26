import styled from "styled-components";

export const Section = styled.section`
    background-color: var(--competencesSection);
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 88vh;
    @media screen and (max-width: 500px){
        height: 86.6vh;
    }
`

export const H1 = styled.h1`
    color: white;
    font-size: 2.5rem;
` 

export const Paragraph = styled.p`
    color: white;
    font-size: 2rem;
`

export const Img = styled.img`
    @media screen and (max-width: 500px){
        width: 90%;
    }
`