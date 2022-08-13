import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Results from '../components/Results';
import SearchOptions from '../components/SearchOptions';
import { useStateValue } from '../components/StateProvider';
import { response } from '../response';

import API_KEY from '../keys';
const CONTEXT_KEY = "d75845546de5b437c";


function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const [data, setData] = useState(response);

    useEffect(() => {
        document.title = (term !== null && term !== "") ? term : "Google";
        fetchData();
    }, [term]);

    const fetchData = async () => {
        axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log("Error In Query Search");
            });
    }

    return (
        <Fragment>
            <Header in="search" />
            <SearchOptions />
            <ResultCount>
                {
                    data.items.length !== 0 && (
                        <div>
                            About {data.searchInformation.formattedTotalResults} results ({data.searchInformation.formattedSearchTime} seconds)
                        </div>
                    )
                }
            </ResultCount>
            <Results results={data.items} />
            <Footer />
        </Fragment>
    )
}

const ResultCount = styled.div`
    width: 100%;
    min-height: 42px;
    height: 42px;
    padding-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    div {
        margin-left: 180px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #5f6368;
        font-size: 14px;
    }
`;


export default SearchPage