import * as React from "react";
import { updateUserById} from './../utils'

interface UserInterface {
    id: number,
    username: string,
    name: string,
    email: string
}

export const UserEdit: React.FC<UserInterface & { handleRefresh: any, closeEdit: any}> = ({
    id , username, name, email, handleRefresh, closeEdit
}) => {
    const [userNameValue, setUserNameValue] = React.useState(username);
    const [nameValue, setNameValue] = React.useState(name);
    const [emailValue, setEmailValue] = React.useState(email);
    const handleUserNameValue = (e: any) => {
        setUserNameValue(e.target.value)
    }
    const handleNameValue = (e: any) => {
        setNameValue(e.target.value)
    }
    const handleEmailValue = (e: any) => {
        setEmailValue(e.target.value)
    } 
    const handleSumbit = () => {
        updateUserById(id, userNameValue, nameValue, emailValue);
        handleRefresh();
        closeEdit();
    }
    return (
        <div className="user">
            <div>username:</div>
            <div><input type="text" value={userNameValue} onChange={handleUserNameValue}/></div>
            <div>name:</div> <div><input type="text" value={nameValue} onChange={handleNameValue}/></div>
            <div>email:</div> <div> <input type="text" value={emailValue} onChange={handleEmailValue}/></div>
            <button onClick={handleSumbit}>submit</button>
        </div>
    );
}