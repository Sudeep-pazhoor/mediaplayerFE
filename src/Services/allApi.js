import axios from "axios";
import base_url from "./base_url";

export const getExistingUserApi=async(email)=>{
    return await axios.get(`${base_url}/users?email=${email}`)
}

export const userRegisterApi=async(data)=>{
    return await axios.post(`${base_url}/users`,data)
}

export const userLoginApi=async(email,password)=>{
    return await axios.get(`${base_url}/users?email=${email}&password=${password}`)
}

export const addVideoApi=async(data)=>{
    return await axios.post(`${base_url}/videos`,data)
}

export const getVideolistApi=async()=>{
    return await axios.get(`${base_url}/videos`)
}

export const deleteVideoApi=async(id)=>{
    return await axios.delete(`${base_url}/videos/${id}`)
}

export const addCategoryApi=async(data)=>{
    return await axios.post(`${base_url}/category`,data)
}

export const getCategoryListApi=async()=>{
    return await axios.get(`${base_url}/category`)
}

export const delCategoryListApi=async(id)=>{
    return await axios.delete(`${base_url}/category/${id}`)
}

export const addHistoryApi=async(data)=>{
    return await axios.post(`${base_url}/history`,data)
}

export const getHistoryApi=async()=>{
    return await axios.get(`${base_url}/history`)
}

export const deleteHistoryApi=async(id)=>{
    return await axios.delete(`${base_url}/history/${id}`)
}

export const addVideoCategoryApi=async(id,data)=>{
    return await axios.put(`${base_url}/category/${id}`,data)
}