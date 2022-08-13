import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "../reducer";



function HomeSearch() {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");

    const [closeIcon, setCloseIcon] = useState(false);

    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });
        navigate("/Search");
    }

    const lucky = e => {
        e.preventDefault();
        window.open("https://www.google.com/doodles", '_self');
    }

    const closeButton = () => {
        document.querySelector("form input").value = "";
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: ""
        });
    }

    return (
        <HomeSearchContainer>
            <HomeSearchLogo>
                <img src='./assets/google.png' width="272" height="92" alt="Google" />
            </HomeSearchLogo>
            <HomeSearchBar>
                <form>
                    <SearchInput>
                        <IconContainer>
                            <SearchRoundedIcon color='disabled' sx={{ width: "20px", height: "20px" }} />
                        </IconContainer>
                        <input
                            type="search"
                            autoComplete="off"
                            value={input}
                            onChange={e => {
                                setInput(e.target.value);
                                (e.target.value !== "") ? setCloseIcon(true) : setCloseIcon(false);
                            }
                            } />
                        {closeIcon ? (
                            <Button id='closeButtonContainer' onClick={closeButton} >
                                <CloseRoundedIcon sx={{ color: "#5f6368" }} />
                            </Button>
                        ) : ""}
                    </SearchInput>
                    <HomeSearchOptions>
                        <ButtonContainer>
                            <Button onClick={search} type="submit">Google Search</Button>
                            <Button onClick={lucky} >I'm feeling lucky</Button>
                        </ButtonContainer>
                    </HomeSearchOptions>
                </form>
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
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        #closeButtonContainer {
            margin-inline: 0;
            border-radius: 50px;

            &:hover {
                background: none;
            }
        }
    }

    input {
        width: 85%;
        height: 2.25rem;
        border: none;
        font-size: 1rem;
        font-weight: normal;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
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

const SearchInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    width: 75%;
    height: 44px;
    border: 1px solid #dfe1e5;

    margin-inline: 1rem;
    padding-inline: .5rem;
    margin-top: 8px;
    max-width: 36rem;
    border-radius: 25px;

    &:hover {
        box-shadow: 0 1px 6px rgba(32,33,36,.28);
        border-color: rgba(223,225,229,0);
        & input {
            border-color: rgba(223,225,229,0);
        }
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
    column-gap: 2rem;
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