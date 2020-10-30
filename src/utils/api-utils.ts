import axios from 'axios';
import {storeUserList, isDbEmpty, selectUserListWithRange, getSize} from './db';

const USERS_ENDPOINT :string = 'https://jsonplaceholder.typicode.com/users';


const fetchUsers = (setData: any, setTotal:any, current: number, perPage: number) => {
    const total = getSize();
    setTotal(total);
    const users = selectUserListWithRange(current * perPage, perPage);
    setData(users);
}

export const getUserList = (setLoading: any, setData: any, setError: any, setTotal:any, current: number, perPage: number) => {        
    if (isDbEmpty()) {    
        axios.get(USERS_ENDPOINT)
        .then(function (response) {
            setLoading(false);
            storeUserList(response.data);
            fetchUsers(setData, setTotal, current, perPage);
        })
        .catch(function (error) {
            setError(error)
            console.log(error);
        });
    } else {
        fetchUsers(setData, setTotal, current, perPage);
    }
}