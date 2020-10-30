import * as React from "react";
import {UserEdit} from './UserEdit'
interface UserInterface {
    id: number,
    username: string,
    name: string,
    email: string
}

export const User: React.FC<UserInterface & { handleRefresh: any}> = ({
    id , username, name, email, handleRefresh
}) => {
    const [editing, setEditing] = React.useState(false);
    const handleEdit = () => {
        setEditing(!editing)
    }
    return (
        <div className="user">
            <div>username: </div><div>{username}</div>
            <div>name: </div><div>{name}</div>
            <div>email:</div><div>{email}</div>
            <div>
                <button onClick={handleEdit}>edit</button>
            </div>
            {editing && <UserEdit 
                id={id} 
                username={username} 
                name={name} 
                email={email} 
                handleRefresh={handleRefresh}
                closeEdit={handleEdit}
            />}
        </div>
    );
}