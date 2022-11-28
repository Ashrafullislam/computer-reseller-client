import { useEffect, useState } from "react"

// its make a client site token and verify token from server to access user
const useToken = (email) => {
    const [token,setToken] = useState('')
 
    useEffect( ()=> {
      if(email){
          
        fetch(`https://computer-reseller-server.vercel.app/jwt?email=${email}`)
        .then(res =>  res.json())
         .then(data => {
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
                setToken(data.accessToken)
            }
         })
      }
    },[email]);
    return [token];

}

export default useToken ;