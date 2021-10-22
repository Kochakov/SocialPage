import React from 'react'
import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dc7c1e65-73db-466e-8f1b-a594481d251b"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }

}



export const follow = (currentPage = 1, pageSize = 10) => {

    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}

