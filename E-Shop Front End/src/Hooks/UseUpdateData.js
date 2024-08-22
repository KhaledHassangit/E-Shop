import baseURL from "../Api/BaseURL";

export const UseUpdateData = async (url,params)=>{

    const config = {
        headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
    }
    const response = await baseURL.put(url,params,config)
    return response;
    

}

export const UseUpdateDataWithImage = async (url,params)=>{
    const config = {
        headers:{"Content-Type":"multipart/form-data",  
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
    }
    const response = await baseURL.put(url,params,config)

    return response;
    

}

