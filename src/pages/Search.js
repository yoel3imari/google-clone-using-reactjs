import React, { useEffect } from 'react'
import Header from '../components/Header';
import { useStateValue } from '../components/StateProvider';

function Search() {
    const [{ term }, dispatch] = useStateValue();
    useEffect(() => {
        if (term != null)
            document.title = term;
    });
    return (
        <div>
            <Header in="search" />
        </div>
    )
}

export default Search