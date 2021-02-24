import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import AddFriend from './AddFriend'

function FriendsList(props) {
     const [friendsList, setFriendsList] = useState([])

     const getData = () => {
          axiosWithAuth()
          .get('/api/friends')
          .then((res) => {
               console.log(res)
               console.log(res.data)
               setFriendsList(res.data)
          })
          .catch((err) => {
               console.log(err)
          })
     }

     useEffect(() => {
          getData()
     }, [])

     return (
          <div>
               <AddFriend />
              {friendsList.map(friend => {
                   return (<div>
                   <h2>{friend.name}</h2>
                   <h3>{friend.email}</h3>
                   <h4>{friend.age}</h4>
                   </div>)
              })}
          </div>
     )
}

export default FriendsList
