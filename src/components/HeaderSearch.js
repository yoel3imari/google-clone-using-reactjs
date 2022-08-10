import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "../reducer";


function HeaderSearch() {
    const [{term}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [closeIcon, setCloseIcon] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        if( term != null ) {
            document.querySelector("#searchInput").value = term;
        }
    });
    
    const search = e => {
        e.preventDefault();
        navigate("/Search", { replace: true });
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });
    }
    
    const closeButton = () => {
        document.querySelector("form input").value = "";
    }
    return (
        <HeaderSearchContainer className='header__search'>
            <HeaderLogo className='header__logo'>
                <Link to="/">
                    <img src='./assets/header_logo.png' width="92" height="30" alt="Google" />
                </Link>
            </HeaderLogo>
            <form onSubmit={search}>
                <input
                    type="search"
                    name="q"
                    id="searchInput"
                    onChange={e => {
                        setInput(e.target.value);
                        if (e.target.value !== "")
                            setCloseIcon(true);
                        else
                            setCloseIcon(false);
                    }}
                />
                {closeIcon ? (
                    <Button onClick={closeButton} >
                        <CloseRoundedIcon sx={{ color: "#5f6368" }} />
                    </Button>
                ) : ""}
                {(closeIcon) ? <ButtonBorder className='button__border'></ButtonBorder> : ""}
                <Button type="submit">
                    <SearchRoundedIcon color="primary" />
                </Button>
            </form>
        </HeaderSearchContainer>
    )
}

const HeaderSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    form {
        margin-inline: 1rem;
        padding-inline: .5rem;
        width: calc(100vw / 2);
        height: 2.875rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: none;
        border-radius: 25px;
        box-shadow: 0 2px 5px 1px rgba(64, 60, 67, .16);

        Button {
            margin-inline: 0;
            border-radius: 50px;

            &:hover {
                background: none;
            }
        }

        &:hover {
            background-color: #fff;
            box-shadow: 0 2px 8px 1px rgba(64,60,67,.24);
            border-color: rgba(223,225,229,0);
        }
    }

    input {
        width: 100%;
        height: 2.25rem;
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
    padding-inline: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonBorder = styled.div`
    width: 1px;
    height: 2rem;
    background-color: #dadce0;
    border-radius: 2px;
`;

export default HeaderSearch