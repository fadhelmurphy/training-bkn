import axios from 'axios'

const host = axios.create({
    baseURL: process.env.baseUrl
})

export {host}