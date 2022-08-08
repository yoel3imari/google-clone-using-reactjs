import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import styled from 'styled-components';

import HeaderSearch from './HeaderSearch';

function Header(props) {
    let location = useLocation();
    return (
        <HeaderContainer in={props.in} justify={location.pathname === "/"? "flex-end":"space-between"}>
            {(location.pathname === "/") ? "" : <HeaderSearch />}
            <HeaderOptions>
                {(location.pathname === "/") ? <HeaderLinks /> : <HeaderSetting />}
                <HeaderMenu >
                    <AppsIcon sx={{ color: "#5f6368" }} />
                </HeaderMenu>
                <HeaderUser >
                    <img src='/assets/user.png' width="32" height="32" alt="username" />
                </HeaderUser>
            </HeaderOptions>
        </HeaderContainer>
    )
}

function HeaderLinks() {
    return (
        <Fragment>
            <HeaderLinkStyle rel='noreferrer' href="https://mail.google.com/">Gmail</HeaderLinkStyle>
            <HeaderLinkStyle rel='noreferrer' href="https://www.google.co.ma/imghp">Images</HeaderLinkStyle>
        </Fragment>
    )
}

function HeaderSetting() {
    return (
        <HeaderSettingStyle>
            <SettingsOutlinedIcon sx={{ color: "#5f6368" }} />
        </HeaderSettingStyle>
    )
}



const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.justify};
    height: ${props => (props.in === "search")? "3.75rem":"3rem"};
    padding-inline: .5rem;
    padding-block: ${props => (props.in === "search")? "1.75rem":"6px"};
`;

const HeaderOptions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const HeaderLinkStyle = styled.a`
    margin-inline: .5rem;
    font-size: 13px;
    line-height: 28px;
    color: #5f6368;
    margin-inline: .5rem;
    &:hover {
        text-decoration: underline;
    }
`;

const HeaderSettingStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: .25rem;
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 50px;
    transition: all .5s ease;
    cursor: pointer;
    &:hover {
        background-color: #efefef;
    }
`;

const HeaderMenu = styled.div`
    margin-inline: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 50px;
    transition: all .5s ease;
    cursor: pointer;
    &:hover {
        background-color: #efefef;
    }
`;

const HeaderUser = styled.div`
    margin-inline: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 50px;
    transition: all .5s ease;
    cursor: pointer;
    &:hover {
        background-color: #efefef;
    }
    img {
        border-radius: 50px;
    }
`;

export default Header