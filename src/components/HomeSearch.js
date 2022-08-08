import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styled from 'styled-components';
import { Button } from '@mui/material';


function HomeSearch() {
    const [input, setInput] = useState("");
    const [close, setClose] = useState(false);
    const navigate = useNavigate();
    const search = e => {
        e.preventDefault();
        navigate("../search", { replace: true });
    }
    const lucky = e => {
        e.preventDefault();
        window.open("https://www.google.com/doodles", '_self');
    }

    return (
        <HomeSearchContainer>
            <HomeSearchLogo>
                <img src='./assets/google.png' width="272" height="92" alt="Google" />
            </HomeSearchLogo>
            <HomeSearchBar>
                <form>
                    <IconContainer>
                        <SearchRoundedIcon color='disabled' sx={{ width: "20px", height: "20px" }} />
                    </IconContainer>
                    <input type="search" name="search" value={input} onChange={e => { setInput(e.target.value); if( e.target.value !== "" ) setClose(true); else setClose(false); }} />
                    <button type="reset" value="" >
                        { ( close )? <CloseRoundedIcon sx={{ color: "#5f6368" }} /> : "" }
                    </button>
                </form>
                <HomeSearchOptions>
                    <ButtonContainer>
                        <Button onClick={search}>Google Search</Button>
                        <Button onClick={lucky} >I'm feeling lucky</Button>
                    </ButtonContainer>
                </HomeSearchOptions>
            </HomeSearchBar>
            <LanguageContainer>
                Google offered in:
                <a href="https://www.google.com/setprefs?sig=0_2tTSVWqh33CYwwlU2fHRi4SpTlU%3D&hl=ar&source=homepage&sa=X&ved=0ahUKEwigquXfmLf5AhUUQkEAHXWaBHAQ2ZgBCA8">العربية</a>
                <a href="https://www.google.com/setprefs?sig=0_2tTSVWqh33CYwwlU2fHRi4SpTlU%3D&hl=fr&source=homepage&sa=X&ved=0ahUKEwigquXfmLf5AhUUQkEAHXWaBHAQ2ZgBCBA">Français</a>
            </LanguageContainer>
        </HomeSearchContainer>
    )
}

const HomeSearchContainer = styled.main`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: auto;
`;

const HomeSearchLogo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HomeSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 20px;
    width: 100%;
    form {
        margin-inline: 1rem;
        padding-inline: .25rem;
        margin-top: 8px;
        max-width: 36rem;
        width: 75%;
        height: 44px;
        border: 1px solid #dfe1e5;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-radius: 25px;

        &:hover {
            box-shadow: 0 1px 6px rgba(32,33,36,.28);
            border-color: rgba(223,225,229,0);
            & input {
                border-color: rgba(223,225,229,0);
            }
        }
    }

    input {
        width: 100%;
        height: 2.875rem;
        border-top: 1px solid #dfe1e5;
        border-bottom: 1px solid #dfe1e5;
        border-left: none;
        border-right: none;
        font-size: 1rem;
        font-weight: normal;
    }

    input:focus-visible {
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

`;

const IconContainer = styled.div`
    height: 20px;
    width: 20px;
    line-height: 20px;
    margin-inline: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HomeSearchOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    margin-top: 18px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    Button {
        background-color: #f8f9fa;
        border: 1px solid #f8f9fa;
        border-radius: 4px;
        color: #3c4043;
        font-family: arial,sans-serif;
        font-size: 14px;
        text-transform: capitalize;
        margin: 8px 4px;
        padding: 0 1.5rem;
        line-height: 27px;
        height: 36px;
        min-width: 54px;
        text-align: center;
        letter-spacing: 0;
        cursor: pointer;
        user-select: none;

        &:hover {
            box-shadow: 0 1px 1px rgba(0,0,0,.1);
            background-color: #f8f9fa;
            border: 1px solid #dadce0;
            color: #202124;
        }
    }
`;

const LanguageContainer = styled.div`
    width: 100%;
    text-align: center;
    font-size: small;
    color: #4d5156;
    display: inline-block;
    line-height: 28px;

    a {
        padding-left: 1rem;
        color: blue;
        &:hover {
            text-decoration: underline;
        }
    }
`;

export default HomeSearch