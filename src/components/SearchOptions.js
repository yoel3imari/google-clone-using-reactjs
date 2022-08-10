import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import styled from 'styled-components';

function SearchOptions() {
    return (
        <Options>
            <SearchType>
                <ul>
                    <li>
                        <a href="/" rel="">
                            <span>
                                <svg focusable="false" viewBox="0 0 24 24">
                                    <path fill="#34a853" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path>
                                    <path fill="#ea4335" d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"></path>
                                    <path fill="#fbbc04" d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"></path>
                                    <path fill="#4285f4" d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"></path>
                                </svg>
                            </span>
                            <span>All</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" rel="">
                            <span>
                                <InsertPhotoOutlinedIcon />
                            </span>
                            <span>Images</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" rel="">
                            <span><NewspaperOutlinedIcon /></span>
                            <span>News</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" rel="">
                            <span><OndemandVideoOutlinedIcon /></span>
                            <span>Videos</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" rel="">
                            <span><BookOutlinedIcon /></span>
                            <span>Books</span>
                        </a>
                    </li>
                </ul>
                <More>
                    <span>
                        <MoreVertIcon />
                    </span>
                    <span>
                        More
                    </span>
                </More>
            </SearchType>
            <SearchSecurity>
                SafeSearch <span>On</span>
            </SearchSecurity>
        </Options>
    )
}

const Options = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    color: #5f6368;
    font-size: 14px;
    font-weight: 500;
    height: 42px;
    padding-bottom: .25rem;
    border-bottom: 1px solid #dadce0;
`;

const SearchType = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    
    width: calc(100vw / 2);
    margin-left: 180px;

    svg {
        width: 18px;
    }
    
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 1.5rem;
    }

    a {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        gap: .25rem;
        line-height: 18px;
    }

`;

const More = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: .25rem;
`;

const SearchSecurity = styled.div`
    padding-inline: 1.125rem;
    span {
        color: green;
        font-weight: bold;
    }
`;

export default SearchOptions