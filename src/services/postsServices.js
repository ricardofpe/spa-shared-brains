import axios from 'axios'

const baseURL = "http://localhost:3000"

export function findAllThoughts(){
    const response = axios.get(`${baseURL}/thoughts`)
    return response
    
}