//definig  all api for project ,it call commonAPI funtion

import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"
// uploadVideo api - api must call by Add component 
export const uploadVideoAPI = async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

// getAllVideo - called by view component 

export const getAllVideoAPI=async () => {
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

//saveHistory - called by VideoCard component

export const saveHistory=async (videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

//getHistoryApi - history component

export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}
export const removeHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}
export const removeVdoAPI =async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

export const addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}
export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

export const removeCategoryAPI =async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${id}`,{})
}

export const getSingleVideoAPI=async (id) => {
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

//updateCategoryAPI -called By category

export const updateCategoryAPI=async (categoryId,updatedCategoryDetails) => {
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails)
}

export const getSingleCategoryAPI =async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${id}`,"")
}