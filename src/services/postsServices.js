import axios from 'axios'
import Cookies from 'js-cookie'

const baseURL = "http://localhost:3000"

export function findAllThoughts(){
    const response = axios.get(`${baseURL}/thoughts`)
    return response
    
}

export function getTopThought(){
    const response = axios.get(`${baseURL}/thoughts/top`)
    return response
    
}

export function searchThoughtsByTitle(title){
    const response = axios.get(`${baseURL}/thoughts/search?title=${title}`)
    return response
    
}

export function getAllThoughtsByUser(){
    try{
        const response = axios.get(`${baseURL}/thoughts/byUser`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        }
      });
      return response;

    }catch(error){
      console.log(error)
    }
    
}