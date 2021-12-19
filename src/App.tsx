import React, { useState } from 'react';
import axios from 'axios';
function App() {

  // const [data,setData] = useState<[{id:number,username:string,password:string}]>([]) 
  const [data,setData] = useState<{id:number,username:string,password:string}[]>([])

  // axios.get('http://localhost:8080/users/users').then((res)=>{
  //   setData(res.data)
  // })
  return (
    <div className="App">
      {data.map((user)=>{
        return (
          <p key={user.id}>{user.username}</p>
        )
      })}
    </div>
  );
}

export default App;
