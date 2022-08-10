import { useEffect, useState } from 'react'
import API_KEY from './keys';

const CONTEXT_KEY = "d75845546de5b437c";

const useGoogle = (term) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async (query) => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${query}`)
                .then(res => {
                    return res.json();
                })
                .then(result => setData(result))
        }

        if( term != null )
            fetchData(term);
    }, [term]);

    return { data }
}

export default useGoogle