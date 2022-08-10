import React, { useEffect } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useStateValue } from '../components/StateProvider';
import useGoogle from '../useGoogle';

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogle(term);

    useEffect(() => {
        if (term != null)
            document.title = term;
    });
    return (
        <div>
            <Header in="search" />
            <SearchOptions></SearchOptions>
            <Results></Results>
            <Footer></Footer>
        </div>
    )
}

export default SearchPage