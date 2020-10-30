import * as React from "react";
import {useEffect} from "react";
import { getUserList , updateUserById} from './../utils'
import {User} from './User'

interface UserInterface {
    id: number,
    username: string,
    name: string,
    email: string
}

export const UserList: React.FC = (props) => {
    const perPage = 2;
    const [loading, setLoading] = React.useState(false);
    const [total, setTotal] = React.useState(0);
    const [current, setCurrent] = React.useState(0);
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(null);

    useEffect( () => {
        getUserList( setLoading, setData, setError, setTotal, current, perPage);
    }, [])
    const handleNext = () => {
        console.log((current + 1)* perPage + " " + total);
        if ( loading == false &&(current + 1)* perPage < total){
            setCurrent(current + 1);
            getUserList( setLoading, setData, setError, setTotal, current + 1, perPage);
        }
    }
    const handlePre = () => {
        if (loading == false && current > 0){
            setCurrent(current - 1);
            getUserList( setLoading, setData, setError, setTotal, current - 1, perPage);
        }
    }
    const refresh =() => {
        getUserList( setLoading, setData, setError, setTotal, current, perPage);
    }
    return (
        <div>
         {data.map( (data: UserInterface) => <User key={data.id}
                    id={data.id} 
                    username={data.username} 
                    name={data.name}
                    email={data.email} 
                    handleRefresh={refresh} ></User> )}
         <div className="pagination">
            <button onClick={handlePre}>Pre</button>
         <div>{current + 1}</div>
            <button onClick={handleNext}>Next</button>
        </div>           
        </div>
    );
}