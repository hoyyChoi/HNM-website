

function getProducts(searchquery){
    return async(dispatch,getState)=>{
        let url = ` https://my-json-server.typicode.com/hoyyChoi/HNM-website/products?q=${searchquery}`
        let response = await fetch(url)
        let data = await response.json()
        dispatch({type:"GET_PRODUCT",payload:{data}})
    }
}

export const productAction = {getProducts}