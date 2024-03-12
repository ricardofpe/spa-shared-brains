import axios from 'axios'

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