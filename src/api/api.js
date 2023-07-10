import axios from "axios";

const URL_BASE = 'http://3.128.249.166:8000/api'

// @ts-ignore
export async function getApi(endpointApi){
    try{
        const response = await axios.get(`${URL_BASE}${endpointApi}`)
        return response.data
    } catch(error){
        console.log(error)
    }
}

// @ts-ignore
export async function deleteApi(endpointApi){
    try{
        await axios.delete(`${URL_BASE}${endpointApi}`)
    } catch(error){
        console.log(error)
    }
}


// @ts-ignore
export async function postApi(endpointApi, obj){
    try{
        const response = await axios.post(`${URL_BASE}${endpointApi}`, obj)
        console.log('Cadastrado: ' + response.data)
    } catch(error){
        console.log(error)
    }
}

// @ts-ignore
export async function putApi(endpointApi, obj){
    try{
        const response = await axios.put(`${URL_BASE}${endpointApi}`, obj)
        console.log('Alterado: ' + response.data)
    } catch(error){
        console.log(error)
    }
}