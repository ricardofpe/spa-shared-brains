import axios from 'axios'
import Cookies from 'js-cookie';

const baseURL = "http://localhost:3000"

export function signup(data){
    delete data.confirmPassword;
    const body = {...data, username:generateUserName(data.name)}
    const response = axios.post(`${baseURL}/user`, body);
    return response;
}

function generateUserName(name) {
    const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
  }

  export function signin(data) {
    const response = axios.post(`${baseURL}/auth`, data);
    return response;
  }

  export function userLogged() {

    try{
        const response = axios.get(`${baseURL}/user/${Cookies.get("id")}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        }
      });
      return response;

    }catch(error){
      console.log("Not found user!", error)
    }
    
 
  }

