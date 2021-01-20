import axios from "axios"
import { API_URL } from "../../support/urlApi"

export const getProducts = (category) => {
    return async (dispatch) => {
        try {
            
            let get = await axios.get(API_URL + '/products')
            console.log("productAction.js GetProducts: ", get.data)
            dispatch({
                type: "GET_PRODUCTS",
                payload: get.data.products
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getDetail = (detail) => {
    return async (dispatch) => {
        try {
            let get = await axios.get(API_URL + `/products${detail}`)
            console.log("productAction.js GetDetail: ", get.data)
            dispatch({
                type: 'GET_DETAIL',
                payload: get.data.products
            })
        } catch (error) {
            console.log(error)
        }
    }
}