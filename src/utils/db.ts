
interface UserInterface {
    id: number,
    username: string,
    name: string,
    email: string
}

export const isDbEmpty = () => {
    const users:any = localStorage.getItem('userlist');
    if (users == null) {
        return true;
    }
    return false;
}

export const getToken = () => {
    return localStorage.getItem('token') || null;
}

export const storeUserList = (userList: Array<UserInterface>) => {
    localStorage.setItem('userlist', JSON.stringify(userList));
}

export const selectUserList = () => {
    const users:any = localStorage.getItem('userlist');
    if (users) return JSON.parse(users) as Array<UserInterface>;
    return null;
}

export const selectUserListWithRange = (from: number, perpage:number) => {
    const users:Array<UserInterface> = selectUserList() as Array<any>;
    return users.splice(from,perpage)
}

export const getSize = () => {
    const users: any = selectUserList();
    if (users == null) 
    {
        return 0;
    } else {
        return users.length;
    }
}

export const updateUserById = (id: number, username:string, name: string, email: string) => {
    const newUser = {
        id: id,
        username: username, 
        name: name,
        email: email
    };

    const users: Array<UserInterface> = selectUserList() as Array<any>;
    const updated_users: Array<UserInterface> = users.map( (user:UserInterface) => {
        if (user.id == id) {
            return newUser;
        } else {
            return user;
        }
    });
    storeUserList(updated_users);
}