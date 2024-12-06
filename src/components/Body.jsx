import React, { useEffect, useState } from 'react'
import '../App.css';
import Memecard from './Memecard';
import Shimmer from './Shimmer';

const Body = () => {
    const [Meme, setMeme] = useState([]);
    const [Loading, setLoading] = useState(true);

    const handleScroll = () => {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
            fetchmeme();   // fetch api
            setLoading(true);
        }
    }
    const fetchmeme = async () => {
        try {
            const getmeme = await fetch('https://meme-api.com/gimme/5');
            if (!getmeme.ok) {
                throw new Error(`HTTP Status Error Status:${getmeme.status}`);
            }
            const memejson = await getmeme.json();
            setMeme((Meme) => [...Meme, ...memejson.memes])
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        fetchmeme();
        return () => window.removeEventListener("scroll", handleScroll);
    },[])

    return (
        <div className='container'>
            {
                (Meme.map((data, index) => (<Memecard key={index} {...data} />)))
            }
            {
                Loading && <Shimmer />
            }
        </div>
    )
}
export default Body;
