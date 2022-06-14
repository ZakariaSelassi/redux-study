import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {fetchUsers} from "../features/user/userSlice"
const UserView = () => {

const users = useSelector((state) => state.user)
const dispatch = useDispatch()
useEffect(() => {
  dispatch(fetchUsers());  
    
}, [dispatch])

  return (
    <div>
        <h2>List of Users</h2>
        {
          users.user.loading ?  <div>loading...</div> : 
          <div>
            {users.user.map((item) => (
    
                    <p key={item.index} >{item.name}</p>             
                ))}
          </div>
        }
    </div>
  )
}

export default UserView