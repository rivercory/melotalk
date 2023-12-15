import React from 'react';
import { useState, useEffect } from 'react';

function Home() {
    const [data, setData] = useState([{}])

    useEffect(() =>
    {
        fetch("/data").then(
            response => response.json()
        ).then(
            data => {
                setData(data);
                console.log(data)
            }
        ).catch(
            (err) => console.log(err)
        )
    }, [])

    return (
        <div className='App'>
            <h1>test 하는 중...</h1>
            <div>
                { (typeof data.members === 'undefined') ? (
                    <div className="flex flex-col gap-2 w-full">
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                ) : (
                    data.members.map((u) => <p>{u.name}</p>)
                )}
            </div>
        </div>
    )
}

export default Home;