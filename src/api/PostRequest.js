import axios from "axios"

const API = axios.create({baseURL: "https://socialmediabackend-ud7p.onrender.com"})
// const API = axios.create({baseURL: "http://localhost:5000"})
export const getPost=()=>API.get('/post');
export const getTimelinePosts=(id)=> API.get(`/posts/${id}/timeline`)

export const likePost=(id,userId)=>API.put(`post/${id}/like`,{userId:userId})