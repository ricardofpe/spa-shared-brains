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
export function createThought(body) {
  try {

    const response = axios.post(`${baseURL}/thoughts`, body, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
    
  } catch (error) {
    console.log(error)
  }
 
}

export function getThoughtById(id) {
  const response = axios.get(`${baseURL}/thoughts/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function editThought(body, id) {
  const response = axios.patch(`${baseURL}/thoughts/${id}`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function deleteThought (id) {
  const response = axios.delete(`${baseURL}/thoughts/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}