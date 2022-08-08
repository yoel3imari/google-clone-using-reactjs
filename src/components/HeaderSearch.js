import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    form {
        margin-inline: 1rem;
       padding-inline: .25rem;
        width: calc(100vw / 2);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border: none;
        border-radius: 25px;
        box-shadow: 0 2px 5px 1px rgba(64, 60, 67, .16);
    }

    input {
        width: 100%;
        height: 2.875rem;
        border: none;
        /* border-radius: 25px; */
        margin-left: 2rem;
        font-size: 1rem;
        font-weight: normal;
    }

    input:focus-visible {
        border: none;
        outline: none;
    }

    button {
        border: none;
        background: none;
        font-size: 1rem;
        margin-inline: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 2.25rem;
        cursor: pointer;
    }

    button:hover {
        background: none !important;
    }
`;

const HeaderLogo = styled.div`
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonBorder = styled.div`
    width: 2px;
    height: 2rem;
    background-color: #dadce0;
    border-radius: 2px;
`;

function HeaderSearch() {
    return (
        <HeaderSearchContainer className='header__search'>
            <HeaderLogo className='header__logo'>
                <Link to="/">
                    <img src='./assets/header_logo.png' width="92" height="30" alt="Google" />
                </Link>
            </HeaderLogo>
            <form>
                <input type="search" name="search" autoComplete="false" autoCorrect='false' autofill="false" />
                <button type="reset" value="" >
                    <CloseRoundedIcon sx={{ color: "#5f6368" }} />
                </button>
                <ButtonBorder className='button__border'></ButtonBorder>
                <button type="submit">
                    <SearchRoundedIcon color="primary" />
                </button>
            </form>
        </HeaderSearchContainer>
    )
}

export default HeaderSearch