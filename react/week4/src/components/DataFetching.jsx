import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
const [user, setUser] = useState({})
const [login, setLogin] = useState("")
const [idFromButtonClick, setIdFromButtonClick] = useState("")

const handleClick = () => {
    setIdFromButtonClick(login)
}

  useEffect(() =>{
      axios
      .get (`https://api.github.com/users/${idFromButtonClick}`)
      .then(res => {
          console.log(res)
          setUser(res.data)
      })
      .catch (err => {
          "console.log(err)"
      })
  }, [idFromButtonClick])  

  return (
<div>
<input placeholder={"Search"} type="test" value={login} onChange={e =>setLogin(e.target.value)} />
<button type="button" onClick={handleClick}>Search</button>
<div>{user.id}</div>
</div>
  )
}

export default DataFetching;