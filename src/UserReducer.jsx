import { createSlice } from "@reduxjs/toolkit";
import { users } from "./Data";


const UserReducer=createSlice({
    name:"users",
    initialState:users,
    reducers:{
        addUsers:(state,action)=>{
            console.log(action)
            state.push(action.payload);

        },
        editUser:(state,action)=>{
            console.log(action.payload)
            const{id,name,email}=action.payload;

            const userId=state.find(user =>
                user.id==id
                )
                if(userId){
                     userId.name=name,
                     userId.email=email
                }
        },
        deleteUsers:(state,action)=>{
            const{id}=action.payload;
            const userid=state.find(user=>user.id==id);
            if(userid){
                return state.filter(user=>user.id!==id)
            }

        }


    }
})
export const {addUsers,editUser,deleteUsers} = UserReducer.actions;
export default UserReducer.reducer;