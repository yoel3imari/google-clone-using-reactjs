import React from 'react'
import Header from '../components/Header';
import HomeSearch from '../components/HomeSearch';
import Footer from '../components/Footer';
import styled from 'styled-components';

const HomeContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

function Home() {
    return (
        <HomeContainer >
            <Header in="home" />
            <HomeSearch />
            <Footer />
        </HomeContainer>
    )
}

export default Home