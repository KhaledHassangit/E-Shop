import baseURL from "../Api/BaseURL";

const UseDeleteData = async (url)=>{
    const config = {
        headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }

    }
    const response = await baseURL.delete(url,config)
    return response;
    

}

export default UseDeleteData;