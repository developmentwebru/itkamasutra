import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseUrl:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY":"dd883b90-1691-47e1-81d7-7d51777f014d"
    }
});

export const UsersAPI = {
    getUsers(currentPage = 1,pageSize = 10){
        return    instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}

