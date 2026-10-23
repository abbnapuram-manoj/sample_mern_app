import {useState} from 'react'

function Login() {
  let [emailId, setEmailId] = useState("")
  let [password, setPassword] = useState("")

  let handleSubmit = (e) => {
    e.preventDefault()
    if(emailId === "admin" && password === "admin") {
      console.log("Login successful")
    } else {
      console.log("Login failed")
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={emailId} 
          onChange={(e) => setEmailId(e.target.value)} 
          placeholder="Enter emailId" 
        />
        <br/>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter password" 
        />
        <br/>
        <button type="submit">
          Login
        </button>
      </form>

      <br/>
      Email: {emailId}
      <br/>
      Password: {password}
    </div>
  )
}

export default Login