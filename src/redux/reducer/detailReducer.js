let initialState={
    detail:[]
}

function detailReducer(state=initialState,action){
    if(action.type=="GET_DETAIL"){
        return {...state,detail:action.payload.data}
    }
    return {...state}
}

export default detailReducer