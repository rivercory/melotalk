import React from 'react';
import {useState, useEffect} from 'react';

function Home() {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/test").then(response => response.json()).then(data => {
            setData(data);
            console.log(data)
        }).catch((err) => console.log(err))
    }, [])

    return (<div className='App'>
            <div className="hero min-h-screen"
                 style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <h1>test 하는 중...</h1>
            <div>
                {(typeof data.articles === 'undefined') ? (<div className="flex flex-col gap-2 w-full">
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>) : (data.articles.map((u) => <p>{u.id_text.id_text}</p>))}
            </div>
        </div>)
}

export default Home;