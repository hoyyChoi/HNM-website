let initialState={
    id:'',
    password:'',
    auth:false
}

function loginReducer(state=initialState,action){
    if(action.type=="LOGIN"){
        return {...state,id:action.payload.id,password:action.payload.password,auth:true}
    }else if(action.type=="LOGOUT"){
        return {...state,auth:false}
    }
    return {...state}
}

export default loginReducer