import {useState, useEffect} from 'react';

const Dashboard = () => {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/api/users").then(response => response.json()).then(data => {
            setData(data);
            console.log(data)
        }).catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <div>
                {(typeof data.users === 'undefined') ? (<div className="flex flex-col gap-2 w-full">
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>) : (data.users.map((u) => <p>{u.id_text.id_text}</p>))}
            </div>
        </div>);
};

export default Dashboard;
