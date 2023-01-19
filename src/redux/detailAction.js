

function getDetail(id){
    return async(dispatch,getState)=>{
        let url = `https://my-json-server.typicode.com/hoyyChoi/HNM-website//products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        dispatch({type:"GET_DETAIL",payload:{data}})
    }
}

export const detailAction = {getDetail}
