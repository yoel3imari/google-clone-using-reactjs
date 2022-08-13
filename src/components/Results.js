import React from 'react'
import styled from 'styled-components';

function Results(props) {

    const results = props.results;

    return (
        <ResultsContainer>
            {
                results.map((item, index) => (
                    <Result key={index}>
                        <a href={item.link}>
                            <p>{item.displayLink}</p>
                            <h3>{item.title}</h3>
                        </a>
                        <Snippet>
                            <p> {item.snippet} </p>
                        </Snippet>
                    </Result>
                ))
            }
        </ResultsContainer>
    )
}

const ResultsContainer = styled.div`
    margin-left: 180px;
    padding-bottom: 1rem;
    width: calc(100vw / 2);
    flex-grow: 1;
`;

const Result = styled.div`
    padding: 1rem 0;
    p {
        color: #202124;
        font-size: 14px;
    }

    h3 {
        color: #1a0dab;
        font-weight: normal;
        font-size: 1.25rem;
    }
`;

const Snippet = styled.div`

    p {
        color: #4d5156;
        line-height: 1.58;
        text-align: left;
        font-weight: normal;
        font-size: 14px;
    }
`;

export default Results