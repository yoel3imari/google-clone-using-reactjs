import React, { Fragment, useEffect } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Results from '../components/Results';
import SearchOptions from '../components/SearchOptions';
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
        <Fragment>
            <Header in="search" />
            <SearchOptions />
            <Results />
            <Footer />
        </Fragment>
    )
}



export default SearchPage