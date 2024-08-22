import baseURL from "../Api/BaseURL";

const UseInsertData = async (url,params)=>{
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const response = await baseURL.post(url,params,config)
    return response;
    

}

const UseInsertDataWithImage = async (url,params)=>{

    const config = {
        headers:{
            "Content-Type":"multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }

    }

    const response = await baseURL.post(url,params,config)
    return response;
    

}
export {UseInsertData,UseInsertDataWithImage};