import baseURL from "../Api/BaseURL";

const UseGetData = async (url,params)=>{

    const response = await baseURL.get(url,params)
    return response.data;
    

}

export const UseGetDataToken = async (url, parmas) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const response = await baseURL.get(url, config);
    return response.data;
}

export  default UseGetData;