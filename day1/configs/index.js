import axios from 'axios'

const host = axios.create({
    baseURL: 'https://reqres.in/api/'
})

export {host}