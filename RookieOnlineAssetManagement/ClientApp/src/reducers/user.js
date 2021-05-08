import * as userManage from '../contains/ManageUser'

const initialState={
    userList:[],
    userSelected:{}
}

export default (state=initialState,{type,payload})=>{
    switch(type){
        case userManage.USER_LIST:{
            state.userList=payload;
            return {...state}
        }
        case userManage.ADD_USER:{
            state.userList=state.userList.push(payload);
            return {...state}
        }
        case userManage.UPDATE_USER:{
            state.userList=payload;
            return {...state}
        }
        default:
            return state;
    }
}